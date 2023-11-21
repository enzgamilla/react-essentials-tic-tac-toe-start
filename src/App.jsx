import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/LogComponent/Log.jsx";

import deriveActivePlayer from "./js/DeriveActivePlayer.js";

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      const udpatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
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
          <GameBoard changePlayer={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log playerTurns={gameTurns} />
      </main>
    </>
  );
}

export default App;
