import React from "react";
import { SpotLight } from "../lights";
import Camera from "../camera";
import Ground from "../ground";
import Grid from "../grid";
import { TILE_SIZE, GROUND_HEIGHT } from "../../constants";
import Block from "../block";
import Endpoint from "../endpoint";
import { endpointPositionHelper } from "../../helpers/layerHelpers";

const Layer = ({ layer }) => {
  const groundSize = layer.size * TILE_SIZE;
  const width = layer.size - 1;
  const height = layer.size - 1;
  const locationOffset = -(((layer.size - 2) / 2) * TILE_SIZE);
  const layerx = layer.x + locationOffset;
  const layery = layer.y + locationOffset;
  const layerz = layer.z;

  return (
    <>
      <SpotLight />
      <Camera />
      <Ground
        size={[groundSize, groundSize, GROUND_HEIGHT]}
        x={layer.x}
        y={layer.y}
        z={layerz}
      />
      <Grid width={width} height={height} x={layerx} y={layery} z={layerz} />
      {layer.blocks.map(block => (
        <Block {...block} />
      ))}
      <Endpoint
        {...endpointPositionHelper({
          endpoint: layer.endpoint,
          x: layer.x,
          y: layer.y
        })}
        z={layerz}
      />
    </>
  );
};

export default Layer;
