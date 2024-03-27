import React from "react";
import Events from "@/components/events/Events";
import Calendar from "@/components/calendar/Calendar";
import Title from "@/components/Title";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title text={"Events"} />
      <Calendar />
      <Events />
    </div>
  );
};

export default page;
