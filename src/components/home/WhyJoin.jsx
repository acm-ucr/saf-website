import React from "react";
import Image from "next/image";
import Ripple from "../../../public/svg/ripple.svg";

const WhyJoin = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center bg-orange-50 px-14 py-14">
      <div className="relative flex flex-col w-1/2 px-10 py-10 pe-8 bg-saf-beige-200">
        <div className="absolute top-0 left-1/2 w-3/4 h-full z-0">
          <Image
            src={Ripple}
            alt="Ripple"
            layout="fill"
            objectFit="cover"
            className="filter brightness-150"
          />
        </div>
        <div className="z-10 relative">
          <p className="ml-7 text-4xl font-bold font-libre text-white mt-20">
            Why Join SAF
          </p>
          <p className="w-3/4 font-lora text-xl">
            Explore rich South Asian traditions, engage in community service,
            and develop leadership skills at SAF! Join a vibrant community
            celebrating diversity and unity. Join SAF for a unique and enriching
            college experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
