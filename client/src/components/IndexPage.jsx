
import img1 from "../assets/img1.png";
import Footer from "./Footers/Footer";
import Header from "./Headers/Header";

export default function IndexPage() {









    return (
        <div className="h-screen relative overflow-hidden">
            <div>

                <img src={`${img1}`} alt="" className="w-screen absolute z-1" />

            </div>

            <div className="text-blck sticky top-0">
                <Header/>
            </div>

            <div className=" sticky ">

              <Footer/>
            </div>

        </div>



    )
}