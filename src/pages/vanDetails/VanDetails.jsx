import './VanDetails.css' 
import Navbar from '../../components/navbar/Navbar' 
import {Link , useLoaderData, useLocation, useParams} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { requireAuth } from '../../utils'


export default function VanDetails(){ 
    let param = useParams()  
    let van = useLoaderData() 
    
    const location = useLocation()  
    
    let filterType = location.state?.type || 'All'

    return(
        <>
            <div className="van-details">
                <Link to = {`..${location.state.search ? `?${location.state.search}` : ''}`} relative='path' 
                 state={{search:location.state.search }}>
                    {`Back to ${filterType} Vans`}
                </Link>  

                <img src={van?.imageUrl} alt="" />
                <div className="van-contents">
                    <h4>{van ? van.name :'' }</h4>
                    <h4>{van?.price}/day</h4>
                    <p>{van?.description}</p>
                </div>
            </div>
        </>
    )
}

export async function loader({params}){ 
    await requireAuth()
    const res = await fetch(`/api/vans/${params.id}`) 
    let van = await res.json() 
    return van.vans
}