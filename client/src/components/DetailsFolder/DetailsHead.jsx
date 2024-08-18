export default function DetailsHead({ details }) {
    return (
        <div>
            <div className="flex justify-between items-baseline">
                <div>
                    <h1 className="text-5xl text-gray-700 mx-4"> {details.title} </h1>

                    <div className="flex mt-2">
                        {details.readyInMinutes && <p className=" text-gray-700 ml-4 mr-2">Ready in: {details.readyInMinutes} minutes</p>}


                        {/* {details.nutrition.ingredients && ( <p className="text-gray-700  "> with just {details.nutrition.ingredients.length} items</p> )}  */}

                        {/* {details.nutrition && details.nutrition.ingredients && details.nutrition.ingredients.map((ingredient, inx) => (
                            <div key={inx} className="my-3">
                                <p className="capitalize">
                                    <span className="font-semibold text-lg">{ingredient.amount} </span> <span className="text-md">{ingredient.unit} {ingredient.name}</span>
                                </p>
                            </div>
                        ))} */}
                    </div>
                </div>




                <div className="grid grid-cols-4 gap-4 mx-4">
                    {details.glutenFree && (<div className=" gap-1 min-w-20 ">
                        <img src="https://spoonacular.com/application/frontend/images/badges/gluten-free.svg" alt="" />
                        <span>G-free</span>
                    </div>)}

                    {details.dairyFree == "true" && (<div>
                        <img src="https://spoonacular.com/application/frontend/images/badges/dairy-free.svg" alt="" />
                        <span>D-free</span>
                    </div>)}

                    {details.vegan && (<div> <img src="https://spoonacular.com/application/frontend/images/badges/vegan.svg" alt="" /> <span>Vegan</span> </div>)}
                    {details.vegetarian ? (<div> <img src=" https://spoonacular.com/application/frontend/images/badges/vegetarian.svg" alt="" /> <span>Vegetarians</span> </div>) : <div>
                        <img src="https://spoonacular.com/application/frontend/images/badges/primal.svg" alt="" />
                        <span>Non-VE</span>
                    </div>}



                    {/* <div>
        <img src="https://spoonacular.com/application/frontend/images/badges/paleo.svg" alt="" /> <span>paleo</span>
    </div> */}


                </div>

            </div>
        </div>
    )
}