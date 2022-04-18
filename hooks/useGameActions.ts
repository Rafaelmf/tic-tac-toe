import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { playAnotherRound, resetGame } from "../store/actions";
import { Player } from "../store/type";

const useGameActions = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleExit = () => {
    dispatch(resetGame());
    router.push("/");
  };

  const handlePlayAnotherRound = () => {
    dispatch(playAnotherRound());
  };

  return { handleExit, handlePlayAnotherRound };
};

export default useGameActions;
