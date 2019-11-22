import { ROTATION } from "../constants";

export const MoveRotationHelper = ({ shape, rotation }) => {
  switch (rotation) {
    case ROTATION.NORTH:
      return shape;

    case ROTATION.SOUTH:
      return shape.map(i => {
        return { x: -i.x, y: -i.y };
      });

    case ROTATION.WEST:
      return shape.map(i => {
        return { x: -i.y, y: i.x };
      });

    case ROTATION.EAST:
      return shape.map(i => {
        return { x: i.y, y: -i.x };
      });
    default:
      return shape;
  }
};

export const MovePositionHelper = ({ shape, x, y }) => {
  return [
    { x, y },
    ...shape.map(i => {
      return { x: i.x + x, y: i.y + y };
    })
  ];
};

export const MoveHelper = ({ shape, x, y, rotation }) => {
  return MovePositionHelper({
    shape: MoveRotationHelper({ shape, rotation }),
    x,
    y
  });
};
