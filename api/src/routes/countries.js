const { Router } = require('express');
const { Country, Activity } = require('../db');
const router = Router();
const axios = require('axios')

 
router.get('/', async (req, res) => {
    const { name } = req.query
    const allCountries = await Country.findAll({ include: Activity });
    try {
        res.status(200).json(allCountries) 
    } catch (error) {
        res.status(404).json({msg: "No data in the database"})
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    try {
        if (id.length > 1) {
                    idCountries = await Country.findByPk(id, { include: Activity })
            
                    idCountries = {
                        id: idCountries.id,
                        name: idCountries.name,
                        image: idCountries.image,
                        continent: idCountries.continent,
                        capital: idCountries.capital,
                        subregion: idCountries.subregion,
                        area: idCountries.area,
                        population: idCountries.population,
                        activities: idCountries.activities.map((e) => {
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
                res.json(idCountries)
      
        
    } catch (error) {
        res.status(200).json({msg: "ID not found"})
    }

 
});

module.exports = router;


// const findCountry= await Country.findAll({
//     where:{ id: req.params.id,},
//     include:[{
//         model:Activity,
//         through:{
//             where:{
//                 id: req.params.idPais
//             }
//         }
//     }]
   
// })
// res.status(200).json(findCountry)