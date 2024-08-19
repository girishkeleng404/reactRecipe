import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex justify-around items-top py-4">
            <div>
                <Link to={`/`} className="text-8xl"> Pies </Link>
            </div>
            <div>
                <Link to={`/search`}>
                <div   className="w-99 border border-gray-600 py-1 px-4 rounded-sm cursor-pointer">
                    <p>SEARCH</p>
                     

                </div>
                </Link>
                

            </div>
        </div>
    )
}