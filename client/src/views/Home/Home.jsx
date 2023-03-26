import Cards from "../../Component/Cards/Cards";
import style from "./Home.module.css";
// import style from ":"
// -------antes------
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterContinent,
  filterPopulation,
  getActivities,
} from "../../Redux/action/action";
import Paginado from "../paginado/paginado";
import Filters from "../../Component/Filters/Filters";
// const allCategories = ['all', ...new Set(items.map((item) => item.category))]; 




const Home = () => {
  // ---------paginado

  const allCountries = useSelector((state) => state.continent);
  const [currentPage, setCurrenPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const indexOfLastCountries = currentPage * countriesPerPage;
  const indexOfFristCharacter = indexOfLastCountries - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFristCharacter,
    indexOfLastCountries
  );

  const paginado = (pageNumber) => {
    setCurrenPage(pageNumber);
  };

  // -----paginado
  const dispatch = useDispatch();
  // funcion que ejecuta a getCountries para traer todo los elementos al home

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  // satado local para efiltrado

  const renderUpdate = () => {
    setCurrenPage(2);
    setTimeout(() => {
      setCurrenPage(1);
    }, 1);
  };

  //function del filtrado continent
  const handleFilterContinent = (e) => {
    e.preventDefault();
    dispatch(filterContinent(e.target.value));
    renderUpdate();
  };

  const handleFilterPopulations = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    dispatch(filterPopulation(e.target.value));
    renderUpdate();
  };

  return (
    <div>
      <Filters handleFilterContinent={(e)=>handleFilterContinent(e)}/>
      <div>
        <div>
          <select onChange={(e) => handleFilterContinent(e)}>
            <option value="All" key="All">
              All continents
            </option>
            <option value="Africa" key="Africa">
              Africa
            </option>
            <option value="Antarctica" key="Antarctica">
              Antarctica
            </option>
            <option value="Asia" key="Asia">
              Asia
            </option>
            <option value="Europe" key="Europe">
              Europe
            </option>
            <option value="North America" key="NorthAmerica">
              North America
            </option>
            <option value="Oceania" key="Oceania">
              Oceania
            </option>
            <option value="South America" key="SouthAmerica">
              South America
            </option>
          </select>
        </div>
        <div>
          <select onChange={(e) => handleFilterPopulations(e)}>
            <option value="Min" key="min">
              Population minima
            </option>
            <option value="Max" key="max">
              Population maxima
            </option>
          </select>
        </div>
      </div>
      <div>
        <Paginado
          countriesPrePage={countriesPerPage}
          allCountries={allCountries.length} //nececito un valor numerico
          paginado={paginado}
        />
      </div>
      <div className={style.divCards}>
        {currentCountries.map((e) => {
          return (
            <Cards
              key={e.id}
              id={e.id}
              name={e.name}
              continent={e.continents}
              image={e.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;

//antes debe estar el redux y su funcion de action.type
// ya se puede mostar lo elementos cuando se mota home se hace dispatch.
//cuandosemonta:ciclo de vida del componente "useEffect()", hacer: useDispatch()
