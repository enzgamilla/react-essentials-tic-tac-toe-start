import initialGameBoard from "./GameBoardData.js";

const DeriveGameBoard = (gameTurns) => {
  let gameBoard = [...initialGameBoard.map((arry) => [...arry])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
};
export default DeriveGameBoard;
