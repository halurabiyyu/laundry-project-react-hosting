import React, { useEffect, useState } from "react";
import AccordionBox from "../components/AccordionBox";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Faq() {
  const questionsAndAnswers = [
    {
      question: "How long laundry in L!aundry?",
      answer: "for basic and premium, working in 3 days.",
    },
    {
      question: "Do you offer pickup and delivery?",
      answer: "Yes, we offer convenient pickup and delivery services. Just schedule a time, and we’ll handle the rest.",
    },
    {
      question: "How do I schedule a pickup?",
      answer:
        "You can schedule a pickup online, through our app, or by calling us directly. Just choose a time that works for you.",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="faq" data-aos="fade-up" data-aos-duration="700" className="lg:h-fit sm:w-[100%] lg:max-w-3xl lg:w-full flex justify-center m-auto mt-16 lg:mt-0 md:mt-20 2xl:mt-28">
        <div className=" flex justify-center container px-6 lg:px-0 md:px-16 flex-col">
          <h1 className="text-center bg-[#FFE000] text-white font-bold p-1 rounded">
            FAQ
          </h1>
          <div className="my-1">
            <h1 className="font-bold text-3xl lg:text-7xl ">Find Solutions Fast</h1>
          </div>
          <AccordionBox items={questionsAndAnswers}></AccordionBox>
        </div>
      </div>
    </>
  );
}
