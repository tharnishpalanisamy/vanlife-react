import { useEffect } from "react";
import './Vans.css'
import Navbar from "../../components/navbar/Navbar";  
import Van from "../../components/van/Van";
import { useState } from "react"; 
import { NavLink, useLoaderData, useLocation, useSearchParams } from "react-router-dom";

export default function Vans(){ 

    const [searchParams , setSearchParams] = useSearchParams()  
    let type = searchParams.get('type')  
    
    let location = useLocation() 


    let data = useLoaderData() 
    console.log('loader data',data);   

    if(type) {

        data = data.filter(item => item.type === type )
    }
    
    
    let elements = data.map(van => {
        return (
            <Van key = {van.id}  
                id = {van.id}
                name = {van.name} 
                description = {van.description} 
                price = {van.price} 
                imageUrl = {van.imageUrl}  
                searchParams={searchParams} 
                type = {van.type}
            
            
            />
        )
    })

    
    return(
        <>
        <div className="van-filters">
                    <button onClick={()=> setSearchParams({type:'simple'})} className={` type-button ${type == 'simple' ? 'selected' : null} `}>Simple</button>
                    <button onClick={()=> setSearchParams({type:'rugged'})} className={` type-button ${type == 'rugged' ? 'selected' : null} `}>Rugged</button>
                    <button onClick={()=> setSearchParams({type:'luxury'})} className={` type-button ${type == 'luxury' ? 'selected' : null} `}>Luxury</button>
                    {type && <button onClick={()=> setSearchParams({})}>Clear filter</button>}
                </div>      

            
            <div className="vans-container"> 
                
                {elements}
            </div>

        </>
    )
}

export async function loader(){

    throw new  Error('checking ')

    try{
        
        let response = await fetch('/api/vans')
        let data = await response.json()  
        // if(type) {
        //     data.vans = data.vans.filter(item => item.type == type) 
        // }
        // setVans(data.vans)
        return data.vans 
    }  
    catch(error){ 
        console.log(error); 
        return error 
    }

        return 'Loader summa data'
}