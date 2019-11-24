import React from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import Move from "../move";

const MovesContainer = ({ moves, onClick }) => {
  return (
    <Container>
      <Canvas>
        {moves &&
          moves.map((move, i) => (
            <Move
              key={i}
              {...move}
              x={5 * (i - moves.length / 2)}
              onClick={() => onClick(i)}
            />
          ))}
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  bottom: 0px;
  position: absolute;
  height: 100px;
  width: 100vw;
  background: black;

  @media only screen and (max-width: 900px) {
    height: 40px;
  }
`;

export default MovesContainer;
