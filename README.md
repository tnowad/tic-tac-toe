# Tic Tac Toe React Project

This is a Tic Tac Toe game implemented in React. The project can be found on [GitHub](https://github.com/tnowad/tic-tac-toe).

## Project Structure

The project consists of the following files:

- `Board.tsx`: This file contains the main logic and rendering for the Tic Tac Toe game board.
- `TicTacToe.ts`: This file contains the Tic Tac Toe game logic, including the `TicTacToeGame` class and the `Player` enum.

## Usage

To use the Tic Tac Toe game, follow these steps:

1. Clone the project repository from GitHub: `git clone https://github.com/tnowad/tic-tac-toe.git`.
2. Navigate to the project directory: `cd tic-tac-toe`.
3. Install the dependencies: `npm install` or `yarn install`.
4. Start the development server: `npm start` or `yarn start`.
5. Open your browser and go to `http://localhost:3000` to play the game.

## Project Details

The main logic for the Tic Tac Toe game is implemented in the `Board.tsx` file. Here is a breakdown of the code:

- The `Board` component is a functional component that represents the Tic Tac Toe game board.
- It uses the `useState` hook to manage the game state. The initial state is set to a new instance of the `TicTacToeGame` class.
- The `handleCellClick` function is called when a cell is clicked. It checks if the game is in progress and makes a move accordingly.
- The `handleResetGame` function resets the game by creating a new instance of the `TicTacToeGame` class.
- The `renderCell` function renders an individual cell of the game grid. It determines if the cell is clickable and displays the cell value accordingly.
- The JSX structure of the `Board` component includes the game title, the game grid, the current player, the game status, and a reset button.

The `TicTacToe.ts` file contains the game logic for the Tic Tac Toe game. It includes the `TicTacToeGame` class and the `Player` enum.

## Conclusion

This Tic Tac Toe project demonstrates the use of React to create an interactive game. The `Board` component handles the game logic and rendering of the game board. Players can click on cells to make moves, and the game state is updated accordingly. The project is a great starting point for learning React and building more complex games or applications.
