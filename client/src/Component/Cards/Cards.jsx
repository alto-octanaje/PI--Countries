import style from "./Cards.module.css";
import { Link } from "react-router-dom";



const Cards=(porps)=>{
    return(
        <div className={style.theCards} >
            
         <Link to={`/detailsc/${porps.id}`} > <h2>{porps.name}</h2> </Link>
            <p>id:{porps.id} </p>
            <p> continent:{porps.continent}</p>
            <p>capital: {porps.capital}</p>
            <p>subregion: {porps.subregion ? porps.subregion: 'not Found'}</p>
            <p>region: {porps.region}</p>
            <p>area: {porps.area}</p>
            <p>population: {porps.population}</p> 
            <img src={porps.image} alt="no se encontro la imagen" />

        </div>
    )
}
export default Cards

//debe mostrar la info de cada usuario mapeado de mi array de inf y darnos un link del detalle 
// importas en donde van todas las cartas en "cardsCountries"