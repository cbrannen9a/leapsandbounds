import { ROTATION } from "../constants";

export const moveRotationHelper = ({ shape, rotation }) => {
  switch (rotation) {
    case ROTATION.SOUTH:
    case ROTATION.WEST:
    case ROTATION.EAST:
      return shape.map(i => {
        return moveItemRotationHelper({ x: i.x, y: i.y, rotation });
      });

    default:
      return shape;
  }
};

export const movePositionHelper = ({ shape, x, y }) => {
  return [
    { x, y },
    ...shape.map(i => {
      return moveItemPositionHelper({ item: i, x, y });
    })
  ];
};

export const moveHelper = ({ shape, x, y, rotation }) => {
  return movePositionHelper({
    shape: moveRotationHelper({ shape, rotation }),
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
  const i = moveItemPositionHelper({
    item: moveItemRotationHelper({ x: end.x, y: end.y, rotation }),
    x,
    y
  });
  return i;
};

export const moveItemPositionHelper = ({ item, x, y }) => {
  return { x: item.x + x, y: item.y + y };
};

export const moveItemRotationHelper = ({ x, y, rotation }) => {
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
