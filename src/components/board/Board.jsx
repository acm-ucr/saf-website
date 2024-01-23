import React from "react";
import Image from "next/image";
import mandala from "../../../public/svg/mandala.svg";
// how to lighten image of mandala?
// how to import image of Robin?
// font change? also, board.js

const Board = ({ position, name, image }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image src={mandala} alt="Mandala" className="w-full h-full z-1" />
        <div className="absolute inset-0 z-2 flex items-center justify-center">
          {image}
        </div>
        <div className="relative flex flex-col items-center justify-center font-serif font-bold text-xl">
          <div className="text-saf-red inset-x-0 z-2 relative -top-[40px]">
            {position}
          </div>
          <div className="relative -top-[25px]">{name}</div>
        </div>
      </div>
    </div>
  );
};

Board.defaultProps = {
  position: "Coordinator",
  name: "Robin Abeyratne",
  // how to import the image?
};

export default Board;
