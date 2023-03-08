import axios from "axios";
import { GET_COUNTRIES } from "./action_type";


export const getCountris =()=>{
    return async function (dispatch){
        const apiData= await axios.get('https://restcountries.com/v3/all');
        const countries=apiData.data;
        dispatch({type: GET_COUNTRIES,payload:countries})
    }
;}

// la action create no puede hacer la req debe re tornar una fn() que si pueda hacer req 
// "no puede porque es una operacion  asingcrona "
//por cada caso action.type returna la copia de estado con la propiedad a modifica action.payload si es necesario 
//vamos home GET_COUNTRIES yamauna fn() debe ejecutarce cuando semonta el componente home para ver los elemntos
