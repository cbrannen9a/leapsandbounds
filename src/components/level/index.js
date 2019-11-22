import React from "react";
import Layer from "../layer";

const Level = ({ level }) => {
  return (
    <>
      {level.layers.map(layer => (
        <Layer key={`${layer.x}+${layer.y}+${layer.z}`} layer={layer} />
      ))}
    </>
  );
};

export default Level;
