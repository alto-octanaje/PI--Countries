import axios from "axios";
import { useState } from "react";


const Form=()=>{

    const [activityData,setActivityData ]=useState({
        activityname:"",
        dificultad:""
    })

    const change=(e)=>{
        setActivityData(
            {...activityData, [e.target.name]:e.target.value}
        )
    }
    const handleSubmit=(e)=>{
        e.preventDefault() 
        axios.post("http://localhost:3001/activities", activityData)
        .then(res=> alert(res))
        .catch(error=> alert(error))
    }

    return(
    <form onSubmit={handleSubmit} >
        <div>
            <label >Activity Name:</label>
            <input type="text" value={activityData.activityname} onChange={change} name="activityname" />
            <label > otra cosa :</label>
            <input type="text" value={activityData.activityname} onChange={change} name="activityname" />
        </div>
        <button type="submit" >Submit</button>

    </form>)
}
export default Form ;
// onChange={handleInputChange}