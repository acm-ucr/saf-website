import React from "react";
import Flower from "../../../public/svg/landing.svg";

import Image from "next/image";

const Landing = () => {
  return (
    <div className="top-0 w-full h-1/6 bg-saf-beige-100 flex flex-row ">
      <div className=" w-full relative">
        <Image src={Flower} alt="saf flower" />
      </div>

      <div className=" mt-[20%] textBox flex flex-row relative items">
        <div className=" ml-4 relative flex flex-col">
          <p className="relative text-center text-7xl text-saf-red text-nowrap font-bold">
            South Asian Federation
          </p>

          <p className="relative text-3xl text-black text-right">
            culturally, politically, and socially uniting the South Asian
            student population at UC Riverside
          </p>
        </div>

        <div className="right-[-20%] w-4 h-48 bg-saf-beige-200 ml-4"></div>
      </div>
    </div>
  );
};

export default Landing;
