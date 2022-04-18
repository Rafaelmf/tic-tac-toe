import { Button } from "antd";
import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../store/actions";
import TitleSvg from "./TitleSvg";
import anime from "animejs";
import { useEffect } from "react";
import useGameActions from "../hooks/useGameActions";

const Header = () => {
  const { handleExit } = useGameActions();

  return (
    <>
      <div className="header">
        <TitleSvg />
        <Button type="primary" style={{ width: "50%" }} onClick={handleExit}>
          Exit Game!
        </Button>
      </div>
    </>
  );
};

export default Header;
