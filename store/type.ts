export type RootState = {
  currPlayerTrun: number;
  initialPlayerTurn: number;
  draw: boolean;
  gameGrid: string[][];
  players: Player[];
};

export type Player = {
  name: string;
  color: string;
  winner: boolean;
  score: number;
  symbol: string;
  moves: boolean[];
  currentMove: number;
};

export type FireWorkPoint = {
  x: number;
  y: number;
  color: string;
  radius: number;
  endPos: {
    x: number;
    y: number;
  };
  draw: () => void;
};
