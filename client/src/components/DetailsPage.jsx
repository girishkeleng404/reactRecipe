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

        fetchDetails();
    }, [])

    return (
        <div>
            <Header />
            <h1 className="text-3xl"> {details.title} </h1>

           

            <div className="grid grid-cols-[2fr_1fr]">

           <div className="grid grid-cols-[3fr_2fr]">

           
            <div className="grid grid-cols-3 bg-orange-300 px-6">
            {details.extendedIngredients && details.extendedIngredients.map((ingredient, inx) => (
                <div key={inx} className="m-2  ">
                    <p>Alise: {ingredient.aisle} </p>
                  <p> Name: {ingredient.name} </p>  
                  {/* <p>Amount : {ingredient.amount} </p> */}
                  {/* <p>Consistency : {ingredient.consistency} </p> */}
                  <p>original :{ingredient.original} </p>
                    
                  
                </div>
            ))}
            </div>
            <div className="bg-yellow-100">
                <img src={details.image} alt={details.title} />
            </div>
            </div>

            <div className="w-full bg-green-200">
              {details.nutrition && details.nutrition.nutrients.map((nutrient, inx) => (
                    <div key={inx} className="m-2">
                        <p> Name: {nutrient.name}  </p>
                        <p>Amount : {nutrient.amount}</p>
                        <p>PercentOfDailyNeeds: {nutrient.unit} </p>
                    </div>
              ))}
            </div>
           
            </div>
        </div>
    )
}