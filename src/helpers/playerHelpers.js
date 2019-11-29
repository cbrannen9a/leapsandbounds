import { GROUND_POS_OFFSET } from "../constants";

export const playerPositionHelper = ({ x, y, z }) => {
  return [x, y, z + GROUND_POS_OFFSET];
};
