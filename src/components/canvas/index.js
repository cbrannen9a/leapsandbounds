import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

const LPCanvas = ({ children }) => {
  return (
    <Canvas
      style={{ background: "lightblue" }}
      shadowMap
      camera={{ position: [0, 0, 5] }}
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
