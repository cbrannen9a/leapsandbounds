import React from "react";
import { GEOMETRY, MATERIAL } from "../../constants";

const Disc = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [0.075, 0.1],
  colour = "red"
}) => {
  return (
    <mesh rotation={rotation} castShadow position={position}>
      <ringBufferGeometry attach={GEOMETRY} args={size} />
      <meshBasicMaterial attach={MATERIAL} color={colour} />
    </mesh>
  );
};

const Endpoint = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [0.075, 0.1],
  colour = "red"
}) => {
  return <Disc position={position} rotation={rotation} siz={size} />;
};

export default Endpoint;
