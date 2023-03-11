import axios from "axios";
import { GET_COUNTRIES , GET_COUNTRY_DETAILS } from "./action_type";
 

export const getCountris =()=>{
    return async function (dispatch){
        const apiData= await axios.get('http://localhost:3001/countries');
        const countries= apiData.data;
        dispatch({type: GET_COUNTRIES,payload:countries})
    }
}

export const getCountriesDetails = (id) => {
  return async function (dispatch){
    const apiDataid= await axios.get(`http://localhost:3001/countries/${id}`)
    const countriesid= apiDataid.data;
    console.log(countriesid);
    return dispatch({type: GET_COUNTRY_DETAILS ,payload:countriesid})
    
  }
};




// export const getCountry=(id)=>{
//     return async function(dispatch){
//         const apiData= await axios.get(`https://restcountries.com/v3/${id}`)
//         const country=apiData.data;
//         dispatch({type: GET_COUNTRYID, payload: country })
//     }
// }

// la action create no puede hacer la req debe re tornar una fn() que si pueda hacer req 
// "no puede porque es una operacion  asingcrona "
//por cada caso action.type returna la copia de estado con la propiedad a modifica action.payload si es necesario 
//vamos home GET_COUNTRIES llama una fn() debe ejecutarce cuando semonta el componente home para ver los elemntos
