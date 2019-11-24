import React, { useState } from "react";
import { GEOMETRY, MATERIAL } from "../../constants";
import Move from "../move";

const Player = ({
  position,
  rotation = [0, 0, 0],
  size = [1, 1, 1],
  colour = "blue",
  level,
  selectedMove,
  selectedMoveRotation
}) => {
  const { player } = level;
  const [playerPosition, setPlayerPosition] = useState(
    position || [player.startpoint.x, player.startpoint.y, 0.5]
  );

  return (
    <>
      <mesh rotation={rotation} castShadow position={playerPosition}>
        <boxBufferGeometry attach={GEOMETRY} args={size} />
        <meshBasicMaterial attach={MATERIAL} color={colour} />
      </mesh>
      {selectedMove !== null && (
        <Move
          shape={level.moves[selectedMove].shape}
          x={playerPosition[0]}
          y={playerPosition[1]}
          rotation={selectedMoveRotation}
        />
      )}
    </>
  );
};

export default Player;
