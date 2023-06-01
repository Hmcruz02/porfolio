"use client";
import React, {useState} from "react";
import Link from "next/link";

export default function Home() {
    return (
        <section className="text-fuchsia-300">
            <div className="">
                <h1 className="text-4xl font-bold my-2 ">Howdy!</h1>
                <h1 className="text-4xl font-bold my-2">I'm <span>Herson </span></h1>
                <img src="/headshot.jpg" alt="Picture of Herson" className="rounded-2xl border-2 border-gray-900 my-2"/>
                
                <div className="flex justify-around my-2 ">
                    <Link target="_blank" href="https://github.com/Hmcruz02">
                        <div>
                            <img src="/logo-github.svg" alt="Github Logo" className="w-10 h-10"/>
                        </div>
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/hamercadocruz/">
                        <div>
                            <img src="/logo-linkedin.svg" alt="LinkedIn Logo" className="w-10 h-10"/>
                        </div>
                    </Link>
                    <Link target="_blank" href="/CS_Spring_Resume_2023.pdf">
                        <div>
                            <img src="/newspaper-outline-dark.svg" alt="Resume" className="w-10 h-10"/>
                        </div>
                    </Link>
                </div>

            </div>

        </section>
    );
};