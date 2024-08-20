
import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import Footer from "./Footers/Footer";
import Header from "./Headers/Header";

export default function IndexPage() {









    return (
        // <div>



        
        <div className="h-screen relative overflow-hidden ">
            <div>

                <img src={`${img1}`} alt="" className="h-screen object-cover lg:w-screen absolute z-1" />

            </div>

            <div className="text-blck sticky top-0   ">
                <Header/>
            </div>
            <div className="relative flex items-center justify-around h-3/6  ">
                <Link to={`/search`} className="text-gray-500 lg:text-gray-800 text-2xl lg:text-4xl ">Whip Up Deliciousness:  Explore, <br /> <span className="text-xl"> Cook, Savor!</span></Link>
                <p></p>
            </div>

            <div className=" absolute bottom-0 ">

           <Footer/>
            </div>

        </div>
   
        // </div>

    )
}