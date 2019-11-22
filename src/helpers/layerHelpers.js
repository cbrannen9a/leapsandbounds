export const EndpointPositionHelper = ({ endpoint, x, y }) => {
  return { ...endpoint, x: endpoint.x + x, y: endpoint.y + y };
};
