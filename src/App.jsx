import Header from "./components/Header/Header.jsx";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <PlayerInfo playerName="Laurence" symbol="X" />
            <PlayerInfo playerName="Ana" symbol="O" />
          </ol>
          <GameBoard />
        </div>
      </main>
    </>
  );
}

export default App;
