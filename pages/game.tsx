import GameGrid from "../components/GameGrid";
import PlayerCard from "../components/PlayerCard";
import Header from "../components/Header";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "antd";
import useGameActions from "../hooks/useGameActions";
import useAnimeFireworks from "../hooks/useAnimeFireworks";
import useAnimeLetters from "../hooks/useAnimeLetters";

export default function App() {
  const { currPlayerTrun, players, draw } = useSelector(
    (state: RootState) => state
  );
  const router = useRouter();
  const { autoClick } = useAnimeFireworks();
  const { animePlayerTurnn } = useAnimeLetters();
  const { handleExit, handlePlayAnotherRound } = useGameActions();

  useEffect(() => {
    if (!players[0].name || !players[1].name) router.push("/");
  }, [players]);

  const endGame = players.find((p) => p.winner);

  useEffect(() => {
    if (!document && !endGame) return;
    autoClick();
  }, [endGame]);

  useEffect(() => {
    animePlayerTurnn();
  }, [currPlayerTrun, draw, endGame]);

  const playAgain = () => (
    <>
      <Button size="large" type="primary" onClick={handlePlayAnotherRound}>
        Play Again
      </Button>
      <Button size="large" onClick={handleExit} danger>
        Exit
      </Button>
    </>
  );

  return (
    <>
      {endGame && (
        <>
          <canvas className="fireworks"></canvas>
          <div className="winner-div">
            <h1 className="winner-h1">Player {endGame.name} Wins!</h1>
            {playAgain()}
          </div>
        </>
      )}
      {draw && (
        <div className="winner-div">
          <h1 className="winner-h1">Draw!</h1>
          {playAgain()}
        </div>
      )}
      {!draw && !endGame && (
        <>
          <div className="game-page-div">
            <Header />
            <PlayerCard player={players[0]} />
            <GameGrid />
            <PlayerCard player={players[1]} />
          </div>
          <span id="your-turn" className="your-turn">
            Your Turn
          </span>
        </>
      )}
    </>
  );
}
