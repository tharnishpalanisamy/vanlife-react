import { useEffect, useState } from "react"
import './Host.css' 
import { NavLink } from "react-router-dom"
export default function HostVans(){ 
    const [hostVans , setHostVans] = useState([]) 
    useEffect(()=>{
        fetch('/api/vans').then(res => res.json()).then(res => setHostVans(res.vans)) 
    } , [] )

    let hostVanElements = hostVans.map(van =>{ 
        return (                      
        <NavLink to={`${van.id}`} className="card" key={van.id}>
            <div className="van-img-container">
                <img src={van.imageUrl} alt="" className="van-img" /> 
            </div> 
            <div className="van-details">
                <h3>{van.name}</h3> 
                <p>${van.price}/day</p>  
            </div>
        </NavLink>
        )
    })
    return(
        <>
            <h1>Your listed Vans</h1>   
            {hostVanElements}
            
        </>
    )
}