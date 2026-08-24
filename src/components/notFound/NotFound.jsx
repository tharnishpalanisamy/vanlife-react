import './NotFound.css' 
import { Link } from 'react-router-dom'
export default function NotFound(){
    return(
        <>
            <h2>The Page You were Looking is not Found</h2> 
            <Link to={'/'}><button>Go Back to Home</button></Link>
        </>
    )
}