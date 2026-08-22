import { Outlet , NavLink } from "react-router-dom"
import './HostLayout.css'
export default function HostLayout(){
    return(
        <> 
            <ul className="host-links">    
                <NavLink to = '.' className={({isActive})=> isActive ? 'host-link active-link' : 'host-link'} end>
                    dashboard 
                </NavLink>

                <NavLink to ='vans' className={({isActive})=> isActive ? 'host-link active-link' : 'host-link'}>
                     Vans
                </NavLink>

                <NavLink to ='income' className={({isActive})=> isActive ? 'host-link active-link' : 'host-link'}>
                     Income
                </NavLink>

                <NavLink to = 'reviews' className={({isActive})=> isActive ? 'host-link active-link' : 'host-link'}>
                    Review 
                </NavLink>

            </ul>
            <Outlet/>
        </>
    )
}