import React from "react";
import Block from "../block";
import { TILE_SIZE } from "../../constants";
import { movePositionHelper } from "../../helpers/moveHelpers";
import { CROSS_RED } from "../../constants/colours";

const crossShape = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 }
];

const CrossTile = ({
  x = 0,
  y = 0,
  z = 0,
  size = TILE_SIZE,
  height = 0.01,
  colour = CROSS_RED,
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

const Cross = ({ x = 0, y = 0, onClick }) => {
  return (
    <group position={[x, y, 0]} rotation={[0, 0, 0.8]}>
      {movePositionHelper({ shape: crossShape, x, y }).map((shapeitem, i) => (
        <CrossTile key={i} onClick={onClick} {...shapeitem} />
      ))}
    </group>
  );
};

export default Cross;
