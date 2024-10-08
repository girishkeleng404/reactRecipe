export default function Ingredients({ details }) {
    return (
        <div>
            <div className="">
                <h1 className="text-3xl mb-6">Ingredients:</h1>

                {details.nutrition && details.nutrition.ingredients && details.nutrition.ingredients.map((ingredient, inx) => (
                <div key={inx} className="my-3">
                    <p className="capitalize">
                        <span className="font-semibold text-lg dark:text-gray-300">{ingredient.amount} </span> <span className="text-md dark:text-gray-300">{ingredient.unit} {ingredient.name}</span> 
                    </p>
                </div>
            ))}
            </div>
        </div>
    )
}