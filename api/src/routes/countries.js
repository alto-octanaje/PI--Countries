const { Router } = require('express');
const { Country, Activity } = require('../db');
const router = Router();
// const axios = require('axios')

  
router.get('/', async (req, res) => {
    const { name } = req.query
    const allCountries = await Country.findAll({ include: Activity });
    try {
        res.status(200).json(allCountries) 
    } catch (error) {
        res.status(404).json({err: error.message})
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (id.length > 1) {
                    idCountries = await Country.findByPk(id, { include: Activity })
//    x         
//                     idCountries = {
//                         id: idCountries.id,
//                         name: idCountries.name,
//                         image: idCountries.image,
//                         continent: idCountries.continent,
//                         capital: idCountries.capital,
//                         subregion: idCountries.subregion,
//                         area: idCountries.area,
//                         population: idCountries.population,
//                         activities: idCountries.activities.map((e) => {
//                             return {
//                                 id: e.id,
//                                 name: e.name,
//                                 difficulty: e.difficulty,
//                                 duration: e.duration,
//                                 season: e.season
//                             }
//                         })
//                     }
                }
                res.status(200).json(idCountries)
      
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

 
});

module.exports = router;


