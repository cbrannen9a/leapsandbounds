import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { START_CAMERA_POS } from "../../constants";
import { CANVAS_BACKGROUND_BLUE } from "../../constants/colours";

const LPCanvas = ({ children, camera = { position: START_CAMERA_POS } }) => {
  return (
    <Canvas
      style={{ background: CANVAS_BACKGROUND_BLUE }}
      shadowMap
      camera={camera}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      {children}
    </Canvas>
  );
};

export default LPCanvas;
