import CardsCountires from "../../Component/CardsCountries/CardsCountires";
// -------antes------
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountris } from "../../Redux/action/action";

const Home=()=>{
    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(getCountris());
    },[dispatch])


    return(
    <>
    <h1>Estamos en Home</h1>
    <div>
        <CardsCountires/>
    </div>
    </>)
}
export default Home;
//antes debe estar el redux y su funcion de action.type
// ya se puede mostar lo elementos cuando se mota home se hace dispatch.
//cuandosemonta:ciclo de vida del componente "useEffect()", hacer: useDispatch()
