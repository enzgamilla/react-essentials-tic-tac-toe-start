import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/LogComponent/Log.jsx";
import GameOver from "./components/GameOver/GameOver.jsx";

import deriveActivePlayer from "./js/DeriveActivePlayer.js";
import DeriveWinner from "./js/DeriveWinner.js";
import DeriveGameBoard from "./js/DeriveGameBoard.js";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = DeriveGameBoard(gameTurns);
  const winner = DeriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <PlayerInfo
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handlePlayerNameChange}
            />
            <PlayerInfo
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onClick={handleRestart} />
          )}
          <GameBoard changePlayer={handleSelectSquare} board={gameBoard} />
        </div>
        <Log playerTurns={gameTurns} />
      </main>
    </>
  );
}

export default App;
