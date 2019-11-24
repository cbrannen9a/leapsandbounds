import React from "react";
import { GEOMETRY, MATERIAL, GROUND_HEIGHT } from "../../constants";
import { GROUND_GREY } from "../../constants/colours";

const Ground = ({
  x = 0,
  y = 0,
  z = 0,
  rotation = [0, 0, 0],
  color = GROUND_GREY,
  size = [10, 10, GROUND_HEIGHT]
}) => {
  const pos = [x, y, z];
  return (
    <mesh position={pos} rotation={rotation} receiveShadow>
      <boxBufferGeometry attach={GEOMETRY} args={size} />
      <meshPhysicalMaterial attach={MATERIAL} color={color} />
    </mesh>
  );
};

export default Ground;
