import React from "react";
import Image from "next/image";
import mandala from "../../../public/svg/board-mandala.svg";

const Board = ({ position, name, image }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="flex-col justify-center items-center relative">
        <Image
          src={mandala}
          alt="Mandala"
          className="w-full h-full z-1 opacity-20"
        />
        <div className="absolute -left-[-16%] -top-[-13%] justify-center z-2 w-2/3">
          <Image src={image} alt="Board Members" />
        </div>
        <div className="relative flex flex-col items-center justify-center font-serif font-bold text-xl">
          <div className="text-saf-red inset-x-0 z-2 relative -top-[40px] text-2xl font-libre">
            {position}
          </div>
          <div className="relative -top-[25px] text-2xl font-lora">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default Board;
