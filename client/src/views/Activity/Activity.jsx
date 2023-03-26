import { useDispatch, useSelector } from "react-redux";
import { filterActivities,getActivities } from "../../Redux/action/action";
import ActivityInfo from './ActivityInfo'
import { useEffect, useState } from "react";

const Activity = ()=>{
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getActivities())
        dispatch(filterActivities())
    },[])

    const allAct=useSelector(state=> state.allActivities)
    
    return(
        <main>
        <div>
            <h3>My Activities</h3>
                <section >
                        {allAct?.map(e=> {
                            return(
                                <ActivityInfo key={e} activity={e} /> 
                            )
                        }
                        )}
                </section >
        </div>
        </main>
    )
}
export default Activity;



