import { createReducer } from "@reduxjs/toolkit";

import {
  clickOnGrid,
  registerPlayers,
  resetGame,
  playAnotherRound,
} from "./actions";
import { Player, RootState } from "./type";

const checkWinner = (gameGrid: string[][], symb: string) => {
  if (
    gameGrid[0][0] == symb &&
    gameGrid[1][0] == symb &&
    gameGrid[2][0] == symb
  )
    return true; //first column
  if (
    gameGrid[0][1] == symb &&
    gameGrid[1][1] == symb &&
    gameGrid[2][1] == symb
  )
    return true; //second column
  if (
    gameGrid[0][2] == symb &&
    gameGrid[1][2] == symb &&
    gameGrid[2][2] == symb
  )
    return true; //third column

  if (
    gameGrid[0][0] == symb &&
    gameGrid[0][1] == symb &&
    gameGrid[0][2] == symb
  )
    return true; // first row
  if (
    gameGrid[1][0] == symb &&
    gameGrid[1][1] == symb &&
    gameGrid[1][2] == symb
  )
    return true; // second row
  if (
    gameGrid[2][0] == symb &&
    gameGrid[2][1] == symb &&
    gameGrid[2][2] == symb
  )
    return true; // thrid row

  if (
    gameGrid[0][0] == symb &&
    gameGrid[1][1] == symb &&
    gameGrid[2][2] == symb
  )
    return true; //descending diagonal
  if (
    gameGrid[2][0] == symb &&
    gameGrid[1][1] == symb &&
    gameGrid[0][2] == symb
  )
    return true; //ascending diagonal

  return false;
};

const checkDraw = (players: Player[]) => {
  if (players[0].currentMove === 4 && players[1].currentMove === 4) return true;
  return false;
};

const INITIAL_STATE: RootState = {
  currPlayerTrun: 0,
  initialPlayerTurn: 0,
  draw: false,
  gameGrid: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  players: [
    {
      name: "",
      color: "",
      winner: false,
      symbol: "x",
      moves: [false, false, false, false, false],
      score: 0,
      currentMove: 0,
    },
    {
      name: "",
      color: "",
      winner: false,
      symbol: "o",
      moves: [false, false, false, false, false],
      score: 0,
      currentMove: 0,
    },
  ],
};

const rootReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(clickOnGrid, (state, action) => {
      const { rowIdx, colIdx } = action.payload;

      const currentPlayer = state.players[state.currPlayerTrun];

      state.gameGrid[rowIdx][colIdx] = currentPlayer.symbol;

      if (checkWinner(state.gameGrid, currentPlayer.symbol)) {
        currentPlayer.winner = true;
        currentPlayer.score++;
        const opositeInitial = Math.abs(state.initialPlayerTurn - 1);
        state.initialPlayerTurn = opositeInitial;
        state.currPlayerTrun = opositeInitial;
        return;
      }

      if (checkDraw(state.players)) {
        state.draw = true;
        return;
      }

      state.currPlayerTrun = Math.abs(state.currPlayerTrun - 1);
      currentPlayer.moves[currentPlayer.currentMove] = true;
      currentPlayer.currentMove++;
    })
    .addCase(registerPlayers, (state, action) => {
      state.players[0].name = action.payload.nameLeft;
      state.players[0].color = action.payload.colorLeft;

      state.players[1].name = action.payload.nameRight;
      state.players[1].color = action.payload.colorRight;

      state.currPlayerTrun = 0;
    })
    .addCase(resetGame, (state, action) => {
      state.players = INITIAL_STATE.players;
      state.gameGrid = INITIAL_STATE.gameGrid;
      state.draw = false;
    })
    .addCase(playAnotherRound, (state, action) => {
      state.players[0].winner = false;
      state.players[0].currentMove = 0;
      state.players[0].moves = [false, false, false, false, false];

      state.players[1].winner = false;
      state.players[1].currentMove = 0;
      state.players[1].moves = [false, false, false, false, false];

      state.draw = false;
      state.gameGrid = INITIAL_STATE.gameGrid;
    })
    .addDefaultCase((state, action) => {});
});

export default rootReducer;
