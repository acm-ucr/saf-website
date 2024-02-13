import React from "react";
import { events } from "@/data/WeeklyEvents.js";
const Week = () => {
  return (
    <div className="w-full bg-saf-red text-white flex flex-col justify-center items-center">
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
    </div>
  );
};

/* REMOVE LATER
const Week = () => {
  return (
    <div className="w-full bg-saf-red text-white">
      <div className="text-center text-xl">SAF @ UCR presents</div>
      <div class="font-bold py-5 text-center text-4xl">
        South Asian Awareness Week
      </div>
      <div className="mr-[16%] flex justify-center">
        <div alt="event-numerical-day" className="font-bold text-4xl">
          {events.map((events, index) => (
            <div key={index} className="px-20 py-3">
              <p>{events.day}</p>
            </div>
          ))}
        </div>
        <div alt="event-title">
          {events.map((events, index) => (
            <div key={index} className="py-4">
              <p>{events.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
*/

export default Week;
