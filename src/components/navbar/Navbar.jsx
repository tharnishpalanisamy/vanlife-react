import Home from '../../pages/home/Home' 
import About from '../../pages/about/About'
import './Navbar.css' 
import { NavLink, redirect, useNavigate} from 'react-router-dom'

export default function Navbar(){  
    let navigate = useNavigate() 
    function handleClick(){
        navigate('/vans')
    }
    return(
    <nav className="navbar">
        <div className="brand">
            <NavLink to='/' className="brand-text">#VANLIFE</NavLink>
        </div>
        <div className="navigations"> 
            <button onClick={handleClick}>hiii</button>
            <NavLink to='host' 
            className={({isActive}) => isActive ? 'nav-active nav-link' : 'nav-link'}
            >Host</NavLink>
            
            <NavLink to='about' className={({isActive}) => isActive ? 'nav-active nav-link' : 'nav-link'}
            >About</NavLink>

            <NavLink to='vans' className={({isActive}) => isActive ? 'nav-active nav-link' : 'nav-link'}
            >Vans</NavLink>

        </div>
    </nav>
    )
}