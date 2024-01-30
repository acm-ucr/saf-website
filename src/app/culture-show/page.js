import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import PhotoStrip from "@/components/home/PhotoStrip";
import PhotoBar1 from "../../../public/images/ImageBar1.webp";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
     <Title />
      <Description
        title={"What is Culture Show"}
        text={
          "The culture show is hosted once a year typically in spring. It is a time for many of out talented members to come out and show off their skills whether that be acting, singing, or dancing to respect our culture. It is a creative way for us the spread our culture with all. "
        }
      />
      <PhotoStrip imageBar={PhotoBar1} />
    </div>
  );
};

export default page;
