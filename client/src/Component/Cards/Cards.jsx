import style from "./Cards.module.css";

const Cards=(porps)=>{
    return(
        <div className={style.theCards} >
            una Cards
            <p>name:{porps.name} </p>
            <p>id:{porps.id} </p>

        </div>
    )
}
export default Cards

//debe mostrar la info de cada usuario mapeado de mi array de inf y darnos un link del detalle 
// importas en donde van todas las cartas en "cardsCountries"