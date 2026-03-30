import Square from "./Square";

function Board({ squares, onClick, winningLine }) {
  return (
    <div className="board">
      {squares.map((value, index) => {
        const isWinner = winningLine?.includes(index);

        return (
          <Square
            key={index}
            value={value}
            onClick={() => onClick(index)}
            isWinner={isWinner}
          />
        );
      })}
    </div>
  );
}

export default Board