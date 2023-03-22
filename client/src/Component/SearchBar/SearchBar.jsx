import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { actionSearch } from "../../Redux/action/action";

export default function SearchBar() {

    const dispatch= useDispatch()
    const[found,setFound]=useState("");

    const handleChange=(e)=>{
        setFound(e.target.value)
    }
    const handelSearch=(e)=>{
        e.preventDefault()
        dispatch(actionSearch(found) )
    }
    

  return (
    <div>
        <form onSubmit={handelSearch} >
          <label>Seach: </label>
          <input type="search" placeholder="Search..." onChange={ (e)=>handleChange(e)}  />
          <button type="submit"  >Search</button>
        </form>
    </div>

  
  )
}