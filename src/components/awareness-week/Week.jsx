import React from "react";
import { events } from "@/data/WeeklyEvents.js";

const Week = () => {
  return (
    <div className="w-full bg-saf-red sm:bg-blue-200 text-white">
      <div className="text-center text-xl">SAF @ UCR presents</div>
      <div className="font-bold py-4 sm:py-5 text-center text-4xl">
        South Asian Awareness Week
      </div>
      <div className="mr-[5%] sm:mr-[16%] flex justify-center">
        <div alt="event-numerical-day" className="font-bold text-4xl">
          {events.map((events, index) => (
            <div key={index} className="px-4 sm:px-20 py-3 sm:py-3">
              <p>{events.day}</p>
            </div>
          ))}
        </div>
        <div alt="event-title">
          {events.map((events, index) => (
            <div key={index} className="text-sm sm:text-base py-4 sm:py-4">
              <p>{events.description}</p>
            </div>
          ))}
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
