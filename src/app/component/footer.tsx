import React from "react";
import Image from "next/image";
import SpinIcon from "./spinIcon.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <footer className="relative p-4 md:p-9  flex items-center justify-between mx-auto  whitespace-nowrap">
          <div>
            <Image src={SpinIcon} alt="icon" className="inline-block w-6" />
            <span>© Oli Harris 2023</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-gray cursor-pointer">Twitter</span>
            <span className="hover:text-gray cursor-pointer">Linkedin</span>
            <span className="hover:text-gray cursor-pointer">Mail</span>
          </div>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
