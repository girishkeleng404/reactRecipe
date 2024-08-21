
import { useContext, useState } from "react";
import { UserContext } from "../../UserContex";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


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
    

    const fetchData = async () => {
        // console.log(inputDish, cuisine, diet, type, includeIngredients, excludeIngredients);
        try {
            const response = await fetch("https://pies-server.vercel.app/dishs", {
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
        <div className="w-screen overflow-hidden">



            <div className="flex justify-center flex-col items-center h-5/6 gap-8 z-10 mt-32">
                <div className="flex s w-screen border border-gray-500 ">
                    <div className="gap-8 w-full ml-8 py-1">

                        <input
                            type="text"
                            className="py-2 rounded-md h-10 w-10/12 outline-none text-lg px-4 bg-transparent "
                            placeholder="Search for a dish"
                            onChange={(ev) => setInputDish(ev.target.value)}
                            onKeyDown={(ev) => { if (ev.key === "Enter") fetchData() }}
                        />
                    </div>
                    <div className="lg:hidden text-lg py-2 px-4 rounded-lg cursor-pointer" onClick={fetchData}>Search</div>

                    <div>
                        <div className=" py-2 px-2 lg:px-8 rounded-lg cursor-pointer text-lg  " onClick={filterToggle}>Filter</div>
                    </div>
                </div>
                {filter && (
                    <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mx-2">


                        <label className="gap-4 flex justify-between items-baseline" htmlFor="">Cuisine :
                            <input onChange={(ev) => setCuisine(ev.target.value)} type="text" placeholder="italian" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>


                        <label className="gap-4 flex justify-between items-baseline" htmlFor="">Diet :
                            <input onChange={(ev) => setDiet(ev.target.value)} type="text" placeholder="vegetarian" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>
                        <label className="gap-4 flex justify-between items-baseline" htmlFor="">Type :
                            <input onChange={(ev) => setType(ev.target.value)} type="text" placeholder="main course" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>
                        <label onChange={(ev) => setIncludeIngredients(ev.target.value)} className="gap-4 flex justify-between items-baseline" htmlFor="">Include Ingredients  :
                            <input type="text" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>
                        <label onChange={(ev) => setExcludeIngredients(ev.target.value)} className="gap-4 flex justify-between items-baseline" htmlFor="">Exclude Ingredients :
                            <input type="text" className="border border-gray-400 outline-none px-1 rounded-md h-8 ml-2 " />
                        </label>
                        <div className="flex justify-end items-center">
                            <div
                            className="hidden lg:block md:block text-center text-lg py-0.5 px-4 rounded-lg cursor-pointer border border-gray-500 w-48 bg-black/80 text-white "
                            onClick={fetchData}
                        >
                            Search
                        </div>
                        </div>
                        

                    </div>
                )}

            </div>
        </div>
    )

}