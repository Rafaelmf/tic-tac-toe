import { createAction } from "@reduxjs/toolkit";

export const clickOnGrid = createAction<{ rowIdx: number; colIdx: number }>(
  "CLICK_ON_GRID"
);

export const resetGame = createAction("RESET_GAME");

export const playAnotherRound = createAction("PLAY_ANOTHER_ROUND");

export const registerPlayers = createAction<{
  nameLeft: string;
  colorLeft: string;
  nameRight: string;
  colorRight: string;
}>("REGISTER_PLAYERS");
