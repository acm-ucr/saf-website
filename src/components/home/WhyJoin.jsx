import React from "react";
import Image from "next/image";
import Ripple from "../../../public/svg/ripple.svg";

const WhyJoin = () => {
  return (
    <div className="w-full flex flex-row item-center justify-center my-14">
      <div className="flex flex-col w-4/5 relative overflow-clip sm:w-2/3 px-4 py-2 sm:px-10 sm:py-10 pe-2 sm:pe-8 bg-saf-beige-200">
        <Image
          src={Ripple}
          className="w-1/2 absolute -right-[10%] -top-[20%] "
          alt={"ripple asset svg"}
        />
        <p className="ml-3 sm:ml-8 text-2xl sm:text-4xl font-bold font-libre text-white mt-20">
          WhyJoinSAF
        </p>
        <p className="sm:w-3/4 font-lora text-xs sm:text-xl z-2">
          Explore rich South Asian traditions, engage in community service, and
          develop leadership skills at SAF! Join a vibrant community celebrating
          diversity and unity. Join SAF for a unique and enriching college
          experience!
        </p>
      </div>
      <div className="hidden sm:block w-1/4">
        <div className="flex flex-col justify-center items-center w-full">
          <ul className="flex flex-col list-disc list-outside">
            <li className="mt-3 font-libre leading-10 text-xl">
              Cultural Appreciation
            </li>
            <li className="font-libre leading-10 text-xl">Inclusivity</li>
            <li className="font-libre leading-10 text-xl">Community</li>
            <li className="font-libre leading-10 text-xl">Diversity</li>
            <li className="font-libre leading-10 text-xl">Leadership</li>
            <li className="font-libre leading-10 text-xl">Innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
