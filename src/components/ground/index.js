import React from "react";
import { GROUND_POS_OFFSET, GEOMETRY, MATERIAL } from "../../constants";

const Ground = ({
  x = 0,
  y = 0,
  z = null,
  rotation = [0, 0, 0],
  color = "#272727",
  size = [10, 10]
}) => {
  const pos = [x, y, z || GROUND_POS_OFFSET];
  return (
    <mesh position={pos} rotation={rotation} receiveShadow>
      <planeBufferGeometry attach={GEOMETRY} args={size} />
      <meshPhongMaterial attach={MATERIAL} color={color} />
    </mesh>
  );
};

export default Ground;
