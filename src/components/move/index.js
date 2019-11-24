import React from "react";
import Block from "../block";
import { TILE_SIZE, MOVE_POS_Z_OFFSET } from "../../constants";
import { MoveHelper } from "../../helpers/moveHelpers";

const MoveTile = ({
  x = 0,
  y = 0,
  z,
  size = TILE_SIZE,
  height = 0.01,
  colour = "green",
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

const Move = ({ x = 0, y = 0, z = 0, shape = [], rotation = "", onClick }) => {
  return (
    <>
      {shape.length > 0
        ? MoveHelper({ shape, x, y, rotation }).map((shapeitem, i) => (
            <MoveTile
              key={i}
              onClick={onClick}
              {...shapeitem}
              z={z + MOVE_POS_Z_OFFSET}
              colour={i === 0 ? "yellow" : "green"}
            />
          ))
        : null}
    </>
  );
};

export default Move;
