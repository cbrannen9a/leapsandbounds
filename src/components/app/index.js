import React from "react";
import Canvas from "../canvas";
import { SpotLight } from "../lights";
import Ground from "../ground";
import Block from "../block";
import Camera from "../camera";
import Tile from "../tile";

const App = () => (
  <Canvas>
    <ambientLight />
    <SpotLight />
    <Camera />
    <Ground />
    <Block />
    <Tile x={1} y={1} />
  </Canvas>
);

export default App;
