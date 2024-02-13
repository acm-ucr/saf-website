import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Carousel from "@/components/Carousel";
const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-y-6">
      <Title text={"Culture Show"} />
      <Description
        title={"What is Culture Show"}
        text={
          "The culture show is hosted once a year typically in spring. It is a time for many of out talented members to come out and show off their skills whether that be acting, singing, or dancing to respect our culture. It is a creative way for us the spread our culture with all. "
        }
      />
      <Carousel />
      <div />
    </div>
  );
};

export default page;
