import Navbar from "../navbar/Navbar"; 
import Footer from "../footer/Footer"; 
import { Outlet } from "react-router-dom"; 
import './Layout.css'
export default function Layout() {
    return (
        <div className="site-wrapper">
            <Navbar />

            <main className="main-content">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}