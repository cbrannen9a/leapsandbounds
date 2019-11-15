import React from "react";
import Block from "../block";
import { TILE_SIZE, TILE_POS_Z_OFFSET } from "../../constants";

const Tile = ({
  x = 0,
  y = 0,
  zPositionOffset = TILE_POS_Z_OFFSET,
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
