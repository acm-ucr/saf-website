import React from "react";
import Image from "next/image";
import image1 from "../../public/images/image1.webp";
import mandala from "../../public/svg/mandala.svg";

const Photo = () => {
  return (
    <div className="flex relative justify-center items-center">
      <Image
        src={mandala}
        className="w-2/5 absolute z-1 -left-[-5%]"
        alt="mandala"
      />
      <Image src={image1} className="w-2/3 z-2" alt="group photo" />
      <Image
        src={mandala}
        className="w-2/5 absolute z-1 -right-[-5%]"
        alt="mandala"
      />
    </div>
  );
};

export default Photo;
