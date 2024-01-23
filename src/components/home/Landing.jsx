import React from "react";
import Flower from "../../../public/svg/landing.svg";
import Swirl from "../../../public/svg/ripple.svg";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="top-0 w-full h-auto bg-saf-beige-100 flex flex-row">
      <div className=" relative left-[-30.3333%] ">
        <Image src={Flower} alt="saf flower" />
      </div>

      <div className=" mt-[10%] relative right-[-19%] ">
        <Image src={Swirl} alt="saf swirl" />
      </div>

      <div className=" mt-[26%] right-[-20%] w-4 h-60 bg-saf-beige-200"></div>

      <p className="font-size:xl bg-saf">South Asian Federation</p>
    </div>
  );
};

export default Landing;
