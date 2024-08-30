import React, { useEffect, useState } from "react";
import AboutPict from "../assets/about-pict.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container h-screen flex justify-center m-auto" id="about">
        <div
          className="container w-[80%] m-auto flex lg:justify-center lg:flex-row flex-col gap-2"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="container h-auto flex-1 rounded">
            <img src={AboutPict} alt="" className="rounded container" />
          </div>
          <div className="h-full flex-1 mt-2 lg:mt-0">
            <span className="font-bold bg-[#FFE000] p-1 rounded text-white drop-shadow lg:ms-5">
              About Us
            </span>
            <h1 className=" lg:ms-5 font-bold text-3xl lg:text-7xl">
              Freshness You Can Trust.
            </h1>
            <p className="lg:ms-5 text-gray-400 mt-2">
              Welcome to L!aundry, we specialize in delivering fast, reliable,
              and high-quality laundry services. Our experienced team is
              dedicated to making your life easier with efficient solutions that
              keep your clothes fresh and clean. Trust us to handle your laundry
              needs with care and precision. Thank you for choosing us as your
              laundry partner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
