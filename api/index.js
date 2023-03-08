//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const server = require('./src/app.js');
// const { conn, Country } = require('./src/db.js');
// const axios = require('axios');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { allCountries }= require('./src/utils/utils')

// const allCountries=async () =>{ 
//   // const allCountries = Country.findAll();

// let  apiCountriesResponse = await axios.get('https://restcountries.com/v3/all');
// await apiCountriesResponse.data.map((e) => {
//   let country= {
//     id: e.cca3,
//     name: e.name.common,
//     image: e.flags[1],
//     continent: e.continents[0],
//     capital: e.capital ? e.capital[0] : 'Not found',
//     subregion: e.subregion ? e.subregion: 'not Found',
//     region: e.region,
//     area: e.area,
//     population: e.population
//   }
//   Country.findOrCreate({where: country });
// })
// }


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001,async  () => {
    await allCountries()
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});     