import { Link, useLocation } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import ThemeToggle from "../ThemeToggle";

export default function Header() {

    const location = useLocation()
    // console.log(location.pathname)

    return (
        <div className="flex justify-around items-center lg:items-top py-3 lg:py-1  font-Roman gap-32 md:gap-72 lg:gap-64">

            <div>
                <Link to={`/`} className="text-6xl lg:text-8xl text-gray-700 md:ml-24 lg:ml-1 dark:text-gray-200"> Pies </Link>
            </div>
            <div>

                {location.pathname !== '/search' && (
                    <div className="flex items-center lg:items-baseline gap-8 ">
                        <Link to={`/search`}>
                            <div className="hidden sm:flex w-48 md:w-96 lg:w-99 border border-gray-600 py-1 px-4 rounded-sm cursor-pointer dark:border-gray-800  dark:text-gray-300">
                                <p>SEARCH</p>
                            </div>
                            <div className="flex sm:hidden text-4xl text-gray-700 dark:text-gray-300">
                                <SearchIcon fontSize=""/>
                            </div>
                        </Link>

                        <div>
                            {/* Optional About Section */}
                            <ThemeToggle/>
                        </div>
                    </div>
                )}




            </div>
        </div>
    )
}