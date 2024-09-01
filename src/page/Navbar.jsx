import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoWashingMachine from "../assets/washing-machine.png"

export default function Navbar() {
  const navigations = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Price List", href: "#price" },
    { name: "FAQ", href: "#faq" },
  ];

  const [openMobile, setMobileOpen] = useState(false);

  return (
    <>
      <nav className=" bg-white h-16 sticky top-0 font-poppins shadow-sm z-20">
        <ul className="hidden lg:flex h-full justify-center content-center gap-4 text-[#176B87]">
          <a href="/">
            <img src={LogoWashingMachine} className="w-9 content-center mt-4" alt="" />
          </a>
          {navigations.map((item) => (
            <li key={item.name} className="content-center text-lg">
              <a
                href={item.href}
                className="hover:font-bold hover:text-white hover:bg-[#FFE000] p-2 rounded"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex lg:hidden justify-between pt-5 pe-5">
          <a href="/">
            <img src={LogoWashingMachine} className="w-6 mx-2 mb-3 content-center mt-4" alt="" />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Open Main Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      {/* modal main menu mobile  */}
      <Dialog className="lg:hidden" open={openMobile} onClose={setMobileOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Halur Muhammad Abiyyu</span>
              {/* <img className="h-8 w-auto" src={Logo} alt="" /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                {navigations.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-white hover:bg-indigo-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
