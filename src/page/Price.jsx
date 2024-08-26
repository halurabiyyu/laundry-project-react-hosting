import React, { useEffect, useState } from "react";
import WashMachinePicts from "../assets/many-machine.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Price() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data_text/priceList.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching the JSON: ", error));
  }, []);

  return (
    <>
      <div className="container h-screen flex justify-center m-auto">
        <div
          className="w-[80%] bg-white container flex flex-col-reverse gap-1 lg:flex-row justify-center content-center m-auto mt-0"
          data-aos="fade-up"
          data-aos-duration="700"
          id="price"
        >
          <div className="container flex-1">
            <div className="container flex lg:justify-end ">
              <h1 className="bg-[#FFE000] p-1 rounded me-5 text-white inline font-bold lg:right-0">
                Price List
              </h1>
            </div>
            <h1 className="font-bold lg:text-7xl text-3xl lg:text-right me-5">
              Affordable Care, Premium Clean.
            </h1>
            <div className="container flex flex-col lg:flex-row justify-end gap-1">
              {data && data.price_list ? (
                data.price_list.map((priceItem) => (
                  <div
                    key={priceItem.name_price_list}
                    className="mt-4 bg-white drop-shadow-lg flex-grow h-[215px] hover:outline p-3 me-5 font-bold text-center"
                  >
                    <span className="rounded">{priceItem.name_price_list}</span>
                    <h1 className="text-4xl mt-2">${priceItem.price}</h1>
                    <div className="text-left font-normal pt-7 ps-2 flex justify-center">
                      <ul className="ps-1 list-disc list-outside">
                        {priceItem.benefit.map((benefitItem) => (
                          <li key={benefitItem.id}>{benefitItem.value}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading...</p> // Or any other loading indicator
              )}
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
