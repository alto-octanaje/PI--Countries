const axios = require("axios");
const {Country} = require('../db'); 


const allCountries=async () =>{ 
    const buscar = Country.findAll();
     
  if(buscar.length===0){
    let  apiCountriesResponse = await axios.get('https://restcountries.com/v3/all');
    await apiCountriesResponse.data.map((e) => {
      let country= {
        id: e.cca3,
        name: e.name.common,
        image: e.flags[1],
        continent: e.continents[0],
        capital: e.capital ? e.capital[0] : 'Not found',
        subregion: e.subregion ? e.subregion: 'not Found',
        region: e.region,
        area: e.area,
        population: e.population
      }
      Country.findOrCreate({where: country });
      // Country.bulkCreate({where: country });
    })

  }
 else console.log("ya esta en mi base de datos");
  }
 
module.exports= {allCountries}


// // // const loadDataCountris = async() => {
// // //     let dataCountries = await Country.findAll({})
// // //     // if(dataCountries.length)console.log('Country data is already in the database')
// // //     if(!dataCountries.length){
// // //         axios('https://restcountries.com/v3/all')
// // //         .then(res => {
// // //             let bulk= res.data.map(e=>({
// // //                 id: e.cca3,
// // //                 name: e.name.common,
// // //                 image: e.flags[0],
// // //                 continent: e.continents[0],
// // //                 capital: e.capital ? e.capital[0] : 'Not found',
// // //                 subregion: e.subregion,
// // //                 area: e.area,
// // //                 population: e.population
// // //             }));
// // //              Country.bulkCreate(bulk);
// // //         })
// // //         .then(console.log('Data obtained from URL'))
// // //         .catch(error => console.log(error))
// // //       }
// // // };
