import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { START_CAMERA_POS } from "../../constants";

const LPCanvas = ({ children, camera = { position: START_CAMERA_POS } }) => {
  return (
    <Canvas
      style={{ background: "lightblue" }}
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
