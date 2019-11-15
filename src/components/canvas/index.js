import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

const LPCanvas = ({ children, camera = { position: [0, -4, 5] } }) => {
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
