import { board } from "../../data/Board.js";
import Board from "./Board.jsx";

const Boards = () => {
  return (
    <div className="grid md:grid-cols-3 md:gap-10 gap-3 grid-cols-2 pb-10">
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
