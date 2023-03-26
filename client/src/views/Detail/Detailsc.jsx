import style from "./details.module.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountriesDetails } from "../../Redux/action/action";
import { useSelector } from "react-redux";

export default function Detailsc() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesDetails(id));
  }, [dispatch, id]);

  const countriesDetail = useSelector((state) => state.countriesDetail);

  return (
    <article className={style.container}>
      <div className={style.imagen}>
        <img src={countriesDetail.image} alt="not found" />
      </div>

      <section className={style.styleDitails}>
        <h1 className={style.title}>Details</h1>
        <p>
          <span className={style.styleDitailsData}> id: </span>
          {countriesDetail.id}
        </p>
        <p>
          <span className={style.styleDitailsData}>name: </span>
          {countriesDetail.name}
        </p>
        <p>
          <span className={style.styleDitailsData}>continent: </span>
          continent: {countriesDetail.continent}
        </p>
        <p>
          <span className={style.styleDitailsData}>capital: </span>
          {countriesDetail.capital}
        </p>
        <p>
          <span className={style.styleDitailsData}> subregion:</span>

          {countriesDetail.subregion}
        </p>
        <p>
          <span className={style.styleDitailsData}>region: </span>

          {countriesDetail.region}
        </p>
        <p>
          {" "}
          <span className={style.styleDitailsData}>area:</span>
          {countriesDetail.area}
        </p>
        <p>
          {" "}
          <span className={style.styleDitailsData}>population:</span>
          {countriesDetail.population}
        </p>
        <div>
          <p className={style.styleActivitis}>
            Activity:{" "}
            {countriesDetail?.activities?.map((e) => (
              <p key={e.id}>
                {" "}
                <span className={style.styleDitailsData}>name:</span> {e.name}
              </p>
            ))}
          </p>
        </div>
      </section>
    </article>
  );
}
