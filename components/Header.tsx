import { Button } from "antd";
import TitleSvg from "./TitleSvg";
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
