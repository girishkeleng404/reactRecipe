import { Link, useLocation } from "react-router-dom";



export default function Header() {

    const location = useLocation()
    console.log(location.pathname)

    return (
        <div className="flex justify-around items-top py-4">

            <div>
                <Link to={`/`} className="text-4xl lg:text-8xl text-gray-700"> Pies </Link>
            </div>
            <div>

                {location.pathname !== '/search' && (<div className="flex items-baseline gap-8 ">

                    <Link to={`/search`}>
                        <div className=" w-48 md:w-96 lg:w-99 border border-gray-600 py-1 px-4 rounded-sm cursor-pointer"> <p>SEARCH</p>  </div>

                    </Link>

                    <div>
                        {/* <p className="text-lg">About</p> */}
                    </div>
                </div>)}




            </div>
        </div>
    )
}