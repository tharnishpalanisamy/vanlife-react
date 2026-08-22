import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";  
import Van from "../../components/van/Van";
import { useState } from "react";

export default function VansLayout(){ 

    const [vans , setVans] = useState([])

    useEffect(()=>{ 

        async function loadVans() {
            let response = await fetch('/api/vans')
            let data = await response.json() 
            setVans(data.vans)
        } 
        loadVans() 
        
    } , []  ) 
    
    let elements = vans.map(van => {
        return (
            <Van key = {van.id}  
                id = {van.id}
                name = {van.name} 
                description = {van.description} 
                price = {van.price} 
                imageUrl = {van.imageUrl}  
            
            
            />
        )
    })

    
    return(
        <>
            <div className="vans-container">
                {elements}
            </div>

        </>
    )
}