import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Cards({ recipesPerPage, data, gridClassName, x, y }) {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = data.results.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const totalPages = Math.ceil(data.results.length / recipesPerPage);




    function handleNextPage() {
        if (currentPage < totalPages) {

            // setCurrentPage(currentPage + 1)
            setCurrentPage(prev => {
                const newPage = prev + 1;

                window.scrollTo({
                    top: y,
                    left: x,
                    behavior: 'smooth'
                });
                return newPage;
            });
        }

    }


    const handlePreviousPage = async () => {
        if (currentPage > 1) {
            setCurrentPage(prev => {
                const newPage = prev - 1;

                window.scrollTo({
                    top: y,
                    left: x,
                    behavior: 'smooth'
                });
                return newPage;
            });
        }
    }


    return (
        <div>

            <div>



                <div className={`grid ${gridClassName} mx-3 gap-5 mt-8 items-baseline font-serif `}>

                    {currentRecipes && currentRecipes.length > 0 ? (
                        currentRecipes.map((dish, inx) => (
                            <Link to={`/details/${dish.id}`} key={dish.id} className="flex justify-center items-center mb-8 rounded-lg hover:drop-shadow-2xl transition-all duration-300s ">



                                <div className="relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-72 w-60  rounded-2xl hover:duration-700 ">
                                    <div className="w-60 h-80  text-gray-800">
                                        <div className="flex flex-row justify-between">
                                            <img
                                                src={dish.image}
                                                alt={dish.title}
                                                className="w-full h-60 object-cover rounded-lg absolute "
                                            />
                                            <svg
                                                className="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200  rounded-full m-1 relative"
                                                height="100"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 100 100"
                                                width="100"
                                                x="0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                y="0"
                                            >
                                                <path
                                                    className=""
                                                    d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={8}
                                                ></path>
                                            </svg>
                                            <svg
                                                className="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-lime-200 rounded-full relative"
                                                height="100"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 100 100"
                                                width="100"
                                                x="0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                y="0"
                                            >
                                                <path
                                                    className="svg-stroke-primary"
                                                    d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={8}
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute bg-gray-50 -bottom-24 w-60 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                                        {/* <span className="text-lime-400 font-bold text-xs">Pies.com</span> */}
                                        <span className="text-gray-800 font-bold text-2xl"> {dish.title}</span>
                                        <p className="text-neutral-800">
                                        {/* {dish.title} */}
                                        </p>
                                    </div>
                                </div>
















                                {/* 
                <div className="">


                    <img
                        src={dish.image}
                        alt={dish.title}
                        className="w-full h-60 object-cover rounded-lg "
                    />
                    <h3 className="recipe-title text-base lg:text-lg dark:text-gray-300 pt-1">{dish.title}</h3>
                </div> */}



                            </Link>
                        ))
                    ) : (
                        <p>No recipes found.</p>
                    )}
                </div>

                <div className="flex justify-center gap-4 mt-4 py-4 font-serif dark:text-gray-300">
                    <div>
                        <button onClick={handlePreviousPage} disabled={currentPage === 1} >

                            <ArrowBackIosNewIcon />
                            {/* Prev */}
                        </button>
                    </div>
                    <p> {currentPage} of {totalPages}  </p>
                    <div>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} >

                            {/* Next */}
                            <ArrowForwardIosIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}