import { useContext, useState } from "react"
import { UserContext } from "../UserContex"
import { Link } from "react-router-dom";
import Header from "./Headers/Header";

export default function RecipeList() {

    const { data, setData } = useContext(UserContext)
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 15;

    console.log(data);

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = data.results.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(data.results.length / recipesPerPage);


    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }


    const handlePreviousPage = async () => {
        if (currentPage > 1) {
            setCurrentPage(
                currentPage - 1
                // (prev)=> prev -1
            )
        }
    }

    return (
        <div>
            <Header />

            <div className="grid grid-cols-5 mx-auto gap-5 my-8">

                {currentRecipes && currentRecipes.length > 0 ? (
                    currentRecipes.map((dish, inx) => (
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

            <div className="flex justify-center gap-4">
                <div>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1} >
                        prev
                    </button>
                </div>
                <div>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} >
                        next
                    </button>
                </div>
            </div>

        </div>
    )
}



