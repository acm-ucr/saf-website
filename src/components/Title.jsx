import React from "react";
import Image from "next/image";
import TitleAsset from "../../public/svg/title.svg";
const Title = ({ text }) => {
  return (
    <div className="flex flex-col w-[140%] md:w-3/4 relative">
      <Image src={TitleAsset} alt="Title Svg" className="w-full" />
      <div className="w-full bottom-6 md:bottom-14 absolute text-center p-2 text-saf-red text-2xl md:text-4xl font-bold font-serif">
        {text}
      </div>
    </div>
  );
};

export default Title;
