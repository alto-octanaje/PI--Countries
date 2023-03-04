const axios = require("axios");
const {Country} = require('../db');

const loadDataCountris = async() => {
    let dataCountries = await Country.findAll({})
    if(dataCountries.length)console.log('Country data is already in the database')
    if(!dataCountries.length){
        axios('https://restcountries.com/v3/all')
        .then(res => {
            let bulk= res.data.map(e=>({
                id: e.cca3,
                name: e.name.common,
                image: e.flags[0],
                continent: e.continents[0],
                capital: e.capital ? e.capital[0] : 'Not found',
                subregion: e.subregion,
                area: e.area,
                population: e.population
            }));
             Country.create(bulk);
        })
        .then(console.log('Data obtained from URL'))
        .catch(error => console.log(error))
      }
};

module.exports= loadDataCountris;

