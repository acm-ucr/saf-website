import React from "react";
import { board } from "../../data/Board.js";
import Board from "./Board.jsx";

const Boards = () => {
  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-20 flex-col items-center">
      {board.map((BOARD, index) => (
        <Board
          position={BOARD.position}
          name={BOARD.name}
          image={BOARD.image}
          key={index}
        />
      ))}
    </div>
  );
};

export default Boards;
