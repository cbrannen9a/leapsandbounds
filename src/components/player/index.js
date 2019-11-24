import React, { useState } from "react";
import { GEOMETRY, MATERIAL } from "../../constants";
import Move from "../move";
import { PLAYER_BLUE } from "../../constants/colours";

const Player = ({
  position,
  rotation = [0, 0, 0],
  size = [1, 1, 1],
  colour = PLAYER_BLUE,
  level,
  selectedMove,
  selectedMoveRotation,
  attemptMove,
  setAttemptMove
}) => {
  const { player } = level;
  const [playerPosition, setPlayerPosition] = useState(
    position || [player.startpoint.x, player.startpoint.y, 0.5]
  );

  const handleMoved = ({ position }) => {
    setPlayerPosition(position);
    setAttemptMove(false);
  };

  return (
    <>
      <mesh rotation={rotation} castShadow position={playerPosition}>
        <boxBufferGeometry attach={GEOMETRY} args={size} />
        <meshBasicMaterial attach={MATERIAL} color={colour} />
      </mesh>
      {selectedMove !== null && (
        <Move
          shape={level.moves[selectedMove].shape}
          end={level.moves[selectedMove].end}
          x={playerPosition[0]}
          y={playerPosition[1]}
          rotation={selectedMoveRotation}
          layerSize={level.layers[0].size}
          selected
          attemptMove={attemptMove}
          handleMoved={handleMoved}
        />
      )}
    </>
  );
};

export default Player;
