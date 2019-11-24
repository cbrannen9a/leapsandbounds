import { useState, useEffect } from "react";

const useMultiKeyPress = () => {
  const [keysPressed, setKeyPressed] = useState(new Set([]));

  useEffect(() => {
    function downHandler({ key }) {
      setKeyPressed(new Set(keysPressed.add(key)));
    }

    function upHandler({ key }) {
      keysPressed.delete(key);
      setKeyPressed(new Set(keysPressed));
    }
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [keysPressed]);

  return keysPressed;
};

export default useMultiKeyPress;
