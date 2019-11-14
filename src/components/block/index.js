import React from "react";

const Block = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  return (
    <mesh rotation={rotation} castShadow position={position}>
      <boxBufferGeometry attach="geometry" args={[0.25, 0.25, 0.25]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default Block;
