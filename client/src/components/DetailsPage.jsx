import { useEffect, useState } from "react";
import Header from "./Headers/Header";
import { useParams } from "react-router-dom";
import axios from 'axios'

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
            <div className="w-9/12  mx-auto">

                <div className="grid gap-6 my-6">
                    <div>  <h1 className="text-6xl"> {details.title} </h1> </div>

                    <div className="grid lg:grid-cols-[3fr_2fr] gap-12">


                        <div className=" h-min grid">

                            <img className="w-full object-cover" src={details.image} alt={details.title} />

                            <div className="grid grid-cols-4  w-full">

                                {details.nutrition &&
                                    details.nutrition.nutrients
                                        .filter(nutrient =>
                                            ["Calories", "Protein", "Fat", "Carbohydrates"].includes(nutrient.name)
                                        )
                                        .map((nutrient, inx) => (
                                            <div key={inx} className="m-2  ">
                                                {nutrient.name === "Calories" && <p className="grid text-sm">Calories: <span className="text-2xl">{nutrient.amount}{nutrient.unit} </span></p>}
                                                {nutrient.name === "Protein" && <p className="grid text-sm">Protein: <span className="text-2xl">{nutrient.amount}{nutrient.unit} </span></p>}
                                                {nutrient.name === "Fat" && <p className="grid text-sm">Fat: <span className="text-2xl">{nutrient.amount}{nutrient.unit} </span></p>}
                                                {nutrient.name === "Carbohydrates" && <p className="grid text-sm">Carbs: <span className="text-2xl">{nutrient.amount}{nutrient.unit} </span></p>}
                                            </div>
                                        ))
                                }

                            </div>
                        </div>

                        <div className="">
                            <h1 className="text-3xl mb-6">Ingredients:</h1>
                            {details.extendedIngredients && details.extendedIngredients.map((ingredient, inx) => (
                                <div key={inx} className="m-2  ">
                                    
                                     
                                    <p className="capitalize">{ingredient.original} </p>


                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
    // return (
    //     <div>
    //         <Header />
    //         <h1 className="text-3xl"> {details.title} </h1>



    //         <div className="grid lg:grid-cols-[2fr_1fr] gap-4">

    //        <div className="grid grid-cols-[3fr_2fr]">


    //         <div className="grid grid-cols-3 px-6 h-min">
    //         {details.extendedIngredients && details.extendedIngredients.map((ingredient, inx) => (
    //             <div key={inx} className="m-2  ">
    //                 <p>Alise: {ingredient.aisle} </p>
    //               <p> Name: {ingredient.name} </p>  
    //               {/* <p>Amount : {ingredient.amount} </p> */}
    //               {/* <p>Consistency : {ingredient.consistency} </p> */}
    //               <p>original :{ingredient.original} </p>


    //             </div>
    //         ))}
    //         </div>
    //         <div className="bg-yellow-100 h-min">
    //             <img src={details.image} alt={details.title} />
    //         </div>
    //         </div>
    //       <div>

    //      <p className="text-3xl">Nutrition values:</p>
    //         <div className="w-full  grid grid-cols-3">

    //           {details.nutrition && details.nutrition.nutrients.map((nutrient, inx) => (
    //                 <div key={inx} className="m-2">
    //                     <p> Name: {nutrient.name}  </p>
    //                     <p>Amount : {nutrient.amount}{nutrient.unit}</p>
    //                     <p>DailyNeeds: {nutrient.percentOfDailyNeeds}% </p>
    //                 </div>
    //           ))}
    //         </div>
    //         </div>
    //         </div>
    //     </div>
    // )
}