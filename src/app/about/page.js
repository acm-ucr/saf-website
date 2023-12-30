import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Photo from "@/components/Photo";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title />
      <Description />
      <Photo />
      <Description />
    </div>
  );
};

export default page;
