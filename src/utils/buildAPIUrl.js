export const buildAPIUrl = (baseUrl, endpoints) => (endpointKey) =>
  `${baseUrl}${endpoints[endpointKey]}`;
