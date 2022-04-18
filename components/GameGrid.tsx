import { Card } from "antd";

import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { clickOnGrid } from "../store/actions";

const GameGrid = () => {
  const { gameGrid, players } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const endGame = players[0].winner || players[1].winner;

  const getClassNameGridCell = (rowIdx: number, colIdx: number) => {
    let cellClass = "card-grid";
    if (colIdx < 2) cellClass = cellClass.concat(" border-right");
    if (rowIdx < 2) cellClass = cellClass.concat(" border-bottom");
    if (endGame) cellClass = cellClass.concat(" end-game");
    return cellClass;
  };

  const handleClickOnGrid = (col: string, rowIdx: number, colIdx: number) => {
    if (col !== "" || endGame) return;
    dispatch(clickOnGrid({ rowIdx, colIdx }));
  };

  const getColorForSymb = (col: string) =>
    players.find((p) => p.symbol === col)?.color;

  return (
    <div>
      <Card bordered={false} className="game-grid">
        {gameGrid.map((row, rowIdx) =>
          row.map((col, colIdx) => (
            <Card.Grid
              key={rowIdx + colIdx + col}
              onClick={() => handleClickOnGrid(col, rowIdx, colIdx)}
              className={getClassNameGridCell(rowIdx, colIdx)}
            >
              <p
                style={{
                  textShadow: `2px 2px 0px ${getColorForSymb(col)}`,
                }}
                className="grid-cell"
              >
                {col}
              </p>
            </Card.Grid>
          ))
        )}
      </Card>
    </div>
  );
};

export default GameGrid;
