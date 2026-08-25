import { useEffect, useState } from "react"
import { useParams  , NavLink } from "react-router-dom" 
import { useOutletContext } from "react-router";

export default function HostVanDetails(){ 
    let params = useParams() 
    const currentVan = useOutletContext() 
     
    return(
        <>
            <p className="description">{currentVan.description}</p>
        </>
    )
}