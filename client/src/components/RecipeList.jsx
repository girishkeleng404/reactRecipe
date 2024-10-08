import { useContext, useState } from "react"
import { UserContext } from "../UserContex"
import { Link } from "react-router-dom";
import Header from "./Headers/Header";
import Cards from "./Cards";
import Footer from "./Footers/Footer";

export default function RecipeList() {

    const { data, setData } = useContext(UserContext)

    const recipesPerPage = 20;

    console.log(data);






    return (
        <div className="dark:bg-neutral-900">
            <div className="fixed top-0 z-10 flex items-center bg-white/30 w-screen justify-center backdrop-blur-2xl dark:bg-neutral-900 dark:bg-opacity-50">
           
                 <Header />
            
               

            </div>
            <div className="mb-4 pt-28">

                <Cards recipesPerPage={recipesPerPage} data={data} gridClassName="grid-cols-2 lg:grid-cols-5" x={0} y={0}/>
            </div>

            <Footer />

        </div>
    )
}



