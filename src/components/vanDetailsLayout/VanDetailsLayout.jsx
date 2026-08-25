import { useEffect, useState } from "react"
import { useParams  , NavLink, Outlet, useLoaderData } from "react-router-dom" 
import './VanDetailsLayout.css'
import { requireAuth } from "../../utils"
export default  function VanDetailsLayout (){

    let params = useParams() 
    let currentVan = useLoaderData() 

    
    return(
        <> 
            <div className="van-container">
                <NavLink to={'..'}  relative="path">Previous</NavLink>
                <div className="basic-info">
                    <div className="img-container">
                        <img src={currentVan.imageUrl} alt="" className="img" /> 
                    </div> 
                    <div className="van-details">
                        <h3>{currentVan.name}</h3> 
                        <p>${currentVan.price}/day</p>  
                    </div>
                </div>

                <div className="van-navigation">
                    <NavLink to={`.`} end className={({isActive}) => isActive ? 'active-link' : ''}>Details</NavLink>
                    <NavLink to={`pricing`} 
                     className={({isActive}) => isActive ? 'active-link' : ''} >Pricing</NavLink>
                    <NavLink to={`photos`}
                    className={({isActive}) => isActive ? 'active-link' : ''}
                    >Photos</NavLink>
                </div> 

                <Outlet context={currentVan}/>
            </div>
        </>
    )
}

export async function loader({params}){ 
    await requireAuth() 
    let res = await fetch(`/api/vans/${params.id}`) 
    let vans = await res.json() 
    return vans.vans  
}