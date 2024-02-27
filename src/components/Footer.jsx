import React from "react";
import { links } from "../data/Footer";
import Link from "next/link";
import Image from "next/image";
import redLogo from "../../public/svg/red-logo.svg";

const Footer = () => {
  return (
    <div className="p-3 flex items-center justify-between bg-saf-beige-200">
      <div>
        <Image alt="saf-logo" className="w-16" src={redLogo} />
      </div>

      <div className="flex gap-4 mr-3">
        <div className="hidden md:flex space-x-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="text-saf-red hover:-translate-y-0.5 duration-300 text-4xl"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
