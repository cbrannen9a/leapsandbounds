import React from "react";
import { GEOMETRY, MATERIAL } from "../../constants";

const Block = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [0.25, 0.25, 0.25],
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
