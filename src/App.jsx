import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/LogComponent/Log.jsx";

import deriveActivePlayer from "./js/DeriveActivePlayer.js";
import initialGameBoard, { WINNING_COMBINATION } from "./js/GameBoardData.js";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATION) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);

      const udpatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return udpatedTurn;
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <PlayerInfo
              playerName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <PlayerInfo
              playerName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          {winner && <p>You won, {winner}!</p>}
          <GameBoard changePlayer={handleSelectSquare} board={gameBoard} />
        </div>
        <Log playerTurns={gameTurns} />
      </main>
    </>
  );
}

export default App;
