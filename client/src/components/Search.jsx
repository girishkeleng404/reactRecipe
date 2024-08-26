import { useEffect, useState } from "react";
import Header from "./Headers/Header";
import SearchSm from "./SearchFol/SearchSm";
import RandomRecipes from "./SearchFol/randomRecipes";
import { Fade } from "react-awesome-reveal";

export default function Search() {

    const [listData, setListData] = useState([]);
  

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("https://pies-server.vercel.app/random", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const data = await response.json();
                // console.log(data);
                setListData(data);

            }
            catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, [])


    return (
        <div className="relative h-full  overflow-x-hidden font-serif dark:bg-neutral-900">
            {/* Use fixed positioning for the header */}
            <div className="fixed top-0 left-0 w-full bg-white z-10 shadow-md bg-opacity-60 backdrop-blur-2xl drop-shadow-xl dark:bg-neutral-900 dark:bg-opacity-50">
                <Header />
                <Fade>
                    <SearchSm />
                </Fade>
            </div>

           
            <div className="pt-80 mx-3 lg:mx-4 overflow-x-hidden w-auto">
                <RandomRecipes recipes={listData} />
            </div>
        </div>
    )

}