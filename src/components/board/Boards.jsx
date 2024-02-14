import React from "react";
import { board } from "../../data/Board.js";
import Board from "./Board.jsx";
import Row from "react-bootstrap/Row";

const Boards = () => {
  return (
    <div className="flex flex-col items-center justify-center -mt-10 mb-5">
      <Row className=" items-center justify-center w-5/6">
        {board.map((BOARD, index) => (
          <Board
            position={BOARD.position}
            name={BOARD.name}
            image={BOARD.image}
            key={index}
          />
        ))}
      </Row>
    </div>
  );
};

export default Boards;
