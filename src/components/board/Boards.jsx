import { board } from "../../data/Board.js";
import Board from "./Board.jsx";

const Boards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10  pb-10">
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
