import { useEffect } from "react";
import './Vans.css'
import Navbar from "../../components/navbar/Navbar";  
import Van from "../../components/van/Van";
import { useState } from "react"; 
import { NavLink, useSearchParams } from "react-router-dom";

export default function Vans(){ 

    const [vans , setVans] = useState([]) 
    const [searchParams , setSearchParams] = useSearchParams()  
    let type = searchParams.get('type')  
    

    useEffect(()=>{ 

        async function loadVans() {
            let response = await fetch('/api/vans')
            let data = await response.json()  
            if(type) {
                data.vans = data.vans.filter(item => item.type == type) 
            }
            setVans(data.vans)
        } 
        loadVans() 
        
    } , [type]  ) 
    
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
        <div className="van-filters">
                    <button onClick={()=> setSearchParams({type:'simple'})}>Simple</button>
                    <button onClick={()=> setSearchParams({type:'rugged'})}>Rugged</button>
                    <button onClick={()=> setSearchParams({type:'luxury'})}>Luxury</button>
                    <button onClick={()=> setSearchParams({})}>Clear filter</button>
                </div>      
            <div className="vans-container"> 
                
                {elements}
            </div>

        </>
    )
}