import React from "react";
import { events } from "@/data/WeeklyEvents.js";
import Image from "next/image";
import Ripple from "../../../public/svg/ripple.svg";
import WhiteMandala from "../../../public/svg/white-mandala.svg";

const Week = () => {
  return (
    <div className="w-full bg-saf-red text-white flex flex-col relative overflow-clip justify-center items-center">
      <Image
        src={Ripple}
        className="w-1/2 absolute -left-[1%] -top-0 sm:w-1/4 md:w-1/3 lg:w-1/5 md:-left-[1%] lg:-left-[1%]"
        alt={"ripple asset svg"}
      />

      <Image
        src={Ripple}
        className="w-1/2 absolute rotate-90 -right-[8%] bottom-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4 md:-right-[1%] lg:-right-[1%]"
        alt={"ripple asset svg"}
      />

      <div className="w-[90%] py-10">
        <p className="text-center text-xl">SAF @ UCR presents</p>
        <p className="font-bold py-4 sm:py-5 text-center text-2xl md:text-4xl">
          South Asian Awareness Week
        </p>
        <div className="mr-[5%] flex flex-row justify-center items-center gap-[12%]">
          <div alt="event-numerical-day" className="flex flex-col">
            {events.map((events, index) => (
              <p key={index} className="font-bold text-4xl py-3">
                {events.day}
              </p>
            ))}
          </div>
          <div alt="event-title" className="flex flex-col">
            {events.map((events, index) => (
              <p key={index} className="text-sm sm:text-base py-4">
                {events.description}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={WhiteMandala}
        className="w-full absolute bottom-0 lg:w-1/2 lg:translate-y-1"
        alt={"white-mandala asset svg"}
      />
    </div>
  );
};

export default Week;
