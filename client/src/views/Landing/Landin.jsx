import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing=()=>{
    
    return(
    <div>
        <h1>welcome</h1>
        <Link to="/home" ><button className={style.buttoomLanding}> Home </button> </Link>
    </div>)
}
export default Landing;