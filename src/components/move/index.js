import React, { useEffect } from "react";
import Block from "../block";
import { TILE_SIZE, MOVE_POS_Z_OFFSET } from "../../constants";
import {
  MoveHelper,
  isMoveValid,
  moveEndPositionHelper
} from "../../helpers/moveHelpers";
import {
  MOVE_START,
  MOVE_INVALID_RED,
  MOVE_GREEN
} from "../../constants/colours";

const MoveTile = ({
  x = 0,
  y = 0,
  z,
  size = TILE_SIZE - 0.01,
  height = 0.01,
  colour = MOVE_GREEN,
  onClick
}) => {
  return (
    <Block
      position={[x, y, z]}
      size={[size, size, height]}
      colour={colour}
      onClick={onClick}
    />
  );
};

const Move = ({
  x = 0,
  y = 0,
  z = 0,
  shape = [],
  end = {},
  rotation = "",
  onClick,
  layerSize = 0,
  selected,
  attemptMove,
  handleMoved
}) => {
  const isValid = selected && isMoveValid({ end, x, y, rotation, layerSize });
  const moveEnd = moveEndPositionHelper({ end, x, y, rotation });
  const getColour = ({ index, isValid, selected }) => {
    if (index === 0) {
      return MOVE_START;
    }
    if (selected && !isValid) {
      return MOVE_INVALID_RED;
    }
    return MOVE_GREEN;
  };

  useEffect(() => {
    function handleMakeMove() {
      if (isValid && attemptMove) {
        handleMoved({ position: [moveEnd.x, moveEnd.y, 0] });
      }
    }
    handleMakeMove();
  }, [attemptMove, isValid]);

  return (
    <>
      {shape.length > 0
        ? MoveHelper({ shape, x, y, rotation }).map((shapeitem, i) => (
            <MoveTile
              key={i}
              onClick={onClick}
              {...shapeitem}
              z={z + MOVE_POS_Z_OFFSET}
              colour={getColour({ index: i, isValid, selected })}
            />
          ))
        : null}
    </>
  );
};

export default Move;
