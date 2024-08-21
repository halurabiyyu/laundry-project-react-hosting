import React, { useState } from "react";

export default function Navbar() {
    const navigations = [
        { name: "Home", href:"#home"},
        { name: "About Us", href:"#about"},
        { name: "Price List", href:"#price"},
    ];

    return (
        <>
            <nav className="bg-white h-16 sticky top-0 font-poppins shadow-sm z-20">
                <ul className="h-full flex justify-center content-center gap-4 text-[#176B87]">
                    {navigations.map((item)=>(
                        <li key={item.name} className="content-center text-lg">
                            <a href={item.href} className="hover:font-bold hover:text-white hover:bg-[#FFE000] p-2 rounded">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}