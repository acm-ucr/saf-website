import React from "react";
import Image from "next/image";

const Title = ({ text }) => {
  // Added text prop
  return (
    <div className="relative w-2/3 overflow-hidden h-64">
      <div className="absolute top-1 left-0 w-full h-full">
        <Image
          src="/svg/Landing.svg"
          alt="Landing"
          layout="fill" // Corrected to 'layout'
          objectFit="cover" // Adjust as needed
          objectPosition="bottom" // Adjust if needed
        />
      </div>
      <div
        className="absolute bottom-0 
      left-0 w-full text-center p-2 
      text-saf-red
      text-4xl
      font-bold
      font-serif"
      >
        {text}
      </div>
    </div>
  );
};

export default Title;
