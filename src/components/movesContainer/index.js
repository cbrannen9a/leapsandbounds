import React from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import Move from "../move";
import Cross from "../cross";

const MovesContainer = ({ moves, onClick }) => {
  return (
    <Container>
      <Canvas>
        {moves &&
          moves.map((move, i) => (
            <Move
              key={i}
              {...move}
              x={5 * (i - moves.length / 2) + 1}
              onClick={() => onClick(i)}
            />
          ))}
      </Canvas>
      <BottomRight>
        <Canvas>
          <Cross onClick={() => onClick(null)} />
        </Canvas>
      </BottomRight>
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

const BottomRight = styled.div`
  right: 0px;
  bottom: 0px;
  width: 50px;
  position: absolute;
  height: 100px;

  @media only screen and (max-width: 900px) {
    height: 40px;
  }
`;

export default MovesContainer;
