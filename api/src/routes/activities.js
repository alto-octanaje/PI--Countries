const { Router } = require('express');
const { Activity, Country } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const allCountries = Country.findAll();
    if(!allCountries.length){
        allCountries = await axios.get('https://restcountries.com/v3/all');
    var apiCountries = apiCountriesResponse.data.map((e) => {
      return {
        id: e.cca3,
        name: e.name.common,
        image: e.flags[0],
        continent: e.continents[0],
        capital: e.capital ? e.capital[0] : 'Not found',
        subregion: e.subregion,
        area: e.area,
        population: e.population
      }
    })
        console.log('creado')
        await Country.create(apiCountries);
        res.status(200).json(allCountries)

  }
    
  } catch (error) {
    res.status(404).json({msg : error.msg})
  }
});

router.post('/', async (req, res, next) => {
     
    const {
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body;

    try {
        let activity = await Activity.create({ name, difficulty, duration, season })
        await activity.setCountries(countries)

        let activityWithCountry = await Activity.findOne({
            where: { name: name },
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
        res.json(activityWithCountry)
    } catch (error) {
        next(error)
    }

});

module.exports = router;