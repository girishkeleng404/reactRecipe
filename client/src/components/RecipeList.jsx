import { useContext, useState } from "react"
import { UserContext } from "../UserContex"
import { Link } from "react-router-dom";
import Header from "./Headers/Header";
import Cards from "./Cards";

export default function RecipeList() {

    const { data, setData } = useContext(UserContext)

    const recipesPerPage = 20;

    console.log(data);






    return (
        <div>
            <Header />

            <Cards recipesPerPage={recipesPerPage} data={data} gridClassName="grid-cols-2 lg:grid-cols-5" />

        </div>
    )
}



