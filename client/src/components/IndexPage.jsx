
import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import Footer from "./Footers/Footer";
import Header from "./Headers/Header";

export default function IndexPage() {









    return (
        // <div>




        <div className="h-screen relative overflow-hidden font-serif dark:backdrop-blur-xl ">
            <div className="">

                <img src={`${img1}`} alt="" className="h-screen object-cover lg:w-screen absolute z-1 filter dark:brightness-50" />

            </div>
            <div className="backdrop-blur-lg h-full lg:backdrop-blur-none dark:backdrop-blur-xl ">


                <div className="text-blck sticky top-0   ">
                    <Header />
                </div>
                <div className="relative flex items-center justify-around h-3/6  ">
                    <Link to={`/search`} className="text-gray-900 lg:text-gray-700 text-2xl lg:text-4xl dark:text-gray-300 ">Whip Up Deliciousness:  Explore, <br /> <span className="text-xl"> Cook, Savor!</span></Link>
                    <p></p>
                </div>
            </div>

            <div className=" absolute bottom-0 ">

                <Footer />
            </div>

        </div>

        // </div>

    )
}