import { useEffect, useState } from "react"
import { useParams  , NavLink } from "react-router-dom" 

export default function HostVanDetails(){ 
    let params = useParams() 
    const [currentVan , setCurrentVan] = useState({}) 
    
    useEffect(() =>{
        async function fetchVan(){ 
            let response = await fetch(`/api/vans/${params.id}`)  
            let data = await response.json() 
            setCurrentVan(data.van) 
        } 
        fetchVan()
    } , [])
     
    return(
        <>
            <p className="description">{currentVan.description}</p>
        </>
    )
}