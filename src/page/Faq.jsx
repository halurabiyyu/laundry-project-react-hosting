import React, { useEffect, useState } from "react";
import AccordionBox from "../components/AccordionBox";

export default function Faq() {
  const questionsAndAnswers = [
    {
      question: "How long laundry in L!aundry?",
      answer: "for basic and premium, working in 3 days.",
    },
    {
      question: "Do you offer pickup and delivery?",
      answer: "Yes, we offer convenient pickup and delivery services. Just schedule a time, and we’ll handle the rest..",
    },
    {
      question: "How do I schedule a pickup?",
      answer:
        "You can schedule a pickup online, through our app, or by calling us directly. Just choose a time that works for you.",
    },
  ];

  return (
    <>
      <div className="h-[50%] w-full max-w-[100%] container flex justify-center m-auto mb-5">
        <div className="m-auto flex justify-center flex-col">
          <h1 className="text-center bg-[#FFE000] text-white font-bold p-1 rounded">
            FAQ
          </h1>
          <div className="my-1">
            <h1 className="font-bold text-7xl">Find Solutions Fast</h1>
          </div>
          <AccordionBox items={questionsAndAnswers}></AccordionBox>
        </div>
      </div>
    </>
  );
}
