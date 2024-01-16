import React from "react";
import Image from "next/image";
import mandala from "@/public/svg/mandala.svg";

const Circle = ({ reactIcon, text }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image src={mandala} alt="Mandala" className="w-full h-full" />
        {reactIcon && (
          <div className="absolute inset-0 flex items-center justify-center text-saf-red transform text-6xl">
            {reactIcon}
          </div>
        )}
      </div>
      <div className="font-serif font-bold text-saf-red">{text}</div>
    </div>
  );
};

export default Circle;
