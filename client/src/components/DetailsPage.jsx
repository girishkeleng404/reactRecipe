import { useEffect, useState } from "react";
import Header from "./Headers/Header";
import { useParams } from "react-router-dom";
import axios from 'axios'
import Ingredients from "./DetailsFolder/Ingredients";
import Highlights from "./DetailsFolder/Highlights";
import Steps from "./DetailsFolder/Steps";
import Summary from "./DetailsFolder/Summary";

export default function DetailsPage() {

    const { id } = useParams();
    const [details, setDetails] = useState([]);

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
        if (details.length === 0) {
            fetchDetails();
        }

    }, [id])


    return (
        <div>
            <Header />
            <div className="w-11/12 lg:w-9/12 bg-slate-50 mx-auto">

                <div className="grid gap-6 py-6">
                    <div className="flex justify-between items-baseline">

                        <h1 className="text-6xl text-gray-700 mx-4"> {details.title} </h1>

                        <div className="grid grid-cols-4 gap-4 mx-4">
                            <div className=" gap-1  ">
                                <img src="https://spoonacular.com/application/frontend/images/badges/gluten-free.svg" alt="" />
                                <span>G-free</span>
                            </div>
                            <div>
                                <img src="https://spoonacular.com/application/frontend/images/badges/dairy-free.svg" alt="" />
                                <span>D-free</span>
                            </div>
                            <div>
                                <img src="https://spoonacular.com/application/frontend/images/badges/paleo.svg" alt="" /> <span>paleo</span>
                            </div>
                            <div>
                                <img src="https://spoonacular.com/application/frontend/images/badges/primal.svg" alt="" />
                                <span>primal</span>
                            </div>

                        </div>

                    </div>

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
            </div>



        </div>
    )

}