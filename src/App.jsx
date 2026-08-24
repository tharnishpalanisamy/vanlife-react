// import Navbar from './components/navbar/Navbar' 
import Home from './pages/home/Home' 
import About from './pages/about/About'
import Vans from './pages/vans/Vans' 
import Layout from './components/layout/Layout'
import {Routes , Route , Outlet , createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'
import VanDetails from './pages/vanDetails/VanDetails'
import Host from './pages/host/Host' 
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews' 
import HostLayout from './components/hostlayout/HostLayout' 
import HostVans from './pages/host/HostVans' 
import HostVanDetails from './pages/host/HostVanDetails'
import VanDetailsLayout from './components/vanDetailsLayout/VanDetailsLayout'  
import Pricing from './pages/host/Pricing'
import Photos from './pages/host/Photos'  
import UserVanLayout from './components/UserVansLayout/UserVanLayout' 
import NotFound from './components/notFound/NotFound'  
import { loader as vansLoader } from './pages/vans/Vans' 
import Error from './components/error/Error'
 

export default function App(){ 
  const router = createBrowserRouter(createRoutesFromElements(
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/> 

            <Route path='vans' element={<Outlet/>}>  
              <Route index element={<Vans/>} loader = {vansLoader} errorElement={<Error/>}/>
              
              <Route path=':id' element={<VanDetails/>}/>
            </Route>

            
            


            <Route path='host' element={<HostLayout/>}>   
              <Route index element={<Host/>} /> 

              <Route path='vans' element={<HostVans/>} /> 
              <Route path='vans/:id' element = {<VanDetailsLayout/>} > 
                <Route index element={<HostVanDetails/>} /> 
                <Route path='pricing' element={<Pricing/>}/> 
                <Route path='photos' element={<Photos/>} />
              </Route>


              <Route path='income' element={<Income/>} /> 
              <Route path='reviews' element={<Reviews/>} />           
            </Route>

            <Route path = '*' element={<NotFound/>} />
          </Route> 
            ))
  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}