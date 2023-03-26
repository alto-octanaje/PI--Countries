import { 
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_COUNTRY_DETAILS,
    FILTER_CONTINENT,FILTER_POPULATION,FILTER_ACTIVITY,ACTION_SEARCH} from "../action/action_type";

const inicialState={
    countries: [],
    countriesDetail:[],
    continent:[],
    population:[],
    allActivities:[],
    seeActivities: [],
}
const rootReducer=(state= inicialState,action)=>{

switch (action.type) {
    case GET_COUNTRIES:
        return {...state,
        countries:action.payload,
        continent:action.payload,
    }

    case  GET_ACTIVITIES:
        return{
            ...state,
            allActivities: action.payload
        }
    

    case GET_COUNTRY_DETAILS:
        return {
            ...state,
            countriesDetail: action.payload
        }

    case FILTER_CONTINENT :
        const allContinents = state.countries;
        const continentFilter = action.payload === 'All' ? allContinents :
            allContinents.filter(i => i.continent === action.payload)
        return {
            ...state,
            continent:continentFilter,
        }

             
        case FILTER_POPULATION:
            
            const orderPopulation = action.payload === 'Min' ?
            state.continent.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                    return 0;
                })  :
            state.continent.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;  
                    }
                    if (b.population > a.population) {
                        return 1;
                    }
                    return 0;
                })
                console.log(orderPopulation);
                return {
                    ...state,
                    continent: orderPopulation
                }

        case FILTER_ACTIVITY:
            console.log(action.payload +"en payload");
            const allActivities = state.countries;
            const activityFilter = allActivities.filter(e => e.activities.length > 0) 
                // ? allActivities.filter(c => c.activities.find((element) => element.name.toLowerCase() === action.payload)):"noy hay elemen"
                console.log("estoy");
                console.log(activityFilter);
            return {
                ...state,
                // continent: activityFilter,
                seeActivities: activityFilter
            }

        case ACTION_SEARCH:
            console.log("entre ami reducer "+ action.payload);
            const searchCountries= state.continent;
            const searchNameConuntries=searchCountries.filter(e=> e.name.toLowerCase().includes(action.payload.toLowerCase()) )
            console.log("estoy ac    "+ searchCountries);
            return {
                ...state,
                continent: searchNameConuntries
            }
            
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

