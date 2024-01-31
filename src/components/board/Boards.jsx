import React from "react";
import Image from "next/image";
import { board } from "../../data/Board.js";
import mandala from "../../../public/svg/board-mandala.svg";

// centering issues/

const Boards = () => {
  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-20 relative flex-col items-center">
      {board.map((BOARD, index) => (
        <div key={index} className="bg-saf-beige-100">
          <Image src={mandala} alt="Mandala" className="w-full z-1 relative" />
          <Image
            className="absolute z-2 -left-[-3%] -bottom-[-11%]"
            key={index}
            src={BOARD.image}
            alt={"board member image"}
          />
          <div className="flex relative items-center justify-center font-bold font-serif text-xl z-1 bg-saf-beige-200">
            <div className="text-saf-red">
              {BOARD.name}

              <div className="text-black">{BOARD.position}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Boards;
