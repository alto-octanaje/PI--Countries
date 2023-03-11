import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountriesDetails } from "../../Redux/action/action";
import { useSelector } from "react-redux";
// import CardsCountires from '../../Component/CardsCountries/CardsCountires';
// import Cards from '../../Component/Cards/Cards';
export default function Detailsc() {

  const {id} = useParams();
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getCountriesDetails(id))
  },[dispatch,id])

const countriesDetail = useSelector(state=> state.countriesDetail)


  return (
    <div>
      <h1>Details</h1>
      <p>{countriesDetail.id}</p>
      <p>{countriesDetail.name}</p>
      <p>{countriesDetail.continent}</p>
      <p>{countriesDetail.capital}</p>
      <p>{countriesDetail.capital}</p>
      <p>{countriesDetail.subregion}</p>
      <p>{countriesDetail.region}</p>
      <p>{countriesDetail.area}</p>
      <p>{countriesDetail.area}</p>
      <p>{countriesDetail.population}</p>
      <img src={countriesDetail.image} alt="image not found" />

      
      
      

    </div>
    
  )
}
