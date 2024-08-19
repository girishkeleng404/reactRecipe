import { useContext } from "react"
import { UserContext } from "../UserContex"
import { Link } from "react-router-dom";
import Header from "./Headers/Header";

export default function RecipeList() {

    const { data, setData } = useContext(UserContext)
    console.log(data);

    return (
        <div>
            <Header/>

            <div className="grid grid-cols-5 mx-auto gap-5 my-8">

                {data.results && data.results.length > 0 ? (
                    data.results.map((dish, inx) => (
                        <Link to={`/details/${dish.id}`} key={dish.id} className="flex justify-center items-center mb-8 rounded-lg drop-shadow-2xl">
                            <div >
                                
                               
                            <img
                                src={dish.image}
                                alt={dish.title}
                                className="w-full h-60 object-cover rounded-lg "
                            />
                              <h3 className="recipe-title text-lg">{dish.title}</h3>
                            </div>
                           
                        </Link>
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    )
}



