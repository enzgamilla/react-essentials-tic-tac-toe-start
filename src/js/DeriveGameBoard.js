import INITIAL_GAME_BOARD from "./GameBoardData.js";

const DeriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((arry) => [...arry])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
};
export default DeriveGameBoard;
