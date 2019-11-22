import React from "react";
import { GEOMETRY, MATERIAL, TILE_SIZE } from "../../constants";

const Disc = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [TILE_SIZE * 0.35, TILE_SIZE * 0.45],
  colour = "red"
}) => {
  return (
    <mesh rotation={rotation} castShadow position={position}>
      <ringBufferGeometry attach={GEOMETRY} args={size} />
      <meshBasicMaterial attach={MATERIAL} color={colour} />
    </mesh>
  );
};

const Endpoint = ({
  x = 0,
  y = 0,
  size = [TILE_SIZE * 0.35, TILE_SIZE * 0.45],
  colour = "red"
}) => {
  const position = [x, y, -0.45];
  return (
    <>
      <Disc position={position} size={size} colour="red" />
      <Disc position={position} size={size.map(p => p * 0.75)} colour="blue" />
      <Disc position={position} size={size.map(p => p * 0.5)} colour="white" />
    </>
  );
};

export default Endpoint;
