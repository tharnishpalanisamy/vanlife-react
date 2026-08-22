import './VanDetails.css' 
import Navbar from '../../components/navbar/Navbar' 
import {Link , useParams} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


export default function VanDetails(){ 
    let param = useParams()  
    
    const [currentVan , setCurrentVan] = useState(null) 
    
    useEffect(() =>{
        async function fetchVan(){ 
            let response = await fetch(`/api/vans/${param.id}`)  
            let data = await response.json() 
            

            setCurrentVan(data.van) 
        } 
        fetchVan()
    } , [])
    
    
    return(
        <>
            <div className="van-details">
                <Link to = '/vans' >Previous</Link>  

                <img src={currentVan?.imageUrl} alt="" />
                <div className="van-contents">
                    <h4>{currentVan ? currentVan.name :'' }</h4>
                    <h4>{currentVan?.price}/day</h4>
                    <p>{currentVan?.description}</p>
                </div>
            </div>
        </>
    )
}