import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar= () =>{
 
    const location= useLocation();
  
    return(
        <div className={style.mainContainer} >
            <Link to="/home" >HOME</Link>
            
            {location.pathname !=="/activities" && <Link to="/activities" >Create Activity</Link>||  <Link to="/allactivity" >All Activities</Link>  }
            {location.pathname === "/home" && <SearchBar />  }
        </div>
        
    )
}

export default  NavBar;
