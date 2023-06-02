"use client";
import React, {useState} from "react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="my-6">
            <div className="">
                <h1 className="text-4xl font-bold mb-3">About Me</h1>
                    <div className="flex justify-around my-2 ">
                        <div>
                            <Image src="/flag-sv.svg" alt="El Salvador Flag" width={40} height={40}/>
                        </div>
                        <div>
                            <Image src="/guitar-icon.svg" alt="Guitar" width={40} height={40}/>
                        </div>
                        <div>
                            <Image src="/game-controller.svg" alt="Game Controller" width={40} height={40}/>
                        </div>
                        <div>
                            <Image src="/texas-logo.svg" alt="State of Texas" width={40} height={40}/>
                        </div>
                    </div>

                    <p>
                        Hello there! My name is Herson Mercado Cruz.
                        I am currently a student at the University of Houston, pursuing a Bachelor's of Science in Computer Science.
                    </p>  
                    <p> 
                        I aspire to be a software developer and explore the fascinating areas of data science and artificial intelligence (AI).
                    </p>
                    <p>
                        Thank you for visiting my portfolio website! 
                        Feel free to explore my projects and get a glimpse into my journey as a software developer. 
                        If you have any questions or would like to collaborate, please don't hesitate to reach out.
                    </p>
            </div>

        </section>
    );
};