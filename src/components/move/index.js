import React from "react";
import Block from "../block";
import { TILE_SIZE, MOVE_POS_Z_OFFSET } from "../../constants";
import { MoveHelper } from "../../helpers/moveHelpers";

const MoveTile = ({
  x = 0,
  y = 0,
  size = [TILE_SIZE, TILE_SIZE],
  height = 0.01,
  colour = "green"
}) => {
  return (
    <Block
      position={[x, y, MOVE_POS_Z_OFFSET]}
      size={[size[0], size[1], height]}
      colour={colour}
    />
  );
};

const Move = ({ x = 0, y = 0, shape = [], rotation = "" }) => {
  return (
    <>
      {shape.length > 0
        ? MoveHelper({ shape, x, y, rotation }).map((shapeitem, i) => (
            <MoveTile
              key={i}
              {...shapeitem}
              colour={i === 0 ? "yellow" : "green"}
            />
          ))
        : null}
    </>
  );
};

export default Move;
