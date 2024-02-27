import React from "react";
import Flower from "../../../public/svg/landing.svg";
import Flowermobile from "../../../public/svg/landing-mobile.svg";
import Ripplel from "../../../public/svg/ripple-landing.svg";
import Image from "next/image";
const Landing = () => {
  return (
    <div className="w-full min-h-screen flex flex-row items-center relative">
      <Image src={Flower} alt="saf flower" className="hidden xl:block w-1/3 " />
      <Image src={Flowermobile} alt="saf flower" className="w-1/2 xl:hidden" />
      <div className="flex flex-row justify-end md:w-2/3 absolute md:relative">
        <Image
          src={Ripplel}
          alt="ripples image"
          className="hidden md:block w-1/2 md:absolute -translate-y-1/2 z-0 "
        />
        <div className="flex flex-col items-end md:gap-3 w-5/6 z-8">
          <p className="text-right font-libre text-2xl md:text-6xl text-saf-red text-nowrap font-bold mt-2 mb-1">
            South Asian Federation
          </p>

          <p className="text-md leading-tight md:text-3xl text-black text-right xl:w-3/4 font-lora mb-2">
            culturally, politically, and socially uniting the South Asian
            student population at UC Riverside
          </p>
        </div>
        <div className="w-2 md:w-4 bg-saf-beige-200 ml-2 md:ml-4 md:mr-[5%] mr-[3%]" />
      </div>
    </div>
  );
};

export default Landing;
