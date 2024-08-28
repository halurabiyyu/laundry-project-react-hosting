import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return(
        <>
            <footer>
                <div className="bg-gray-300 mt-3 p-3 flex justify-between items-center">
                    <span className="text-gray-500 text-sm hover:text-gray-700">Copyright @halurabiyyu</span>
                    <div className="flex gap-2 text-gray-500 ">
                        <a href="https://www.instagram.com/haluraby/" target="_blank">
                            <span className="sr-only">Instagram haluraby</span>
                            <FaInstagram className="hover:text-gray-700" />
                        </a>
                        <a href="https://github.com/halurabiyyu" target="_blank">
                            <span className="sr-only">Github halurabiyyu</span>
                            <FaGithub className="hover:text-gray-700" />
                        </a>
                        <a href="https://www.linkedin.com/in/halur-muhammad-abiyyu/" target="_blank">
                            <span className="sr-only">Linkedin Halurabiyyu</span>
                            <FaLinkedin className="hover:text-gray-700" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}