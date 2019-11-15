import React from "react";

const Block = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [0.25, 0.25, 0.25],
  colour = "red"
}) => {
  return (
    <mesh rotation={rotation} castShadow position={position}>
      <boxBufferGeometry attach="geometry" args={size} />
      <meshBasicMaterial attach="material" color={colour} />
    </mesh>
  );
};

export default Block;
