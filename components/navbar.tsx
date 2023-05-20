import React from "react";

export default function Navbar() {
    return (
        <nav className='flex w-full h-20 bg-darkGray sticky top-4 rounded-2xl mx-4'>
            <div className="flex items-center">
                <h1 className= 'pl-4 text-5xl'>
                    HM
                </h1>
            </div>

            <div className='flex items-center justify-center ml-auto'>
                <div className="cursor-pointer">
                    <button type="button" className="bg-transparent p-2 rounded-md hover:text-gray-900">
                        <svg
                            className="m-auto w-14 h-14 transition-colors duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </button>
                </div>
            </div>


      </nav>
    );
}