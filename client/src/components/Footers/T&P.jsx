import { Link } from 'react-router-dom';

export default function TnP() {
    return (
        <div className="h-screen items-center justify-center dark:bg-neutral-900">



            <div className=" ">


                <div className="main_wrapper">
                    <div className="main">
                        <div className="antenna">
                            <div className="antenna_shadow"></div>
                            <div className="a1"></div>
                            <div className="a1d"></div>
                            <div className="a2"></div>
                            <div className="a2d"></div>
                            <div className="a_base"></div>
                        </div>
                        <div className="tv">
                            <div className="cruve">
                                <svg
                                    xmlSpace="preserve"
                                    viewBox="0 0 189.929 189.929"
                                    // eslint-disable-next-line react/no-unknown-property
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    className="curve_svg"
                                >
                                    <path
                                        d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="display_div">
                                <div className="screen_out">
                                    <div className="screen_out1">
                                        <div className="screen">
                                            <span className="notfound_text"> NOT FOUND</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lines">
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                            <div className="buttons_div">
                                <div className="b1"><div></div></div>
                                <div className="b2"></div>
                                <div className="speakers">
                                    <div className="g1">
                                        <div className="g11"></div>
                                        <div className="g12"></div>
                                        <div className="g13"></div>
                                    </div>
                                    <div className="g"></div>
                                    <div className="g"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="base1"></div>
                            <div className="base2"></div>
                            <div className="base3"></div>
                        </div>
                    </div>
                    <div className="text_404">
                        <div className="text_4041">4</div>
                        <div className="text_4042">0</div>
                        <div className="text_4043">4</div>
                    </div>
                </div>







                <div className="space-y-2 p-4 w-5/6 lg:w-3/6 mx-auto">



                    <Link to={`/`}
                        role="alert"
                        className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
                    >
                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                        <p className="text-xs font-semibold">Error - page not found</p>
                    </Link>
                </div>



            </div>
        </div>
    )
}