export default function Summary({ details }) {

    
    return (


        <div className="py-6 px-4">



            <div
                className="summary dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: details.summary }}
            />

            

        </div>

    )
}