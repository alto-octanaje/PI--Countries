//recorre un array de usuarios dede renderizar todos los componentes
import Cards from "../Cards/Cards";
import style from "./CardsCountries.module.css"
import { useSelector } from "react-redux";

// const mielement=[{id:1,name:"jeisson"},{id:2,name:"manuel"}] 
const CardsCountires=()=>{
const allCountries = useSelector( state => state.countries)

    return(
        <div className={style.container} >
            {allCountries.map(e=>{
               return <Cards
               key={e.cca3}
               id={e.cca3}
               name={e.name.common}
               />
            })}
        </div>
    )
}
export default CardsCountires;

// importes donde se van amostrar todas las cartas "Home"