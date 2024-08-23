import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Cards({recipesPerPage, data, gridClassName,x,y}) {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = data.results.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(data.results.length / recipesPerPage);

    


    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
        window.scrollTo(x, y);
    }


    const handlePreviousPage = async () => {
        if (currentPage > 1) {
            setCurrentPage(
                currentPage - 1
                // (prev)=> prev -1
            )
        }
        window.scrollTo(x, y);
    }



    return(
        <div>

<div>

           

<div className={`grid ${gridClassName} mx-3 gap-5 mt-8 items-baseline font-Roman `}>

    {currentRecipes && currentRecipes.length > 0 ? (
        currentRecipes.map((dish, inx) => (
            <Link to={`/details/${dish.id}`} key={dish.id} className="flex justify-center items-center mb-8 rounded-lg hover:drop-shadow-2xl transition-all duration-300s ">
                <div >


                    <img
                        src={dish.image}
                        alt={dish.title}
                        className="w-full h-60 object-cover rounded-lg "
                    />
                    <h3 className="recipe-title text-lg dark:text-gray-300">{dish.title}</h3>
                </div>

            </Link>
        ))
    ) : (
        <p>No recipes found.</p>
    )}
</div>

<div className="flex justify-center gap-4 mt-4 py-4 font-Roman dark:text-gray-300">
    <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1} >
            
          <ArrowBackIosNewIcon/>
          {/* Prev */}
        </button>
    </div>
   <p> {currentPage} of {totalPages}  </p> 
    <div>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} >
           
            {/* Next */}
            <ArrowForwardIosIcon/>
        </button>
    </div>
</div>
</div>
        </div>
    )
}