import React from "react";
import Canvas from "../canvas";
import Level from "../level";

import Move from "../move";
import { ROTATION } from "../../constants";

const App = () => (
  <Canvas>
    <ambientLight />
    <Level
      level={{ x: 0, y: 2, size: 8, blocks: [], endpoint: { x: -3, y: 3 } }}
    />
    <Move x={2} y={2} rotation={ROTATION.NORTH} />
  </Canvas>
);

export default App;
