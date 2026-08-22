import { useOutletContext } from "react-router";

export default function Photos(){ 
    const currentVan = useOutletContext()  
    console.log('photo' , currentVan);
    
    
    return (
        <>
            <div className="img-items">
                <img src={currentVan.imageUrl} alt=""  className="image-item"/>  
                <img src={currentVan.imageUrl} alt=""  className="image-item"/>
                <img src={currentVan.imageUrl} alt=""  className="image-item"/>
                <img src={currentVan.imageUrl} alt=""  className="image-item"/>
            </div>
        </>
    )
}