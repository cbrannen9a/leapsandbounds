import React from "react";
import Block from "../block";
import { TILE_SIZE, GROUND_POS_OFFSET } from "../../constants";

const Tile = ({
  x = 0,
  y = 0,
  zPositionOffset = GROUND_POS_OFFSET,
  size = [TILE_SIZE, TILE_SIZE],
  height = 0.05,
  colour = "brown"
}) => {
  return (
    <Block
      position={[x, y, zPositionOffset]}
      size={[size[0], size[1], height]}
      colour={colour}
    />
  );
};

export default Tile;
