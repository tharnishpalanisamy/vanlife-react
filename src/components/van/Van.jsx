import './Van.css'  
import {Link} from 'react-router-dom'

export default function Van(props) {
    return(
        <Link to={`${props.id}`} >
            <div className="van">
                <img src={props.imageUrl} alt=""  className='van-image'/> 
                <div className="van-footer">
                    <h4 className="van-title">{props.name}</h4> 
                    <h4 className="van-price">{props.price}/day</h4> 
                    
                </div>
            </div>
        </Link>
        
    )
}