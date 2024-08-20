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

export default function DetailsPage() {

    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const { data } = useContext(UserContext);
    const recipesPerPage = 12;



    useEffect(() => {
        const fetchDetails = async () => {

            try {
                const response = await axios.post('/details/' + id);
                console.log(response.data);
                setDetails(response.data);
            } catch (error) {
                console.log(error);

            }
        }
        // if (details.length === 0) {
        fetchDetails();
        // }
        window.scrollTo(0, 0);

    }, [id])

    const filteredData = {
        ...data,
        results: data.results.filter(dish => dish.id !== details.id)
    };

    return (
        <div className=" ">
           
            <Header />      
             
          
            <div className="w-screen lg:w-9/12 bg-slate-50 mx-auto">

                <div className="grid gap-6 py-6">
                    <DetailsHead details={details} />


                    <div className="grid lg:grid-cols-[3fr_2fr] gap-12  bg-white/80 rounded-3xl  p-6 drop-shadow-2xl">

                        <div className=" h-min grid">

                            <img className="w-full object-cover rounded-3xl" src={details.image} alt={details.title} />

                            <Highlights details={details} />

                        </div>

                        <Ingredients details={details} />

                    </div>


                    <Steps details={details} />
                    <Summary details={details} />

                </div>




                <div className="mx-2">
                    <h2 className="text-3xl text-start mx-4">More Recipes</h2>



                    <Cards data={filteredData} recipesPerPage={recipesPerPage} gridClassName="grid-cols-2 lg:grid-cols-4" />
                </div>





            </div>

<Footer/>

        </div>
    )

}