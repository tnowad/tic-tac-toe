import React, { useState } from "react";
import { TicTacToeGame, Player } from "./../lib/TicTacToe";

const Board: React.FC = () => {
  const [game, setGame] = useState<TicTacToeGame>(() => new TicTacToeGame());

  const handleCellClick = (rowIndex: number, columnIndex: number) => {
    if (game.getCurrentState().status === "InProgress") {
      try {
        const newGameState = new TicTacToeGame(game);
        newGameState.makeMove({
          player: game.getCurrentState().currentPlayer,
          coordinates: [rowIndex, columnIndex],
        });
        setGame(newGameState);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleResetGame = () => {
    const newGame = new TicTacToeGame();
    setGame(newGame);
  };

  const renderCell = (rowIndex: number, columnIndex: number) => {
    const cellValue: Player | null =
      game.getCurrentState().grid[rowIndex][columnIndex];
    const isClickable: boolean =
      cellValue === null && game.getCurrentState().status === "InProgress";

    return (
      <div
        className={`border-2 text-black border-gray-400 h-16 w-16 flex justify-center items-center text-4xl cursor-${
          isClickable ? "pointer" : "default"
        }`}
        onClick={() => handleCellClick(rowIndex, columnIndex)}
      >
        {cellValue}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="mb-5 text-2xl font-bold">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-4">
        {game.getCurrentState().grid.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((_, columnIndex) => (
              <React.Fragment key={columnIndex}>
                {renderCell(rowIndex, columnIndex)}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-5">
        Current Player: {game.getCurrentState().currentPlayer}
      </p>
      <p className="mt-2">Status: {game.getCurrentState().status}</p>
      <button
        className="px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={handleResetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default Board;
