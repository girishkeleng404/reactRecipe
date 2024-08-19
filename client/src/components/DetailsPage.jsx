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

export default function DetailsPage() {

    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const { data } = useContext(UserContext);


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

    }, [id])


    return (
        <div>
            <Header />
            <div className="w-11/12 lg:w-9/12 bg-slate-50 mx-auto">

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

                <div>
                    <h2 className="text-3xl text-center">More Recipes</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-5 mx-auto gap-5 my-8" >
                        {data.results && data.results.length > 0 ? (
                            data.results.map((dish, inx) => (
                                <Link to={`/details/${dish.id}`} key={dish.id} className="flex justify-center items-center mb-8 rounded-lg drop-shadow-2xl">
                                    <div >


                                        <img
                                            src={dish.image}
                                            alt={dish.title}
                                            className="w-full h-60 object-cover rounded-lg "
                                        />
                                        <h3 className="recipe-title text-lg">{dish.title}</h3>
                                    </div>

                                </Link>
                            ))
                        ) : (
                            <p>No recipes found.</p>
                        )}
                    </div>
                </div>

            </div>



        </div>
    )

}