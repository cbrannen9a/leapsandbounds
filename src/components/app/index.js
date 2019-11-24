import React, { useState, useEffect } from "react";
import Canvas from "../canvas";
import Level from "../level";
import MovesContainer from "../movesContainer";
import Player from "../player";
import useKeyPress from "../../hooks/useKeyPress";
import useMultiKeyPress from "../../hooks/useMultiKeyPress";
import { ROTATION } from "../../constants";
import { ParsedError } from "pretty-error";

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
      startpoint: { layer: 0, x: 0, y: -3 }
    },
    moves: [
      {
        shape: [
          { x: 1, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 1 }
        ],
        end: {
          x: 2,
          y: 1
        }
      },
      {
        shape: [
          { x: 0, y: 1 },
          { x: 1, y: 1 },
          { x: 1, y: 2 }
        ],
        end: {
          x: 1,
          y: 2
        }
      }
    ]
  };

  const [selectedMove, setSelectedMove] = useState(null);
  const [moveRotation, setMoveRotation] = useState(0);
  const escapePressed = useKeyPress("Escape");
  const keysPressed = useMultiKeyPress();

  const handleSelectedMove = move => {
    setSelectedMove(move);
    setMoveRotation(0);
  };

  useEffect(() => {
    handleSelectedMove(null);
  }, [escapePressed]);

  useEffect(() => {
    function handleKeysPressed(keysPressed) {
      if (keysPressed.has("ArrowRight")) {
        setMoveRotation(prev => (prev + 1) % 4);
      }
      if (keysPressed.has("ArrowLeft")) {
        setMoveRotation(prev => (prev + 3) % 4);
      }
      if (keysPressed.has("1")) {
        setSelectedMove(0);
      }
    }
    handleKeysPressed(keysPressed);
  }, [keysPressed]);

  return (
    <>
      <Canvas>
        <ambientLight />
        <Level level={level} />
        <Player
          level={level}
          selectedMove={selectedMove}
          selectedMoveRotation={Object.keys(ROTATION)[moveRotation]}
        />
      </Canvas>
      <MovesContainer moves={level.moves} onClick={handleSelectedMove} />
    </>
  );
};

export default App;
