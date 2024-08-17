import { useEffect } from "react";
import Header from "./Headers/Header";
import { useParams } from "react-router-dom";

export default function DetailsPage() {

    const {id} = useParams();

    useEffect(()=>{
       

    },[])

    return (
        <div>
            <Header/>
            <h1>Details Page</h1>
            <p>Details about the recipe</p>
        </div>
    )
}