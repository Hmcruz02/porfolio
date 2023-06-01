"use client";
import React, {useState} from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center fixed w-full text-fuchsia-300">
            <nav className={`flex items-center w-[90%] h-20 bg-darkGray mt-4 ${isOpen? 'rounded-t-2xl':'rounded-2xl'}`}>
                <div className="flex items-center">
                    <h1 className= 'pl-4 text-5xl'>
                        HM
                    </h1>
                </div>

                <div className='flex items-center justify-center ml-auto'>
                    <div className="cursor-pointer">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-transparent p-2 rounded-md hover:text-gray-900">
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

            {isOpen && (
                    <div className={`flex w-[90%] h-40 rounded-b-2xl bg-neutral-800 duration-500 transition-all ${isOpen? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center justify-center w-full">
                            <ul className="text-center w-full">
                                <li className="p-2">
                                    <a href="#home" onClick={() => setIsOpen(!isOpen)} className="flex justify-center w-full">Home</a>
                                </li>
                                <li className="p-2">
                                    <a href="#about" onClick={() => setIsOpen(!isOpen)} className="flex justify-center w-full">About</a>
                                </li>
                                <li className="p-2">
                                    <a href="#projects" onClick={() => setIsOpen(!isOpen)} className="flex justify-center w-full">Projects</a>
                                </li>
                                <li className="p-2">
                                    <a href="#contact" onClick={() => setIsOpen(!isOpen)} className="flex justify-center w-full">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
      </div>
    );
}