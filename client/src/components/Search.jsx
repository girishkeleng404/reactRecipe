import { useEffect, useState } from "react";
import Header from "./Headers/Header";
import SearchSm from "./SearchFol/SearchSm";
import RandomRecipes from "./SearchFol/randomRecipes";
import { Fade, Flip, Hinge, JackInTheBox, Roll, Slide, Zoom } from "react-awesome-reveal";

export default function Search() {

    const [listData, setListData] = useState([]);
    //  https://pies-server-1ljkc6eoa-girish-kelengs-projects.vercel.app  http://localhost:4000/random

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
        <div className="relative h-full  overflow-x-hidden font-Roman dark:bg-neutral-900">
            {/* Use fixed positioning for the header */}
            <div className="fixed top-0 left-0 w-full bg-white z-10 shadow-md bg-opacity-60 backdrop-blur-2xl drop-shadow-xl dark:bg-neutral-900 dark:bg-opacity-50">
                <Header />
                <Fade>
                    <SearchSm />
                </Fade>
            </div>

            {/* Add padding-top to the main content to avoid overlap */}
            <div className="pt-96 mx-3 lg:mx-4 overflow-x-hidden w-auto">
                <RandomRecipes recipes={listData} />
            </div>
        </div>
    )

}