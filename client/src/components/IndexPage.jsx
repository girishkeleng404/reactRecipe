
import img1 from "../assets/img1.png";
import Footer from "./Footers/Footer";
import Header from "./Headers/Header";

export default function IndexPage() {









    return (
        // <div>



        
        <div className="h-screen relative overflow-hidden">
            <div>

                <img src={`${img1}`} alt="" className="h-screen object-cover lg:w-screen absolute z-1" />

            </div>

            <div className="text-blck sticky top-0">
                <Header/>
            </div>

            <div className=" absolute bottom-0 ">

           <Footer/>
            </div>

        </div>
   
        // </div>

    )
}