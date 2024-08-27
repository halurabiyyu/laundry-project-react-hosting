import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function AccordionBox({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white drop-shadow my-2 rounded p-3 flex flex-col justify-center text-center max-w-xl w-full mx-auto">
      {items.map((item, index) => (
        <div className="container border-b-2 border-gray-100">
          <Disclosure
            as="div"
            key={index}
            className="bg-white/5"
            open={openIndex === index}
          >
            <DisclosureButton
              className="py-2 text-lg w-full flex flex-row gap-4 content-center justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="truncate max-w-[80%]">{item.question}</span>
              <div>
                <ChevronDownIcon
                  className={`size-5 fill-slate-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </DisclosureButton>
            <DisclosurePanel className="pb-2 w-full content-center text-left">
              {item.answer}
            </DisclosurePanel>
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
