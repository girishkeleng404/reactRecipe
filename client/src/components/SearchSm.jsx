
import { useContext, useState } from "react";
import { UserContext } from "../UserContex";
import { useNavigate } from "react-router-dom";


export default function SearchSm() {


    const { data, setData } = useContext(UserContext);
    const navigate = useNavigate();

    const [inputDish, setInputDish] = useState("");
    const [cuisine, setCuisine] = useState("");

    const [diet, setDiet] = useState("");
    const [type, setType] = useState("");
    const [includeIngredients, setIncludeIngredients] = useState("");
    const [excludeIngredients, setExcludeIngredients] = useState("");
    const [filter, setFilter] = useState(false);
    // const [dishsList, setDishsList] = useState([]);

    const fetchData = async () => {
        console.log(inputDish, cuisine, diet, type, includeIngredients, excludeIngredients);
        try {
            const response = await fetch("http://localhost:4000/dishs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    dishName: inputDish,
                    cuisine: cuisine,
                    diet: diet,
                    type: type,
                    includeIngredients: includeIngredients,
                    excludeIngredients: excludeIngredients
                }),
            })
            const data = await response.json();
            console.log(data);
            // setDishsList(data);
            setData(data);
            navigate("/recipeList");

        } catch (error) {
            console.log(error);
        }



    }


    const filterToggle = (ev) => {
        setFilter(!filter);
    }


    return (
        <div>



            <div className="flex justify-center flex-col items-center h-5/6 gap-8 z-10 mt-32">
                <div className="flex gap-6 w-screen border border-gray-700 ">
                    <div className="gap-6 w-full ml-8 ">

                        <input
                            type="text"
                            className=" rounded-md h-10 w-10/12 outline-none text-lg px-4  "
                            onChange={(ev) => setInputDish(ev.target.value)}
                            onKeyDown={(ev) => { if (ev.key === "Enter") fetchData() }}
                        />
                    </div>
                    <div className="lg:hidden bg-blue-400 py-1 px-4 rounded-lg cursor-pointer" onClick={fetchData}>Search</div>

                    <div>
                        <div className=" py-1 px-4 rounded-lg cursor-pointer text-lg  " onClick={filterToggle}>Filter</div>
                    </div>
                </div>
                {filter && (
                    <div className="grid grid-cols-3 gap-6">


                        <label className="gap-4" htmlFor="">Cuisine :
                            <input onChange={(ev) => setCuisine(ev.target.value)} type="text" placeholder="italian" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>


                        <label className="gap-4" htmlFor="">Diet :
                            <input onChange={(ev) => setDiet(ev.target.value)} type="text" placeholder="vegetarian" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>
                        <label className="gap-4" htmlFor="">Type :
                            <input onChange={(ev) => setType(ev.target.value)} type="text" placeholder="main course" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>
                        <label onChange={(ev) => setIncludeIngredients(ev.target.value)} className="gap-4" htmlFor="">Include Ingredients  :
                            <input type="text" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>
                        <label onChange={(ev) => setExcludeIngredients(ev.target.value)} className="gap-4" htmlFor="">Exclude Ingredients :
                            <input type="text" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>
                        <div
                            className="hidden lg:block text-center text-lg  px-4 rounded-lg cursor-pointer border border-gray-500 max-w-48"
                            onClick={fetchData}
                        >
                            Search
                        </div>

                    </div>
                )}

            </div>
        </div>
    )

}