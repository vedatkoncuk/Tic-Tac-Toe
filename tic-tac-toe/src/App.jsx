import { useState } from 'react'
import Board from "./components/Board";

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = [...squares];
    newSquares[index] = isNext ? "X" : "O";

    setSquares(newSquares);
    setIsNext(!isNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          winner: squares[a],
          line: lines[i]
        };
      }
    }

    return null;
  }

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line;



  return (
    <div>
      <h1>Tic Tac Toe</h1>

      <h2>
        {winner
          ? `🎉 Kazanan: ${winner}`
          : `👉 Sıradaki: ${isNext ? "X" : "O"}`}
      </h2>

      <Board
        squares={squares}
        onClick={handleClick}
        winningLine={winningLine}
      />

      <button
        className="reset-btn"
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsNext(true);
        }}
      >
        🔄 Restart Game
      </button>
    </div>
  )
}

export default App
