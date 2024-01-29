import React from "react";
import Image from "next/image";
import whiteLogo from "../../../public/svg/white-logo.svg";
import Link from "next/link";
const SAF = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-5 bg-saf-red gap-3">
      <Image
        src={whiteLogo}
        alt="SAF Logo"
        className="sm:w-1/4 w-1/4 md:w-1/12 lg:w-1/12"
      />
      <p className=" text-white text-center sm:text-xl md:text-2xl lg:text-3xl font-libre font-bold font-serif">
        {" "}
        Who We Are
      </p>
      <p className=" text-white text-center sm:text-sm md:text-base lg:text-xl font-libre font-serif h-1/2 w-5/6">
        {" "}
        SAF, at UC Riverside, is Riverside’s South Asian Club. We aim to serve
        as the umbrella for all organizations that identify as South Asian. We
        are politically oriented with the goal of raising awareness of the
        diaspora experience and various social injustices that have occurred in
        South Asia. We are also socially and culturally oriented, striving to
        have the South Asian student population celebrate culture through
        festivals and inclusive religious events.
      </p>
      <Link
        href="/"
        className="min-w-[10rem] border-1 border-white w-1/6 text-center no-underline text-white px-3 py-3 sm:text-sm md:text-base lg:text-lg font-libre font-bold font-serif"
      >
        Learn More
      </Link>
    </div>
  );
};

export default SAF;
