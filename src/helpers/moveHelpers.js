import { ROTATION } from "../constants";

export const MoveRotationHelper = ({ shape, rotation }) => {
  switch (rotation) {
    case ROTATION.SOUTH:
    case ROTATION.WEST:
    case ROTATION.EAST:
      return shape.map(i => {
        return MoveItemRotationHelper({ x: i.x, y: i.y, rotation });
      });

    default:
      return shape;
  }
};

export const MovePositionHelper = ({ shape, x, y }) => {
  return [
    { x, y },
    ...shape.map(i => {
      return MoveItemPositionHelper({ item: i, x, y });
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

export const isMoveValid = ({ end, x, y, rotation, layerSize }) => {
  const moveEndPosition = moveEndPositionHelper({ end, x, y, rotation });
  const size = layerSize / 2 - 1;
  if (
    Math.abs(moveEndPosition.x) > size ||
    Math.abs(moveEndPosition.y) > size
  ) {
    return false;
  }
  return true;
};

export const moveEndPositionHelper = ({ end, x, y, rotation }) => {
  const i = MoveItemPositionHelper({
    item: MoveItemRotationHelper({ x: end.x, y: end.y, rotation }),
    x,
    y
  });
  console.log({ i });
  return i;
};

export const MoveItemPositionHelper = ({ item, x, y }) => {
  return { x: item.x + x, y: item.y + y };
};

export const MoveItemRotationHelper = ({ x, y, rotation }) => {
  switch (rotation) {
    case ROTATION.NORTH:
      return { x, y };

    case ROTATION.SOUTH:
      return { x: -x, y: -y };

    case ROTATION.WEST:
      return { x: -y, y: x };

    case ROTATION.EAST:
      return { x: y, y: -x };

    default:
      return { x, y };
  }
};
