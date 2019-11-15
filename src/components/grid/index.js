import React from "react";
import Tile from "../tile";
import { TILE_SIZE } from "../../constants";

const Grid = ({
  width = 1,
  height = 1,
  x = 0,
  y = 0,
  tilesize = TILE_SIZE,
  spacer = 0.015
}) => {
  let grid = new Array(height);

  let ypos = y - tilesize;
  for (let h = 0; h < height; h++) {
    let row = new Array(width);
    let xpos = x - tilesize;
    ypos = ypos + tilesize;
    for (let w = 0; w < width; w++) {
      xpos = xpos + tilesize;
      row.push(
        <Tile
          key={`${xpos}+${ypos}`}
          x={xpos}
          y={ypos}
          size={[tilesize - spacer, tilesize - spacer]}
        />
      );
    }
    grid.push(row);
  }

  return grid;
};

export default Grid;
