import React from "react";
import "./Squaress.css";

const Square = ({ value, onClick, isWinner }) => {
  const getPlayerClass = () => {
    if (!value) return "";
    return value.toLowerCase();
  };

  return (
    <button
      className={`square ${getPlayerClass()} ${isWinner ? "winner" : ""}`}
      onClick={onClick}
      disabled={value || isWinner}
      aria-label={value ? `Square marked ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
};

export default Square;