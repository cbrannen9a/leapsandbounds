import React, { useState } from "react";
import Canvas from "../canvas";
import Level from "../level";
import MovesContainer from "../movesContainer";
import Player from "../player";

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
    player: {
      startpoint: { layer: 0, x: 0, y: -1 }
    },
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

  const [selectedMove, setSelectedMove] = useState(null);

  return (
    <>
      <Canvas>
        <ambientLight />
        <Level level={level} />
        <Player level={level} selectedMove={selectedMove} />
      </Canvas>
      <MovesContainer moves={level.moves} onClick={setSelectedMove} />
    </>
  );
};

export default App;
