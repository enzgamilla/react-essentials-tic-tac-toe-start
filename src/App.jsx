import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/LogComponent/Log.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((oldActivePlayer) => (oldActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurn) => {
      let currentPlayer = "X";

      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentPlayer = "O";
      }

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
          <GameBoard changePlayer={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log playerTurns={gameTurns} />
      </main>
    </>
  );
}

export default App;
