import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { GetUser } from "../Firebase/UserContext";
import {Link} from 'react-router-dom'
import { test } from "../Lib/test";
console.log(test)

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = GetUser();
    return (
        <div>
            <nav className="flex items-center justify-between p-4 lg:px-8 lg:py-4 shadow-sm md:shadow-xl">
                <div>
                    <a href="/" className="text-3xl text-red-500 font-semibold font-mono ">Food Blog</a>
                </div>

                <div className="hidden md:block">
                    {user &&
                        <a href="/admin" className="text-xl mr-2 hover:text-red-500 duration-300">Account</a>
                    }
                    {/* <a href="#!" className="text-lg mr-2 hover:text-red-500 duration-300">About</a>
                    <a href="#!" className="text-lg mr-2 hover:text-red-500 duration-300">Contact </a> */}
                    <Link to='/about' className="text-xl mr-2 hover:text-red-500 duration-300">About</Link>
                    <a href="/signin" className="text-xl p-2 rounded-2xl bg-red-500 hover:bg-red-400 mr-2 text-white duration-300">Sign in</a>
                </div>

                <div className="-mr-2 flex fkex-row md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"

                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {() => (
                    <div className="md:hidden p-4 pt-0 pl-2 lg:px-8 lg:py-4 shadow-xl">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#!" className="text-xl block hover:text-red-500 duration-300">Account</a>
                            <a href="#!" className="text-xl block hover:text-red-500 duration-300">About</a>
                            <a href="#!" className="text-xl block hover:text-red-500 duration-300">Contact </a>
                            <a href="#!" className="text-xl block hover:text-red-500 duration-300">Log in</a>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    )
}
