import React from "react";
import Canvas from "../canvas";
import Level from "../level";

const App = () => (
  <Canvas>
    <ambientLight />
    <Level level={{ size: 8, blocks: [{}] }} />
  </Canvas>
);

export default App;
