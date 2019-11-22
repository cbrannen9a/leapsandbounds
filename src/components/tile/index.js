import React from "react";
import Block from "../block";
import { TILE_SIZE, TILE_HEIGHT } from "../../constants";

const Tile = ({
  x = 0,
  y = 0,
  z = 0,
  size = TILE_SIZE,
  height = TILE_HEIGHT,
  colour = "brown"
}) => {
  return (
    <Block position={[x, y, z]} size={[size, size, height]} colour={colour} />
  );
};

export default Tile;
