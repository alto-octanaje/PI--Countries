const { Router } = require('express');
const { Country, Activity } = require('../db');
const router = Router();
const axios = require('axios')

 
router.get('/', async (req, res) => {
    const { name } = req.query
    const allCountries = await Country.findAll({ include: Activity });
    try {
        if(!allCountries.length){
            await axios.get('https://restcountries.com/v3/all')
            .then(res=> res.data.map(async (e) => {
                const apiCountries={
                    id: e.cca3,
                name: e.name.common,
                image: e.flags[0],
                continent: e.continents[0],
                capital: e.capital ? e.capital[0] : 'Not found',
                subregion: e.subregion,
                area: e.area,
                population: e.population
                }
                await Country.create(apiCountries);
            }))
            console.log('creado')
          }else{
            res.status(200).json(allCountries)
          }
        
    } catch (error) {
        res.status(404).json({msg: "error"})
    }
   





    // if (name) {
    //     const byName = await allCountries.filter(i => i.name.toLowerCase().startsWith(name.toLowerCase()))
    //     byName.length ?
    //         res.json(byName) :
    //         res.status(404).send({ 'msg': 'Not found' })
    // } else {
    //     res.json(allCountries)
    // }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    let countries

    try {
        if (id.length > 1) {
            countries = await Country.findByPk(id, { include: Activity })

            countries = {
                id: countries.id,
                name: countries.name,
                image: countries.image,
                continent: countries.continent,
                capital: countries.capital,
                subregion: countries.subregion,
                area: countries.area,
                population: countries.population,
                activities: countries.activities.map((e) => {
                    return {
                        id: e.id,
                        name: e.name,
                        difficulty: e.difficulty,
                        duration: e.duration,
                        season: e.season
                    }
                })
            }
        }
        res.json(countries)
    } catch (error) {
        next(error)
    }
});

module.exports = router;