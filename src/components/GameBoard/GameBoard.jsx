import initialGameBoard from "../../js/GameBoardData";

import { useState } from "react";

const GameBoard = ({ changePlayer, playerActive }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleClickSquare = (rowIndex, colIndex) => {
    !gameBoard[rowIndex][colIndex] ? changePlayer() : "";
    return setGameBoard((prevGame) => {
      const updatedBoard = [...prevGame];
      !updatedBoard[rowIndex][colIndex]
        ? (updatedBoard[rowIndex][colIndex] = playerActive)
        : "";
      return updatedBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClickSquare(rowIndex, colIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
