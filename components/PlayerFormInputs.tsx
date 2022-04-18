import { useEffect, useState } from "react";

import anime from "animejs";
import { Button, Form, Input } from "antd";
import { CirclePicker } from "react-color";
import { AuditOutlined, RocketOutlined } from "@ant-design/icons";
import { previousDay } from "date-fns";
import { useDispatch } from "react-redux";
import { registerPlayers } from "../store/actions";

type setStateColor = (oldState: Props["colorHex"]) => Props["colorHex"];

type Props = {
  side: "Left" | "Right";
  setColorHex(a: setStateColor): void;
  colorHex: {
    Right: string;
    Left: string;
  };
};

const PlayerFormInputs = ({ side, setColorHex, colorHex }: Props) => {
  return (
    <div>
      <p
        style={{
          textShadow: `2px 2px 0px ${colorHex[side]}`,
          fontSize: "4rem",
        }}
        className="grid-cell"
      >
        O
      </p>
      <Form.Item
        label="Player name:"
        name={`name${side}`}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Color:"
        name={`color${side}`}
        rules={[{ required: true, message: "Please select a color!" }]}
      >
        <CirclePicker
          onChange={(color: { hex: string }) =>
            setColorHex((oldState: Props["colorHex"]) => {
              return { ...oldState, [side]: color.hex };
            })
          }
        />
      </Form.Item>
    </div>
  );
};

export default PlayerFormInputs;
