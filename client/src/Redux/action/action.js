import axios from "axios";

import { GET_COUNTRIES , 
  GET_COUNTRY_DETAILS, 
  GET_ACTIVITIES,
  FILTER_CONTINENT,
  FILTER_POPULATION,
  FILTER_ACTIVITY,
  ACTION_SEARCH,
   } from "./action_type";
  

 

export const getCountries =()=>{
    return async function (dispatch){
      try {
        const baceData= await axios.get('http://localhost:3001/countries');
        const countries= baceData.data;
        dispatch({type: GET_COUNTRIES,payload:countries})
      } catch (err) {
        console.log(err);
      }
    }
}

export const getCountriesDetails = (id) => {
  return async function (dispatch){
    try {
      const baceDataid= await axios.get(`http://localhost:3001/countries/${id}`)
      const countriesid= baceDataid.data;
      // console.log(countriesid);
      return dispatch({type: GET_COUNTRY_DETAILS ,payload:countriesid})
      
    } catch (err) {
      console.log(err);
    }    
  }
};

export const getActivities=()=>{
  return async function (dispatch){
    try {
      const findActivities=await axios.get('http://localhost:3001/activities')
      const myActyvity=findActivities.data
      
      return dispatch({type: GET_ACTIVITIES, payload: myActyvity})
    } catch (err) {
      console.log(err);
    }
   
  }
}
 
export const postActivity=(activityData)=>{
  return async function () {
    try {
      axios.post("http://localhost:3001/activities",activityData)
   .then(res=> (res))
    } catch (err) {
      console.log(err);
    } 
  }
}
//------------ filtrando...--------
export function filterContinent(rSelect) {
  return {
      type: FILTER_CONTINENT,
      payload: rSelect
  }
}

export function filterPopulation(params) {
  return {
    type: FILTER_POPULATION,
    payload: params
  }
}

export function filterActivities(act) {
  return{
    type:FILTER_ACTIVITY,
    payload: act
  }
}

// ---- BUSCAR-------
export function actionSearch(onSearch) {
  console.log("en la action "+onSearch);
  return{ 
    type:ACTION_SEARCH,
    payload: onSearch
  }
  
}



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
