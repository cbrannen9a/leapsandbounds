export const EndpointPositionHelper = ({ endpoint, x, y }) => {
  return { ...endpoint, x: x + endpoint.x, y: y + endpoint.y };
};
