import React, { Children, useState } from "react";

export default function Box({title, children}) {
    return(
        <>
        <div className="w-10/12 h-3/4 p-5 bg-[#2FA1BB] rounded shadow-lg m-auto">
            <h1 className="font-poppins text-lg lg:text-4xl font-extrabold text-white">{title}</h1>
            {children}
        </div>
        </>
    )
}