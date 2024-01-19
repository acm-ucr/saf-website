import React from "react";
import Image from "next/image";
import TitleAsset from "../../public/svg/title.svg";
const Title = ({ text }) => {
  return (
    <div className="w-2/3 relative">
      <Image src={TitleAsset} alt="Title Svg" className="w-full " />
      <div className="w-full absolute bottom-12 text-center p-2 text-saf-red text-4xl font-bold font-serif">
        {text}
      </div>
    </div>
  );
};

export default Title;
