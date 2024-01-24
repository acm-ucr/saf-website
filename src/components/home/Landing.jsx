import React from "react";
import Flower from "../../../public/svg/landing.svg";

import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-full min-h-screen flex flex-row items-center">
      <Image src={Flower} alt="saf flower" className="w-1/3" />
      <div className="flex flex-row w-2/3">
        <div className="flex flex-col items-end">
          <p className="text-right text-6xl text-saf-red  text-nowrap font-bold">
            South Asian Federation
          </p>

          <p className="text-3xl text-black text-right w-3/4">
            culturally, politically, and socially uniting the South Asian
            student population at UC Riverside
          </p>
        </div>
        <div className="w-4 bg-saf-beige-200 ml-4 mr-[5%]" />
      </div>
    </div>
  );
};

export default Landing;
