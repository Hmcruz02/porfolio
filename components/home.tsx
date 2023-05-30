"use client";
import React, {useState} from "react";
import Link from "next/link";

export default function Home() {
    return (
        <section id="home" className="">
            <div className="">
                <h1 className="text-4xl font-bold my-2">Howdy!</h1>
                <h1 className="text-4xl font-bold my-2">I'm <span>Herson </span></h1>
                <img src="/headshot.jpg" alt="Picture of Herson" className="rounded-2xl border-2 border-gray-900 my-2"/>
            </div>

        </section>
    );
};