import { useEffect, useState } from "react";

import anime from "animejs";
import { Button, Form, Input } from "antd";
import { CirclePicker } from "react-color";
import { AuditOutlined, RocketOutlined } from "@ant-design/icons";
import { previousDay } from "date-fns";
import { useDispatch } from "react-redux";
import { registerPlayers } from "../store/actions";

import useAnimeLetters from "../hooks/useAnimeLetters";
import PlayerFormInputs from "./PlayerFormInputs";

const RegisterPlayers = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [colorHex, setColorHex] = useState({
    Left: "#00000000",
    Right: "#00000000",
  });
  const dispatch = useDispatch();
  const { animeTicTacToe } = useAnimeLetters();

  useEffect(() => {
    if (formVisible) return;
    animeTicTacToe();
  }, [formVisible]);

  const finishForm = (values) => {
    dispatch(
      registerPlayers({
        ...values,
        colorLeft: values.colorLeft.hex,
        colorRight: values.colorRight.hex,
      })
    );
  };

  return (
    <>
      {!formVisible && (
        <>
          <h1 className="ml11">
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span className="letters">Tic Tac Toe</span>
            </span>
          </h1>

          <Button
            onClick={() => setFormVisible(true)}
            type="primary"
            size="large"
            icon={<AuditOutlined />}
          >
            Register Players
          </Button>
        </>
      )}
      {formVisible && (
        <Form
          onFinish={finishForm}
          size="large"
          className="players-form"
          layout="vertical"
        >
          <PlayerFormInputs
            side="Left"
            colorHex={colorHex}
            setColorHex={setColorHex}
          />
          <PlayerFormInputs
            side="Right"
            colorHex={colorHex}
            setColorHex={setColorHex}
          />
          <Button
            style={{ gridColumn: "1 / span 2" }}
            type="primary"
            icon={<RocketOutlined />}
            htmlType="submit"
          >
            GO!
          </Button>
        </Form>
      )}
    </>
  );
};

export default RegisterPlayers;
