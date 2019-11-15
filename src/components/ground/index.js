import React from "react";
import { GROUND_POS_OFFSET } from "../../constants";

const Ground = ({
  position = [0, 0],
  rotation = [0, 0, 0],
  color = "#272727",
  size = [10, 10]
}) => {
  const pos = [position[0], position[1], GROUND_POS_OFFSET];
  return (
    <mesh position={pos} rotation={rotation} receiveShadow>
      <planeBufferGeometry attach="geometry" args={size} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Ground;
