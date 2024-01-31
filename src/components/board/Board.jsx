import React from "react";
import Image from "next/image";
import mandala from "../../../public/svg/board-mandala.svg";
import defaultImg from "../../../public/images/placeholder_board.webp";

const Board = ({ position, name, image }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="flex-col justify-center items-center relative">
        <Image src={mandala} alt="Mandala" className="w-full h-full z-1" />
        <div className="absolute -left-[-16%] -top-[-13%] justify-center z-2 w-2/3">
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
  image: <Image src={defaultImg} alt="defaultImg" />,
};

export default Board;
