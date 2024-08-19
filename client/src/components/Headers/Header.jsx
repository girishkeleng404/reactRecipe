import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="flex justify-around items-baseline bg-gray-50 py-4">
            <div>
                <Link to={`/`} className="text-xl"> Recipes </Link> 
            </div>
            <div>
                <p>About</p>
            </div>
        </div>
    )
}