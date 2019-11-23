import React from "react";
import Canvas from "../canvas";
import Level from "../level";
import MovesContainer from "../movesContainer";

const App = () => {
  const level = {
    layers: [
      {
        x: 0,
        y: 0,
        z: 0,
        size: 8,
        blocks: [],
        endpoint: { x: -3, y: 3 }
      }
    ],
    moves: [
      {
        shape: [
          { x: 1, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 1 }
        ]
      },
      {
        shape: [
          { x: 0, y: 1 },
          { x: 1, y: 1 },
          { x: 1, y: 2 }
        ]
      }
    ]
  };
  return (
    <>
      <Canvas>
        <ambientLight />
        <Level level={level} />
      </Canvas>
      <MovesContainer moves={level.moves} />
    </>
  );
};

export default App;
