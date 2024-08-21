import React, { useEffect, useState } from "react";
import WashMachinePicts from "../assets/many-machine.jpg";

export default function Price() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container h-screen flex" >
        <div
          className="w-[80%] bg-white container flex justify-center content-center m-auto mt-0"
          data-aos="fade-up"
          data-aos-duration="700"
          id="price"
        >
          <div className="container flex-1" >
            <div className="container flex justify-end ">
              <h1 className="bg-[#FFE000] p-1 rounded me-5 text-white inline font-bold right-0">
                Price List
              </h1>
            </div>
            <h1 className="font-bold text-7xl text-right me-5">
              Affordable Care, Premium Clean.
            </h1>
            <div className="container flex flex-row justify-end gap-1">
              <div className="mt-4 bg-white drop-shadow-lg flex-grow h-[215px] hover:outline p-3 me-5 font-bold text-center">
                <span className="rounded">Basic</span>
                <h1 className="text-4xl mt-2">$7</h1>
                <div className="text-left font-normal pt-7 ps-2 flex justify-center">
                  <ul className="ps-1 list-disc list-outside">
                    <li>Max 7Kg</li>
                    <li>Wash & Fold</li>
                    <li>Ironing</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-white drop-shadow-lg flex-grow h-[215px] hover:outline p-3 me-5 font-bold text-center">
                <span className="rounded">Premium</span>
                <h1 className="text-4xl mt-2">$12</h1>
                <div className="text-left font-normal pt-7 ps-2 flex justify-center">
                  <ul className="ps-1 list-disc list-outside">
                    <li>Max 9Kg</li>
                    <li>Dry Cleaning</li>
                    <li>Delicate Fabrics</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-white drop-shadow-lg flex-grow h-[215px] hover:outline p-3 me-5 font-bold text-center">
                <span className="rounded">Express</span>
                <h1 className="text-4xl mt-2">$15</h1>
                <div className="text-left font-normal pt-7 ps-2 flex justify-center">
                  <ul className="ps-1 list-disc list-outside">
                    <li>Max 7Kg</li>
                    <li>Same-Day Service</li>
                    <li>24-Hour Turnaround</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 container h-auto rounded">
            <img
              src={WashMachinePicts}
              alt="wash-machine-pict"
              className="rounded container"
            />
          </div>
        </div>
      </div>
    </>
  );
}
