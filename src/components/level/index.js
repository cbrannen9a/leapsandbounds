import React from "react";
import { SpotLight } from "../lights";
import Camera from "../camera";
import Ground from "../ground";
import Grid from "../grid";
import { TILE_SIZE } from "../../constants";
import Block from "../block";
import Endpoint from "../endpoint";

const Level = ({ level }) => {
  const groundSize = level.size * TILE_SIZE;
  const width = level.size - 1;
  const height = level.size - 1;
  const locationOffset = -(((level.size - 2) / 2) * TILE_SIZE);
  const levelx = level.x + locationOffset;
  const levely = level.y + locationOffset;

  return (
    <>
      <SpotLight />
      <Camera />
      <Ground size={[groundSize, groundSize]} x={level.x} y={level.y} />
      <Grid width={width} height={height} x={levelx} y={levely} />
      {level.blocks.map(block => (
        <Block {...block} />
      ))}
      <Endpoint {...level.endpoint} />
    </>
  );
};

export default Level;
