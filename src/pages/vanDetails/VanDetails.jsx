import './VanDetails.css' 
import Navbar from '../../components/navbar/Navbar' 
import {Link , useLocation, useParams} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


export default function VanDetails(){ 
    let param = useParams()  
    
    const [currentVan , setCurrentVan] = useState(null) 

    const location = useLocation()  
    console.log('full', location);
    
    console.log('locstate',location.state.search);
    
    
    useEffect(() =>{
        async function fetchVan(){ 
            let response = await fetch(`/api/vans/${param.id}`)  
            let data = await response.json() 
            

            setCurrentVan(data.van) 
        } 
        fetchVan()
    } , [])
    
    
    let filterType = location.state?.type || 'All'

    return(
        <>
            <div className="van-details">
                <Link to = {`..${location.state.search ? `?${location.state.search}` : ''}`} relative='path' 
                 state={{search:location.state.search }}>
                    {`Back to ${filterType} Vans`}
                </Link>  

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