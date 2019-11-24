import React from "react";
import Block from "../block";
import { TILE_SIZE, TILE_HEIGHT } from "../../constants";
import { TILE_BROWN } from "../../constants/colours";

const Tile = ({
  x = 0,
  y = 0,
  z = 0,
  size = TILE_SIZE,
  height = TILE_HEIGHT,
  colour = TILE_BROWN
}) => {
  return (
    <Block position={[x, y, z]} size={[size, size, height]} colour={colour} />
  );
};

export default Tile;
