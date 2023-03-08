import { GET_COUNTRIES } from "../action/action_type";

const inicialState={
    countries: [],
}
const rootReducer=(state=inicialState,action)=>{

switch (action.type) {
    case GET_COUNTRIES:
        return {...state,
        countries:action.payload};

    default:
        return {...state};
}
}
export default rootReducer;

//el reducer es una fn(state,actions) que sabe que debe hacerle al estado global 
//tiene un switch que evalua la actio.type y esto puede traer un playload:valor
// se genera un estado global inicial
// esto ya esta conectado con el store que es el que modifica el estado global
//por cada caso action.type returna la copia de estado con la propiedad a modifica action.payload si es necesario 
//vamos home GET_COUNTRIES yamauna fn() debe ejecutarce cuando semonta el componente home para ver los elemntos

