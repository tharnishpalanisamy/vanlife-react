import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Vans from "./pages/vans/Vans"
import Layout from "./components/layout/Layout"

import {
    Route,
    Outlet,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom"

import VanDetails, {
    loader as vanDetailsLoader
} from "./pages/vanDetails/VanDetails"

import Host from "./pages/host/Host"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"

import HostLayout from "./components/hostlayout/HostLayout"

import HostVans, {
    loader as hostVansLoader
} from "./pages/host/HostVans"

import HostVanDetails from "./pages/host/HostVanDetails"

import VanDetailsLayout, {
    loader as vanDetailsLayoutLoader
} from "./components/vanDetailsLayout/VanDetailsLayout"

import Pricing from "./pages/host/Pricing"
import Photos from "./pages/host/Photos"

import NotFound from "./components/notFound/NotFound"

import {
    loader as vansLoader
} from "./pages/vans/Vans"

import Error from "./components/error/Error"

import Login, {
    loader as loginLoader,
    action as loginAction
} from "./pages/login/Login"

import { requireAuth } from "./utils"


const router = createBrowserRouter(

    createRoutesFromElements(

        <Route element={<Layout />}>

            {/* HOME */}

            <Route
                path="/"
                element={<Home />}
            />


            {/* ABOUT */}

            <Route
                path="about"
                element={<About />}
            />


            {/* LOGIN */}

            <Route
                path="login"
                element={<Login />}
                loader={loginLoader}
                action={loginAction}
            />


            {/* VANS */}

            <Route
                path="vans"
                element={<Outlet />}
            >

                <Route
                    index
                    element={<Vans />}
                    loader={vansLoader}
                    errorElement={<Error />}
                />

                <Route
                    path=":id"
                    element={<VanDetails />}
                    loader={vanDetailsLoader}
                />

            </Route>


            {/* HOST */}

            <Route
                path="host"
                element={<HostLayout />}
                loader={requireAuth}
            >

                {/* HOST DASHBOARD */}

                <Route
                    index
                    element={<Host />}
                />


                {/* HOST VANS */}

                <Route
                    path="vans"
                    element={<HostVans />}
                    loader={hostVansLoader}
                />


                {/* HOST VAN DETAILS */}

                <Route
                    path="vans/:id"
                    element={<VanDetailsLayout />}
                    loader={vanDetailsLayoutLoader}
                >

                    <Route
                        index
                        element={<HostVanDetails />}
                    />

                    <Route
                        path="pricing"
                        element={<Pricing />}
                    />

                    <Route
                        path="photos"
                        element={<Photos />}
                    />

                </Route>


                {/* INCOME */}

                <Route
                    path="income"
                    element={<Income />}
                />


                {/* REVIEWS */}

                <Route
                    path="reviews"
                    element={<Reviews />}
                />

            </Route>


            {/* 404 */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Route>
    )
)


export default function App() {

    return (
        <RouterProvider
            router={router}
        />
    )
}