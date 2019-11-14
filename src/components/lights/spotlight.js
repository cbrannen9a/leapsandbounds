import React from "react";

const SpotLight = () => {
  return (
    <spotLight
      intensity={0.6}
      position={[20, 10, 10]}
      angle={0.2}
      penumbra={1}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      castShadow
    />
  );
};

export default SpotLight;
