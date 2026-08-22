import { useOutletContext } from "react-router";

export default function Pricing(){ 
    const currentVan = useOutletContext()  
    console.log('price' , currentVan);
    
    return (
        <>
            <h1>Price : {currentVan.price}</h1> 
        </>
    )
}