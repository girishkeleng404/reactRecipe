export default function Highlights({ details }) {
    return (
        <div>
            <div className="grid grid-cols-4  w-full">

                {details.nutrition &&
                    details.nutrition.nutrients
                        .filter(nutrient =>
                            ["Calories", "Protein", "Fat", "Carbohydrates"].includes(nutrient.name)
                        )
                        .map((nutrient, inx) => (
                            <div key={inx} className="m-2  ">


                                {nutrient.name === "Calories" && <p className="grid text-sm">Calories: <div className="gird grid-cols-2  ">  <span className="text-2xl lg:text-3xl text-gray-700">{nutrient.amount}</span> <span className="text-lg">  {nutrient.unit} </span> </div> </p>}



                                {nutrient.name === "Protein" && <p className="grid text-sm">Protein: <div className="gird grid-cols-2  ">  <span className="text-2xl lg:text-3xl text-gray-700">{nutrient.amount}</span> <span className="text-lg">  {nutrient.unit} </span> </div> </p>}

                                {nutrient.name === "Fat" && <p className="grid text-sm">Fat: <div className="gird grid-cols-2  ">  <span className="text-2xl lg:text-3xl text-gray-700">{nutrient.amount}</span> <span className="text-lg">  {nutrient.unit} </span> </div> </p>}



                                {nutrient.name === "Carbohydrates" && <p className="grid text-sm">
                                    Carbs: <div className="gird grid-cols-2  ">   <span className="text-2xl lg:text-3xl text-gray-700">
                                        {nutrient.amount}</span>
                                        <span className="text-lg">{nutrient.unit} </span> </div>
                                </p>
                                }
                            </div>
                        ))
                }

            </div>
        </div>
    )
}