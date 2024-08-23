import { useContext, useEffect, useState } from "react";
import Header from "./Headers/Header";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import Ingredients from "./DetailsFolder/Ingredients";
import Highlights from "./DetailsFolder/Highlights";
import Steps from "./DetailsFolder/Steps";
import Summary from "./DetailsFolder/Summary";
import DetailsHead from "./DetailsFolder/DetailsHead";
import { UserContext } from "../UserContex";
import Cards from "./Cards";
import Footer from "./Footers/Footer";
import { Fade } from "react-awesome-reveal";


export default function DetailsPage() {

    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const { data } = useContext(UserContext);
    const recipesPerPage = 12;
    const y = document.documentElement.scrollHeight / 2;


    


    useEffect(() => {
        const fetchDetails = async () => {

            try {
                const response = await fetch(`http://localhost:4000/details/${id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                const data = await response.json();
               
                setDetails(data);
            } catch (error) {
                console.log(error);

            }
        }

        fetchDetails();

        window.scrollTo(0, 0);

    }, [id])

    const filteredData = {
        ...data,
        results: data.results.filter(dish => dish.id !== details.id)
    };

    return (
        <div className="overflow-x-hidden relative flex flex-col items-center dark:bg-zinc-900 dark:text-gray-100 ">

            <div className="fixed top-0 z-10 flex items-center bg-white/30 w-screen justify-center backdrop-blur-2xl dark:bg-zinc-900 ">
                <Header />

            </div>


            <div className="w-screen lg:w-9/12 bg-slate-50 mx-auto mt-20 lg:mt-24 dark:bg-zinc-900">

                <div className="grid gap-6 py-6 font-Roman">
                    <DetailsHead details={details} />

         <Fade> 
                    <div className="grid lg:grid-cols-[3fr_2fr] gap-12  bg-white/80 rounded-3xl  p-6 drop-shadow-2xl">

                        <div className=" h-min grid">
                          
                                <img className="w-full object-cover rounded-3xl" src={details.image} alt={details.title} />
                             
                            <Highlights details={details} />

                        </div>

                        <Ingredients details={details} />

                    </div>
                    </Fade>

                    <Steps details={details} />
                    <Summary details={details} />

                </div>




                <div className="mb-4">
                    <h2 className="text-3xl text-start mx-4 underline">More Recipes</h2>



                    <Cards data={filteredData} recipesPerPage={recipesPerPage} gridClassName="grid-cols-2 lg:grid-cols-4" x={0} y={y} />
                </div>




            </div>

            <Footer />

        </div>
    )

}