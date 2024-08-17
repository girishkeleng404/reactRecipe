import { useContext } from "react"
import { UserContext } from "../UserContex"
import { Link } from "react-router-dom";

export default function RecipeList() {

    const { data, setData } = useContext(UserContext)
    console.log(data);

    return (
        <div>

            <div className="grid grid-cols-5 mx-auto gap-5">

                {data.results && data.results.length > 0 ? (
                    data.results.map((dish, inx) => (
                        <Link to={`/details/${dish.id}`} key={dish.id} className="flex justify-center items-center bg-green-200 p-0">
                            <div >
                                <p>{dish.id}</p>
                                 <h3 className="recipe-title">{dish.title}</h3>
                            <img
                                src={dish.image}
                                alt={dish.title}
                                className=""
                            />
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



