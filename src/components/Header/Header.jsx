import gameLogo from "../../../public/game-logo.png";

const Header = () => {
  return (
    <header>
      <img src={gameLogo} alt="tic-tac-toe logo" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;
