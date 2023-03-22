import style from "./Form.module.css";
import { useState,useEffect } from "react";
import validation from "./Validation";
import { useHistory } from 'react-router-dom';
import { getCountries,postActivity } from "../../Redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'


const Form=()=>{

    const dispatch=useDispatch();
    const history= useHistory();
    const countries=useSelector(state=>state.countries).sort((a,b)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        return 0;
    }) ;

//-------si re cargala pg los countries=state.countres tanien se cargaran -----
    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    const [activityData,setActivityData ]=useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countries:[]
    })

    const [errors, setErrors] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"", 
        countries:[],
       
    })

// ------- select-Country sin repetir y borrar avoluntad---------------
    function handleSelect(event) {
       
        if(activityData.countries.find(e=> e === event.target.value)){
            return  alert("The city is already selected")
        }else{
            setActivityData({
                ...activityData,
                countries: [...activityData.countries, event.target.value]
            })
            setErrors(validation(
                {...activityData, [event.target.name]:event.target.value}
            ))
        }
    }

    const handleDelete=(id)=>{
        setActivityData({
            ...activityData,
            countries: activityData.countries.filter(e=> e!== id.target.value) 
        })
    }

    


//para que cada cambio se vea reflejado 
    const handelChange=(e)=>{
        console.log(e.target.selectedOptions);
        setActivityData(
            {...activityData, [e.target.name]:e.target.value}
        )
        setErrors(validation(
            {...activityData, [e.target.name]:e.target.value}
        ))
    }

   


    
//--------- function post es llamada mediente del submit-------
    function handleSubmit(e) {
        e.preventDefault(); //evita que se recarge la pg
        if(!activityData.name ||
            !activityData.difficulty || 
            !activityData.duration || !activityData.season || activityData.countries.length===0 ){
            return   alert("datos no completados");
        }else{
            dispatch(postActivity(activityData))
            console.log(activityData);

            history.push('/home')
            Swal.fire({
                title: 'Activity created successfully',
                confirmButtonColor: "#34a57f"
            })
        }
    }

    const season = ["",'Winter', 'Spring', 'Autumn', 'Summer'];
    const difficulty = ["",1, 2, 3, 4, 5];
    const duration = ["",1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
console.log(activityData.countries);
    return(
        <div>
            <div>
                <div><h2>Add Activity</h2>
                    <div>
                    <form onSubmit={handleSubmit}>
{/* name Activity                                                                                                            */}
                            <div>
                                <label >Activity Name:</label>
                                <input type="text" value={activityData.name} onChange={handelChange} name="name" placeholder="Activity name..." />
                                {errors.name &&  <span style={{color:"red"}}> {errors.name} </span> }
                            </div>
{/* dificulty Activity                                                                                                       */}
                            <div>
                                <label>Difficulty :</label>
                                <select name="difficulty" value={activityData.difficulty} onChange={handelChange}  >
                                    <option  value="" hidden>Select an dificulty </option>
                                        {difficulty.map(e => (
                                            <option value={e} key={e}  >{e}</option>
                                        )
                                        )}
                                </select>
                                    {errors.difficulty? <span style={{color:"red"}} > {errors.difficulty} </span> : "" }
                            </div>
{/* duration Activity                                                                                                        */}
<                           div>
                                <label >Duration: </label>
                                <select name="duration" value={activityData.duration} onChange={handelChange}>
                                    <option value="" hidden>Select an option</option>
                                    {duration.map(e => (
                                        <option value={e} key={e} >{e}</option>
                                    ))}
                                </select>
                                {errors.duration? <span style={{color:"red"}} > {errors.duration} </span> : "" }
                            </div>                    
{/* season Activity                                                                                                       */}
                            <div>
                                <label >Season: </label>
                                <select name="season"  value={activityData.season}  onChange={handelChange} >
                                    <option value=""  hidden>--Select an season--</option>
                                    {season.map((e) => (
                                        <option value={e} key={e}  >{e} </option>            
                                    ))}
                                </select>
                                {errors.season? <span style={{color:"red"}} > {errors.season} </span> : "" }
                            </div>                            
{/* countries Activity                                                                                                       */}
                            <div>
                                <label>Add Country:</label>
                                <select  name="countries"  value={activityData.countries.length-1}  onChange={handleSelect} >
                                    <option  hidden>Select country</option>
                                        {countries.map(e => (
                                            <option value={e.name} name="countries" id={e.id} key={e.id} >{e.name}</option>
                                        ))}
                                </select>
                                {errors.countries ? <span style={{color:"red"}} > {errors.countries} </span> : "" }
                            </div>
                            <div>
                                <ul>
                                    <li> {activityData.countries.map(i=> 
                                    <div> 
                                        {i}
                                        <button onClick={e=>handleDelete(e)} key={i} value={i} type="button"  >x</button>
                                    </div> ) } </li>
                                </ul>
                            </div>                     
                         
                        <button type="submit" className={style.botFrom}  >ADD NEW ACTiVITY</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Form ;

// disabled={!activityData.name} // esta propiedad en el boton evita que se ajacute la funcion si no esta complita 
