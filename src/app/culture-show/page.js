import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import PhotoStrip from "@/components/home/PhotoStrip";
import PhotoBar1 from "../../../public/images/ImageBar1.webp";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title />
      <Description />
      <PhotoStrip imageBar={PhotoBar1} />
    </div>
  );
};

export default page;
