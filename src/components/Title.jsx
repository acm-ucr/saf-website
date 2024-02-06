import React from "react";
import Image from "next/image";
import TitleAsset from "../../public/svg/title.svg";
const Title = ({ text }) => {
  return (
    <div className="flex justify-center w-full sm:w-full md:w-1/2 lg:1/2 relative">
      <Image src={TitleAsset} alt="Title Svg" className="w-full" />
      <div className="w-full sm:w-full sm:absoulte bottom-6 absolute bottom-12 text-center p-2 text-saf-red text-4xl font-bold font-serif">
        {text}
      </div>
    </div>
  );
};

export default Title;
