import React from "react";
import Image from "next/image";
import mandala from "@/public/svg/mandala.svg";
import Link from "next/link";

const Circle = ({ text, link, icon }) => {
  return (
    <Link href={link} className="no-underline">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Image src={mandala} alt="Mandala" className="w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center text-saf-red transform text-7xl">
            {icon}
          </div>
        </div>
        <p className="font-libre font-bold text-xl text-saf-red">{text}</p>
      </div>
    </Link>
  );
};

export default Circle;
