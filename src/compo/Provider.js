import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Context from "./Context";
import {toast} from'react-toastify'


export default function Provider(props)
{
    const [people,setpeople]=useState([])
    const url="https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni"
    const getpeople=()=>{
        fetch(url).then((data)=>data.json()).then((res)=>setpeople(res))
      
    }

    const deleted = (id) => {
        fetch("https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni/"+id,{
            method:"DELETE",
            headers:{"Content-Type":'application/json'}

        }).then((data)=>data.json).then((res)=>{
            getpeople();
            toast.success("Deleted Successfully")})
      };
    console.log("provider")
    console.log(people)


    useEffect(()=>{
        getpeople()
    },[])
    return(
        <Context.Provider value={{people,setpeople,getpeople,deleted}}>
            {props.children}
        </Context.Provider>

        
    )
}