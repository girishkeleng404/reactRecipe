import { useEffect, useState } from "react";
import Header from "./Headers/Header";
import SearchSm from "./SearchSm";


export default function Search() {

    const [listData, setListData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/dishs", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const data = await response.json();
                console.log(data);
                setListData(data);
                ;
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, [])


    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <SearchSm />
            </div>
        </div>
    )

}