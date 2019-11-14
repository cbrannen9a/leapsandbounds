import React from "react";
import Canvas from "../canvas";
import { SpotLight } from "../lights";
import Ground from "../ground";
import Block from "../block";

const App = () => (
  <Canvas>
    <ambientLight />
    <SpotLight />
    <Ground />
    <Block />
  </Canvas>
);

export default App;
