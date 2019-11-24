import React from "react";
import {
  GEOMETRY,
  MATERIAL,
  TILE_SIZE,
  ENDPOINT_Z_OFFSET
} from "../../constants";
import { TARGET_RED, TARGET_WHITE, TARGET_BLUE } from "../../constants/colours";

const Disc = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [TILE_SIZE * 0.35, TILE_SIZE * 0.45],
  colour = "red"
}) => {
  return (
    <mesh rotation={rotation} castShadow position={position}>
      <ringBufferGeometry attach={GEOMETRY} args={size} />
      <meshPhysicalMaterial attach={MATERIAL} color={colour} />
    </mesh>
  );
};

const Endpoint = ({
  x = 0,
  y = 0,
  z = 0,
  size = [TILE_SIZE * 0.35, TILE_SIZE * 0.45]
}) => {
  const position = [x, y, z + ENDPOINT_Z_OFFSET];
  return (
    <>
      <spotLight
        intensity={0.6}
        position={[x, y, z + 10]}
        penumbra={1}
        castShadow
      />
      <Disc position={position} size={size} colour={TARGET_RED} />
      <Disc
        position={position}
        size={size.map(p => p * 0.75)}
        colour={TARGET_BLUE}
      />
      <Disc
        position={position}
        size={size.map(p => p * 0.5)}
        colour={TARGET_WHITE}
      />
    </>
  );
};

export default Endpoint;
