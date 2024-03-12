import React from "react";
import Title from "@/components/Title";
import Events from "@/components/events/Events";
import Calendar from "@/components/calendar/Calendar";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title text="Events" />
      <Events />
      <Calendar />
    </div>
  );
};

export default page;
