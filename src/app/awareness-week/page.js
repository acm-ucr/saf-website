import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Week from "@/components/awareness-week/Week";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title />
      <Description />
      <Week />
    </div>
  );
};

export default page;
