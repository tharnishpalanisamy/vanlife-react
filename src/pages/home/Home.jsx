import Navbar from "../../components/navbar/Navbar"; 
import './Home.css' 

export default function Home(){
    return(
        <>
            <section className="home-content">
                <h1 className="home-title">
                    You got the travel plans, we got the travel Vans
                </h1>
                <p className="home-text">
                    Add adventures to your life by joining the @vanlife movement . 
                    Rent the perfect van to make yout project road trip
                </p>


                <button className="find-van-button">Find Your Van</button>
            </section> 

            
            
        </>
    )
}