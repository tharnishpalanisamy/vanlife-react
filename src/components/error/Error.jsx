import { useRouteError } from 'react-router-dom'
import './Error.css' 

export default function Error(){

    const error = useRouteError() 
    console.log(error.status);
    
    return(
        <>
        <h1>An Error occurred please try again !</h1> 
        <h1>{error.status} you got a {error.message} </h1>
        </>
    )
}