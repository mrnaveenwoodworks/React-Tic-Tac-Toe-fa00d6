import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winningLine, setWinningLine] = useState(null);
  const [gameStatus, setGameStatus] = useState("");

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  useEffect(() => {
    const result = calculateWinner(squares);
    if (result) {
      setWinningLine(result.line);
      setGameStatus(`Winner: ${result.winner}`);
    } else if (squares.every((square) => square !== null)) {
      setGameStatus("Draw!");
    } else {
      setGameStatus(`Next player: ${xIsNext ? "X" : "O"}`);
    }
  }, [squares, xIsNext]);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinningLine(null);
    setGameStatus("Next player: X");
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className={`status-message ${gameStatus.includes("Winner") ? "winner" : ""}`}>
        {gameStatus}
      </div>
      <Board
        squares={squares}
        winningLine={winningLine}
        onSquareClick={handleClick}
      />
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;