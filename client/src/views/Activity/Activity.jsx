import { useDispatch, useSelector } from "react-redux";
import { filterActivities } from "../../Redux/action/action";
import Cards from "../../Component/Cards/Cards";
import { useState } from "react";

const Activity = ()=>{
    const allAct=useSelector(state=> state.allActivities)
    const seeActivities= useSelector((state)=> state.seeActivities);
    const [myActivities,setMyActivities]= useState();

    const dispatch= useDispatch();

    const handleFilterActivities=(e)=>{
        console.log("el valor en fn: "+ e.target.value);
        dispatch(filterActivities(e.target.value))
    }

    return(
        <main>
        <div>
            <h3>My Activities</h3>
            
                <select onChange={e=> handleFilterActivities(e) } required>
                    <option value="">...</option>
                    <option value="All" >All Activity</option>
                        {allAct?.map((e,index) => (
                            <option value={e} name={e} key={index}>{e}</option>
                        ))}
                </select>
            
            <div >
            {
                seeActivities.map(e=>{
                return <Cards
                key={e.id}
                id={e.id}
                name={e.name}
                continent={e.continents}
                image={e.image}
                />
                })
            }
            </div>

        </div>
        </main>
    )
}
export default Activity;



