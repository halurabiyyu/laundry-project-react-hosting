import React, { useState } from "react";
import AwardsPict from "../assets/awards.png";
import ThumbUpPict from "../assets/high-quality.png";
import TimePict from "../assets/time.png";

export default function Feature() {
    const images = [
        {name:"awards", src:AwardsPict, title:"Unmatched Quality", 
            desc:"We ensure the highest standards in every service we provide, using the best materials and techniques to deliver results that exceed expectations."},
        {name:"time", src:TimePict, title:"Efficient Timing", 
            desc:"Our services are designed with your time in mind, guaranteeing swift and reliable turnaround without compromising on quality"},
        {name:"thumbUp", src:ThumbUpPict, title:"Top Customer Satisfaction", 
            desc:"Your satisfaction is our top priority. We go above and beyond to ensure you have a seamless and delightful experience with us."},
    ]

    return(
        <>
            <div className="container absolute w-4/5 2xl:w-2/3 bg-white drop-shadow-lg rounded m-auto left-0 right-0 top-[80%] md:top-[103%] lg:top-[55%] xl:top-[58%] 2xl:top-[75%] z-10 my-2" id="feature">
                <div className="flex flex-col lg:flex-row p-2 gap-1">
                    {images.map((item)=>(
                        <div key={item.name} className="flex-1 lg:flex flex flex-row gap-2">
                                <img src={item.src} alt={item.name} className="w-[30px] lg:w-[70px] h-[30px] lg:h-[70px]"/>
                                <div>
                                    <h3 className="font-bold text-sm lg:text-lg">{item.title}</h3>
                                    <span className="text-gray-400 hidden lg:block">{item.desc}</span>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}