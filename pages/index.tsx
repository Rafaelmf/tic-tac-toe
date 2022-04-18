import { useEffect, useState } from "react";

import anime from "animejs";
import { Button, Form, Input } from "antd";
import { CirclePicker } from "react-color";
import { AuditOutlined, RocketOutlined } from "@ant-design/icons";
import { previousDay } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { registerPlayers } from "../store/actions";

import useAnimeLetters from "../hooks/useAnimeLetters";
import RegisterPlayers from "../components/RegisterPlayers";
import { RootState } from "../store/type";

export default function App() {
  const { players } = useSelector((state: RootState) => state);

  const playersRegistered = players[0].name && players[1].name;
  const { animeStartGame } = useAnimeLetters();

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
