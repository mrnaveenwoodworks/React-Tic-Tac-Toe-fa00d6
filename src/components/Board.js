import React from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({ squares, winningLine, onSquareClick }) => {
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        isWinner={winningLine && winningLine.includes(i)}
      />
    );
  };

  const renderRow = (start) => {
    return (
      <div className="board-row">
        {[0, 1, 2].map((offset) => renderSquare(start + offset))}
      </div>
    );
  };

  return (
    <div className="board">
      {[0, 3, 6].map((start) => renderRow(start))}
    </div>
  );
};

export default Board;