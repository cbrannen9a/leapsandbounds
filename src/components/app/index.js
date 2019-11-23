import React from "react";
import Canvas from "../canvas";
import Level from "../level";

import Move from "../move";
import { ROTATION } from "../../constants";

const App = () => (
  <Canvas>
    <ambientLight />
    <Level
      level={{
        layers: [
          { x: 0, y: 0, z: 0, size: 8, blocks: [], endpoint: { x: -3, y: 3 } },
          { x: 4, y: 3, z: 2, size: 4, blocks: [], endpoint: { x: 1, y: 0 } }
        ]
      }}
    />
    <Move x={2} y={2} rotation={ROTATION.NORTH} />
  </Canvas>
);

export default App;
