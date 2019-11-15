import React, { useRef } from "react";
import { extend, useThree, useRender } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Camera = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useRender(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      minDistance={1}
      maxDistance={50}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

export default Camera;
