export type Player = "X" | "O";
export type Board = Player | null;
export type Row = [Board, Board, Board];
export type Grid = [Row, Row, Row];

export type GameStatus = "InProgress" | "Win" | "Draw";

export interface GameState {
  grid: Grid;
  currentPlayer: Player;
  status: GameStatus;
}

export type Coordinate = [number, number];

export interface Move {
  player: Player;
  coordinates: Coordinate;
}

export interface TicTacToe {
  makeMove(move: Move): void;
  resetGame(): void;
  getCurrentState(): GameState;
}

export class TicTacToeGame implements TicTacToe {
  private state: GameState;

  constructor() {
    this.state = {
      grid: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      currentPlayer: "X",
      status: "InProgress",
    };
  }

  makeMove(move: Move): void {
    const { player, coordinates } = move;
    const [x, y] = coordinates;

    console.log(x, y);

    if (this.state.grid[x][y] !== null || this.state.status !== "InProgress") {
      throw new Error("Invalid move!");
    }

    this.state.grid[x][y] = player;

    if (this.checkWin(player, coordinates)) {
      this.state.status = "Win";
    } else if (this.checkDraw()) {
      this.state.status = "Draw";
    } else {
      this.state.currentPlayer = player === "X" ? "O" : "X";
    }
  }

  resetGame(): void {
    this.state = {
      grid: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      currentPlayer: "X",
      status: "InProgress",
    };
  }

  getCurrentState(): GameState {
    return { ...this.state };
  }

  private checkWin(player: Player, [x, y]: Coordinate): boolean {
    const { grid } = this.state;

    // Check row
    if (
      grid[x][0] === player &&
      grid[x][1] === player &&
      grid[x][2] === player
    ) {
      return true;
    }

    // Check column
    if (
      grid[0][y] === player &&
      grid[1][y] === player &&
      grid[2][y] === player
    ) {
      return true;
    }

    // Check diagonals
    if (
      grid[0][0] === player &&
      grid[1][1] === player &&
      grid[2][2] === player
    ) {
      return true;
    }
    if (
      grid[0][2] === player &&
      grid[1][1] === player &&
      grid[2][0] === player
    ) {
      return true;
    }

    return false;
  }

  private checkDraw(): boolean {
    const { grid } = this.state;

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row][col] === null) {
          return false;
        }
      }
    }

    return true;
  }
}
