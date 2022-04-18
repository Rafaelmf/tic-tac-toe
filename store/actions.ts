import {
    createAction,
    createReducer,
    AnyAction,
    PayloadAction,
  } from '@reduxjs/toolkit'

export const changePlayerScore = createAction<{value: number, player: 'leftPlayer' | 'rightPlayer'}>('CHANGE_PLAYER_SCORE')

export const clickOnGrid = createAction<{rowIdx:number, colIdx: number}>('CLICK_ON_GRID')

export const resetGame = createAction('RESET_GAME')

export const gameDraw = createAction('GAME_DRAW')

export const playerWins = createAction('PLAYER_WINS')

export const playAnotherRound = createAction('PLAY_ANOTHER_ROUND')

export const registerPlayers = createAction<{
  nameLeft: string;
  colorLeft: string;
  nameRight: string;
  colorRight: string;
}>('REGISTER_PLAYERS')