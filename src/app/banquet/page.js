import React from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Image from "next/image";
import banquet from "../../../public/images/banquet.webp";

const page = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <Title text="Banquet" />
      <Description
        title={"What is Banquet?"}
        text={
          "The South Asian Federation organization at the University of California, Riverside organizes a Banquet annually. This event is an opportunity to celebrate the beautiful South Asian culture and to enjoy South Asian food and music along with several different events!"
        }
      />
      <Image src={banquet} className="w-1/2 mb-10" alt="banquet" />
    </div>
  );
};

export default page;
