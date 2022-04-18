import { useEffect } from "react";
import { useSelector } from "react-redux";

import useAnimeLetters from "../hooks/useAnimeLetters";
import RegisterPlayers from "../components/registration/RegisterPlayers";
import { RootState } from "../store/type";

export default function App() {
  const { players } = useSelector((state: RootState) => state);
  const { animeStartGame } = useAnimeLetters();

  const playersRegistered = players[0].name && players[1].name;

  useEffect(() => {
    if (playersRegistered) animeStartGame();
  }, [playersRegistered]);

  return (
    <div className="main-page-div">
      {playersRegistered ? (
        <h1 className="ml4">
          <span className="letters letters-1">Ready</span>
          <span className="letters letters-2">Set</span>
          <span className="letters letters-3">Go!</span>
        </h1>
      ) : (
        <RegisterPlayers />
      )}
    </div>
  );
}
