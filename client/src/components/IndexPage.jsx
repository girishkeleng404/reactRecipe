import { useState } from "react";
import Layout from "../Layout";
import Footer from "./Footers/Footer";

export default function IndexPage() {

    const [inputText, setInputText] = useState("");
    const [filter, setFilter] = useState(false);

    const fetchData = async () => {
        console.log(inputText);
    }

   const filterToggle = (ev) => {
        setFilter(!filter);
   }

    return (
        <div className="h-screen">

            <div className="flex justify-center flex-col items-center h-5/6 gap-8">
            <div className="flex gap-6">
            <div className="gap-6">
                    <label className="text-lg">Recipe :  </label>
                    <input
                        type="text"
                        className="border rounded-lg h-8"
                        onChange={(ev) => setInputText(ev.target.value)}
                        onKeyDown={(ev) => { if (ev.key === "Enter") fetchData() }}
                    />
                </div>
                <div className="bg-blue-400 py-1 px-4 rounded-lg cursor-pointer" onClick={fetchData}>Search</div>

                <div>
                    <div className="bg-green-100 py-1 px-4 rounded-lg cursor-pointer" onClick={filterToggle}>Filter</div>
                </div>
            </div>
               {filter && (
                  <div className="flex gap-6">
                     
                        <label className="gap-4" htmlFor="">Cuisine : 
                            <input type="text" className="border rounded-lg h-8 ml-2" />
                        </label>
                        <label className="gap-4" htmlFor="">Include Ingredients  : 
                            <input type="text" className="border rounded-lg h-8 ml-2" />
                        </label>
                        <label className="gap-4" htmlFor="">Exclude Ingredients : 
                            <input type="text" className="border rounded-lg h-8 ml-2" />
                        </label>

                     
             </div>
               ) }
            
            </div>
            {/* <Footer/> */}
        </div>
    )
}