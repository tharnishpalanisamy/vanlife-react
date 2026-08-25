// import Navbar from './components/navbar/Navbar' 
import Home from './pages/home/Home' 
import About from './pages/about/About'
import Vans from './pages/vans/Vans' 
import Layout from './components/layout/Layout'
import {Routes , Route , Outlet , createBrowserRouter , createRoutesFromElements, Navigate,RouterProvider, redirect } from 'react-router-dom'
import VanDetails , {loader as vanDetailsLoader} from './pages/vanDetails/VanDetails'
import Host from './pages/host/Host' 
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews' 
import HostLayout from './components/hostlayout/HostLayout' 
import HostVans , {loader as hostVansLoader} from './pages/host/HostVans' 
import HostVanDetails from './pages/host/HostVanDetails'
import VanDetailsLayout , {loader as vanDetailsLayoutLoader} from './components/vanDetailsLayout/VanDetailsLayout'  
import Pricing from './pages/host/Pricing'
import Photos from './pages/host/Photos'  
import UserVanLayout from './components/UserVansLayout/UserVanLayout' 
import NotFound from './components/notFound/NotFound'  
import { loader as vansLoader } from './pages/vans/Vans' 
import Error from './components/error/Error' 
import Login , {loader as loginLoader} from './pages/login/Login'
import { requireAuth } from './utils'
 

export default function App(){ 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/> 
      <Route path="login" element={<Login />} loader = {loginLoader} />

      <Route path='vans' element={<Outlet/>}>  
        <Route index element={<Vans/>} loader={vansLoader} errorElement={<Error/>}/>
        <Route path=':id' element={<VanDetails/>}  loader={vanDetailsLoader}/>
      </Route>

      {/* Move loader to the parent route */}
      <Route 
        path='host' 
        element={<HostLayout/>}
        loader={async () => await requireAuth()}
      >   
        <Route index element={<Host/>} 
        loader={async () => await requireAuth()}
        /> 
        <Route path='vans' element={<HostVans/>} 
        loader={hostVansLoader}
        /> 
        <Route path='vans/:id' element={<VanDetailsLayout/>}
        loader={vanDetailsLayoutLoader}
        > 

          <Route index element={<HostVanDetails/>} 
          loader={async () => await requireAuth()}
        /> 
          <Route path='pricing' element={<Pricing/>}
          loader={async () => await requireAuth()}
        /> 
          <Route path='photos' element={<Photos/>} 
          loader={async () => await requireAuth()}
        />
        </Route>
        <Route path='income' element={<Income/>} 
        loader={async () => await requireAuth()}/> 

        <Route path='reviews' element={<Reviews/>} 
        loader={async () => await requireAuth()}
         />           
      </Route>

      <Route path='*' element={<NotFound/>} />
    </Route> 
  ))
  return <RouterProvider router={router} />
}