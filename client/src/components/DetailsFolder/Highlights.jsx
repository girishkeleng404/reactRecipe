export default function Highlights({details}){
    return(
        <div>
   <div className="grid grid-cols-4  w-full">

{details.nutrition &&
    details.nutrition.nutrients
        .filter(nutrient =>
            ["Calories", "Protein", "Fat", "Carbohydrates"].includes(nutrient.name)
        )
        .map((nutrient, inx) => (
            <div key={inx} className="m-2  ">
                {nutrient.name === "Calories" && <p className="grid text-sm">Calories: <span className="text-3xl text-gray-700">{nutrient.amount}{nutrient.unit} </span></p>}
                {nutrient.name === "Protein" && <p className="grid text-sm">Protein: <span className="text-3xl text-gray-700">{nutrient.amount}{nutrient.unit} </span></p>}
                {nutrient.name === "Fat" && <p className="grid text-sm">Fat: <span className="text-3xl text-gray-700">{nutrient.amount}{nutrient.unit} </span></p>}
                {nutrient.name === "Carbohydrates" && <p className="grid text-sm">Carbs: <span className="text-3xl text-gray-700">{nutrient.amount}{nutrient.unit} </span></p>}
            </div>
        ))
}

</div>
        </div>
    )
}