import { useEffect, useState } from "react";
import Header from "./Headers/Header";
import SearchSm from "./SearchFol/SearchSm";
import RandomRecipes from "./SearchFol/randomRecipes";


export default function Search() {

    const [listData, setListData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/random", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const data = await response.json();
                console.log(data);
                setListData(data);
                
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, [])


    return (
        <div className="relative h-full w-screen">
        {/* Use fixed positioning for the header */}
        <div className="fixed top-0 left-0 w-full bg-white z-10 shadow-md">
            <Header />
            <SearchSm />
        </div>

        {/* Add padding-top to the main content to avoid overlap */}
        <div className="pt-96 mx-2">
            <RandomRecipes recipes={listData} />
        </div>
    </div>
    )

}