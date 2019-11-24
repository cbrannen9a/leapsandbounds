import React from "react";
import { GEOMETRY, MATERIAL, TILE_SIZE } from "../../constants";
import { BLOCK_RED } from "../../constants/colours";

const Block = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  size = [TILE_SIZE, TILE_SIZE, TILE_SIZE],
  onClick,
  colour = BLOCK_RED
}) => {
  return (
    <mesh
      rotation={rotation}
      castShadow
      position={position}
      scale={scale}
      onClick={onClick}
    >
      <boxBufferGeometry attach={GEOMETRY} args={size} />
      <meshPhysicalMaterial attach={MATERIAL} color={colour} />
    </mesh>
  );
};

export default Block;
