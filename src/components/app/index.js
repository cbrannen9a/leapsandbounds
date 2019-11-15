import React from "react";
import Canvas from "../canvas";
import { SpotLight } from "../lights";
import Ground from "../ground";
import Block from "../block";
import Camera from "../camera";
import Grid from "../grid";
import { TILE_SIZE } from "../../constants";

const App = () => (
  <Canvas>
    <ambientLight />
    <SpotLight />
    <Camera />
    <Ground />
    <Grid width={6} height={6} x={-2.5 * TILE_SIZE} y={-2.5 * TILE_SIZE} />
    <Block
      position={[-2.5 * TILE_SIZE - TILE_SIZE, -2.5 * TILE_SIZE - TILE_SIZE, 0]}
    />
  </Canvas>
);

export default App;
