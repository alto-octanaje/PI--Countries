
import style from "./details.module.css";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountriesDetails } from "../../Redux/action/action";
import { useSelector } from "react-redux";


export default function Detailsc() {

  const {id} = useParams();
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getCountriesDetails(id))
  },[dispatch,id])

const countriesDetail = useSelector(state=> state.countriesDetail)


  return (
    <div className={style.contenedor} >
        <h1 className={style.title}>Details</h1>
      <div className={style.styleDitails}>
        <p>{countriesDetail.id}</p>
        <p>name:{countriesDetail.name}</p>
        <p>continent: {countriesDetail.continent}</p>
        <p>capital: {countriesDetail.capital}</p>
        <p>subregion: {countriesDetail.subregion}</p>
        <p>region: {countriesDetail.region}</p>
        <p>are: {countriesDetail.area}</p>
        <p>population: {countriesDetail.population}</p>
        <div>
        <p className={style.styleActivitis} >Activity: {countriesDetail?.activities?.map(e=>(<p key={e.id}>name: {e.name}</p>) )
          }
          </p>
        </div>
       
        
      </div>
      <div className={style.imagen} ><img src={countriesDetail.image} alt="not found" /></div>
    </div>
    
  )
}
