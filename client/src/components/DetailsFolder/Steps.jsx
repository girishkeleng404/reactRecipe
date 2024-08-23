export default function Steps({details}){
    return(
        <div>

            <div className="  mt-10 px-10 lg:px-12">
                <h1 className="text-3xl mb-6">Instructions :</h1>

                {details.analyzedInstructions && details.analyzedInstructions[0].steps && details.analyzedInstructions[0].steps.map((step, inx) => (
                <div key={inx} className="py-1">
                    <p className="capitalize dark:text-gray-300">
                        <span className="font-semibold text-lg">{step.number}. </span> <span className="text-md">{step.step}</span> 
                    </p>
                </div>
            ))}
            </div>

        </div>
    )
}