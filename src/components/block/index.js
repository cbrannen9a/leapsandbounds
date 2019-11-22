import React from "react";
import { GEOMETRY, MATERIAL, TILE_SIZE } from "../../constants";

const Block = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [TILE_SIZE, TILE_SIZE, TILE_SIZE],
  colour = "red"
}) => {
  return (
    <mesh rotation={rotation} castShadow position={position}>
      <boxBufferGeometry attach={GEOMETRY} args={size} />
      <meshBasicMaterial attach={MATERIAL} color={colour} />
    </mesh>
  );
};

export default Block;
