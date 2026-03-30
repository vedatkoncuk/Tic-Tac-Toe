import React from "react";

function Square({ value, onClick, isWinner }) {
  return (
    <button
      className={`square ${isWinner ? "winner" : ""}`}
      onClick={onClick}
    >
      {value && (
        <span className={value === "X" ? "x" : "o"}>
          {value}
        </span>
      )}
    </button>
  );
}

export default Square;