import { Link } from "react-router-dom";

export default function RandomRecipes({ recipes }) {


    return (

        <div className="">
           <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 items-baseline ">

            {recipes.recipes  && recipes.recipes.length>0 && recipes.recipes.map((dish, inx) => (
                     <Link to={`/details/${dish.id}`} key={inx}>


                    <img src={`${dish.image}`} alt="" />
                   <p className="text-lg"> {dish.title} </p> 

                     </Link>
            ))}
           </div>
            

        </div>
    )
}