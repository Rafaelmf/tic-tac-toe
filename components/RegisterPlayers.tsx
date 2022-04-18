import { useEffect, useState } from "react";

import anime from "animejs";
import { Button, Form, Input } from "antd";
import { CirclePicker } from "react-color";
import { AuditOutlined, RocketOutlined } from "@ant-design/icons";
import { previousDay } from "date-fns";
import { useDispatch } from "react-redux";
import { registerPlayers } from "../store/actions";

import useAnimeLetters from "../hooks/useAnimeLetters";

const RegisterPlayers = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [colorHex, setColorHex] = useState({
    left: "#00000000",
    right: "#00000000",
  });
  const dispatch = useDispatch();
  const { animeTicTacToe } = useAnimeLetters();

  useEffect(() => {
    if (formVisible) return;
    animeTicTacToe();
  }, [formVisible]);

  const handleChangeColor = (
    color: { hex: string },
    side: "left" | "right"
  ) => {
    setColorHex((oldState) => {
      return { ...oldState, [side]: color.hex };
    });
  };

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
          <div>
            <p
              style={{
                textShadow: `2px 2px 0px ${colorHex.left}`,
                fontSize: "4rem",
              }}
              className="grid-cell"
            >
              X
            </p>
            <Form.Item
              label="Player name:"
              name="nameLeft"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Color:"
              name="colorLeft"
              rules={[{ required: true, message: "Please select a color!" }]}
            >
              <CirclePicker
                onChange={(color: { hex: string }) =>
                  handleChangeColor(color, "left")
                }
              />
            </Form.Item>
          </div>
          <div>
            <p
              style={{
                textShadow: `2px 2px 0px ${colorHex.right}`,
                fontSize: "4rem",
              }}
              className="grid-cell"
            >
              O
            </p>
            <Form.Item
              label="Player name:"
              name="nameRight"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Color:"
              name="colorRight"
              rules={[{ required: true, message: "Please select a color!" }]}
            >
              <CirclePicker
                onChange={(color: { hex: string }) =>
                  handleChangeColor(color, "right")
                }
              />
            </Form.Item>
          </div>
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
