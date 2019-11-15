import React from "react";
import Block from "../block";

const Tile = ({
  x = 0,
  y = 0,
  zPositionOffset = -0.125,
  size = [0.25, 0.25],
  height = 0.05
}) => {
  return (
    <Block
      position={[x, y, zPositionOffset]}
      size={[size[0], size[1], height]}
    />
  );
};

export default Tile;
