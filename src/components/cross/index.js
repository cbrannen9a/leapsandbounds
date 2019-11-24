import React from "react";
import Block from "../block";
import { TILE_SIZE } from "../../constants";
import { MovePositionHelper } from "../../helpers/moveHelpers";

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
  colour = "red",
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
      {MovePositionHelper({ shape: crossShape, x, y }).map((shapeitem, i) => (
        <CrossTile key={i} onClick={onClick} {...shapeitem} />
      ))}
    </group>
  );
};

export default Cross;
