import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900/95 backdrop-blur-lg text-gray-400 py-2 w-screen font-serif ">
            <div className="container mx-auto grid grid-cols-3 gap-8 text-sm text-start pl-8 lg:pl-36 px-2">
                <div className=''>
                    <Link to={`/`} className="font-bold text-white mb-4">pies.com</Link>
                    <ul className='mt-4'>
                        <li><Link to={`/news`} className="hover:underline">News</Link></li>
                        <li><a href="https://github.com/girishkeleng404/reactRecipe" className="hover:underline">GitHub</a></li>
                        {/* <li><a href="#" className="hover:underline">Discord</a></li> */}
                         
                        <li><a href="https://spoonacular.com/food-api/docs" target='new' className="hover:underline">API Docs</a></li>
                    </ul>
                </div>

                {/* <div>
                    <h4 className="font-bold text-white mb-4">Apps</h4>
                    <ul>
                        <li><a href="#" className="hover:underline">Telegram Bot</a></li>
                        <li><a href="#" className="hover:underline">Chrome Extension</a></li>
                        <li><a href="#" className="hover:underline">Firefox Add-on</a></li>
                        <li><a href="#" className="hover:underline">Edge Add-on</a></li>
                        <li><a href="#" className="hover:underline">Opera Add-on</a></li>
                    </ul>
                </div> */}

                <div>
                    <h4 className="font-bold text-white mb-4">Donate</h4>
                    <ul>
                        <li><a href="https://rzp.io/l/GQPBIi3v" target='new' className="hover:underline">Razorpay</a></li>
                        {/* <li><a href="#" className="hover:underline">Patreon</a></li> */}
                        <li><a href="https://github.com/girishkeleng404" target='new' className="hover:underline">GitHub Sponsors</a></li>

                        <li><a href="https://rzp.io/l/GQPBIi3v" target='new' className="hover:underline">Account</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">Help</h4>
                    <ul>
                        <li><Link to={`/faq`} className="hover:underline">FAQ</Link></li>
                        <li><Link to={`/about`} className="hover:underline">About</Link></li>
                        <li><Link to={`/t&p`} className="hover:underline">Terms & Privacy</Link></li>
                        <li><Link to={`/contact`} className="hover:underline">Contact</Link></li>
                        {/* <li><a href="#" className="hover:underline">System Status</a></li> */}
                    </ul>
                </div>
            </div>

            <div className="border-t mt-2 pt-2 border-gray-600">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
                    <div className="text-sm py-2 text-gray-500">&copy; {new Date().getFullYear()} Pies, Inc. · Privacy · Terms · Sitemap </div>



                    <div className="col-span-1 md:col-span-4 my-2 ">
                        <p className="text-gray-500 text-sm">
                            Data provided by <a href="https://spoonacular.com/food-api" target='new' className="underline hover:text-white">spoonacular.com </a>
                        </p>


                    </div>
                </div>
            </div>
        </footer>
    )
}