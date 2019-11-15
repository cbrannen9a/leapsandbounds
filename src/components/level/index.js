import React from "react";
import { SpotLight } from "../lights";
import Camera from "../camera";
import Ground from "../ground";
import Grid from "../grid";
import { TILE_SIZE } from "../../constants";
import Block from "../block";
import Endpoint from "../endpoint";

const Level = ({ level = { size: 7, blocks: [] } }) => {
  const groundSize = level.size * TILE_SIZE;
  const width = level.size - 1;
  const height = level.size - 1;
  const locationOffset = -(((level.size - 2) / 2) * TILE_SIZE);

  return (
    <>
      <SpotLight />
      <Camera />
      <Ground size={[groundSize, groundSize]} />
      <Grid
        width={width}
        height={height}
        x={locationOffset}
        y={locationOffset}
      />
      {level.blocks.map(block => (
        <Block {...block} />
      ))}
      <Endpoint />
    </>
  );
};

export default Level;
