import React from "react";
import { GEOMETRY, MATERIAL } from "../../constants";

const Player = ({
  position = [1, 1, 0],
  rotation = [0, 0, 0],
  size = [1, 1, 1],
  colour = "blue"
}) => {
  return (
    <mesh rotation={rotation} castShadow position={position}>
      <boxBufferGeometry attach={GEOMETRY} args={size} />
      <meshBasicMaterial attach={MATERIAL} color={colour} />
    </mesh>
  );
};

export default Player;
