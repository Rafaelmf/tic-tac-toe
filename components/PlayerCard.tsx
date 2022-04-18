import { TrophyOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store/type";

import { Player } from "../store/type";

type Props = {
  player: Player;
};

const PlayerCard = ({ player }: Props) => {
  const { currPlayerTrun, players } = useSelector((state: RootState) => state);

  return (
    <div id={player.name}>
      <Card
        title={
          <>
            <h1 className="player-title">{player.name}</h1>
            <span>Score: </span>
            {[...Array(player.score)].map((_, idx) => (
              <TrophyOutlined key={idx} />
            ))}
          </>
        }
        className={
          players[currPlayerTrun].name === player.name
            ? "player-card highlighted"
            : "player-card"
        }
      >
        <div style={{ height: "30vh" }}>
          <div className="player-card-grid">
            {player.moves.map(
              (curr, idx) =>
                !curr && (
                  <p
                    key={idx}
                    style={{
                      textShadow: `2px 2px 0px ${curr ? "gray" : player.color}`,
                    }}
                    className="grid-cell"
                  >
                    {player.symbol}
                  </p>
                )
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlayerCard;
