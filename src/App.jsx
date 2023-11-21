import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/LogComponent/Log.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    console.log(activePlayer);
    return setActivePlayer((oldActivePlayer) =>
      oldActivePlayer === "X" ? "O" : "X"
    );
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <PlayerInfo
              playerName="Laurence"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <PlayerInfo
              playerName="Ana"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            playerActive={activePlayer}
            changePlayer={handleSelectSquare}
          />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
