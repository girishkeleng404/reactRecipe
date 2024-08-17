import { useState } from "react";
import Layout from "../Layout";
import Footer from "./Footers/Footer";

export default function IndexPage() {

    const [inputDish, setInputDish] = useState("");
    const [cuisine, setCuisine] = useState("");

    const [diet, setDiet] = useState("");
    const [type, setType] = useState("");
    const [includeIngredients, setIncludeIngredients] = useState("");
    const [excludeIngredients, setExcludeIngredients] = useState("");
    const [filter, setFilter] = useState(false);

    const fetchData = async () => {
        console.log(inputDish, cuisine, diet, type, includeIngredients, excludeIngredients);

        await fetch("http://localhost:4000/dishs", {
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
    }

    const filterToggle = (ev) => {
        setFilter(!filter);
    }

    return (
        <div className="h-screen">

            <div className="flex justify-center flex-col items-center h-5/6 gap-8">
                <div className="flex gap-6  ">
                    <div className="gap-6">
                        <label className="text-lg">Dish :  </label>
                        <input
                            type="text"
                            className="border rounded-lg h-8 ml-2"
                            onChange={(ev) => setInputDish(ev.target.value)}
                            onKeyDown={(ev) => { if (ev.key === "Enter") fetchData() }}
                        />
                    </div>
                    <div className="bg-blue-400 py-1 px-4 rounded-lg cursor-pointer" onClick={fetchData}>Search</div>

                    <div>
                        <div className="bg-green-100 py-1 px-4 rounded-lg cursor-pointer   " onClick={filterToggle}>Filter</div>
                    </div>
                </div>
                {filter && (
                    <div className="grid grid-cols-3 gap-6">


                        <label className="gap-4" htmlFor="">Cuisine :
                            <input onChange={(ev)=>setCuisine(ev.target.value)} type="text" placeholder="italian" className="border rounded-lg h-8 ml-2" />
                        </label>


                        <label className="gap-4" htmlFor="">Diet :
                            <input onChange={(ev)=>setDiet(ev.target.value)} type="text" placeholder="vegetarian" className="border rounded-lg h-8 ml-2" />
                        </label>
                        <label className="gap-4" htmlFor="">Type :
                            <input onChange={(ev)=>setType(ev.target.value)} type="text" placeholder="main course" className="border rounded-lg h-8 ml-2" />
                        </label>
                        <label onChange={(ev)=>setIncludeIngredients(ev.target.value)} className="gap-4" htmlFor="">Include Ingredients  :
                            <input type="text" className="border rounded-lg h-8 ml-2" />
                        </label>
                        <label onChange={(ev)=>setExcludeIngredients(ev.target.value)} className="gap-4" htmlFor="">Exclude Ingredients :
                            <input type="text" className="border rounded-lg h-8 ml-2" />
                        </label>

                    </div>
                )}

            </div>
            {/* <Footer/> */}
        </div>
    )
}