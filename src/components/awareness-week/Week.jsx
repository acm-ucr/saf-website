import React from "react";
import { events } from "@/data/WeeklyEvents.js";

const Week = () => {
  return (
    <div className="bg-saf-red text-white">
      <div className="text-center text-xl">SAF @ UCR presents</div>
      <div class="font-bold py-5 text-center text-4xl">
        South Asian Awareness Week
      </div>
      <div className="pr-[240px] flex">
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

export default Week;
