import React from "react";
import Image from "next/image";
import image1 from "../../public/images/image1.webp";
import mandala from "../../public/svg/mandala.svg";

const Photo = () => {
  return (
    <div className="flex relative justify-center items-center w-1/2">
      <Image src={mandala} className="absolute z-1 -left-[15%]" alt="mandala" />
      <Image src={image1} className="w-full z-2" alt="group photo" />
      <Image
        src={mandala}
        className="absolute z-1 -right-[15%]"
        alt="mandala"
      />
    </div>
  );
};

export default Photo;
