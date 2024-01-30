import React from "react";
import Image from "next/image";
import image1 from "../../public/images/image1.webp";
import mandala from "../../public/svg/mandala.svg";

const Photo = () => {
  return (
    <div className="flex relative justify-center items-center">
      <Image
        src={mandala}
        className="max-sm:hidden w-1/3 absolute z-1 -left-[-1%]"
        alt="mandala"
      />
      <Image src={image1} className="w-3/4 z-2" alt="group photo" />
      <Image
        src={mandala}
        className="max-sm:hidden w-1/3 absolute z-1 -right-[-1%]"
        alt="mandala"
      />
    </div>
  );
};

export default Photo;
