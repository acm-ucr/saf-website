import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import PhotoStrip from "@/components/home/PhotoStrip";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title />
      <Description />
      <PhotoStrip />
    </div>
  );
};

export default page;
