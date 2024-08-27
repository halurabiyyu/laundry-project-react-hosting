import React, { useState } from "react";
import Box from "../components/Box";
import WashMachinePict from "../assets/wash-machine.jpg";
import Navbar from "./Navbar.jsx";


export default function Home(){
    return(
        <>
        <Navbar></Navbar>
        <div className="container relative lg:h-[75%] bg-[#B4D4FF] font-poppins m-auto" id="home">
            <div className="flex lg:flex-row flex-col-reverse pb-32 lg:pb-28 xl:pb-0">
                <div className="basis-1/2 flex justify-center items-center">
                    <div className="container font-bold text-white drop-shadow-lg px-5 text-5xl lg:text-7xl">
                        <div className="container drop-shadow-lg" id="tagline">
                            <span className="text-lg bg-[#FFE000] inline p-1 rounded">Welcome to L!aundry</span>
                            <h1 className="">Stay fresh,</h1>
                            <h1>Save time!</h1>
                            <h1>Let us handle your laundry</h1>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2 bg-fixed">
                    <img src={WashMachinePict} alt="wash-machine-pict"/>
                </div>
            </div>
        </div>
        </>
    )
}