import { useEffect, useState } from "react"
import { useParams  , NavLink, Outlet } from "react-router-dom" 
import './VanDetailsLayout.css'

export default  function VanDetailsLayout (){

    let params = useParams() 
    const [currentVan , setCurrentVan] = useState({}) 
    
    useEffect(() =>{
        async function fetchVan(){ 
            let response = await fetch(`/api/vans/${params.id}`)  
            let data = await response.json()  
            console.log(data);
            
            setCurrentVan(data.van)  
        } 
        fetchVan()
    } , [])
    console.log( 'c' , currentVan);
    
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