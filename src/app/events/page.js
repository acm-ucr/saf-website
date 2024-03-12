import React from "react";
import Events from "@/components/events/Events";
import Calendar from "@/components/calendar/Calendar";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Events />
      <Calendar />
    </div>
  );
};

export default page;
