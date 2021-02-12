import { buildAPIUrl } from './buildAPIUrl';

export function buildAPI(baseUrl, endpoints) {
  const genUrl = buildAPIUrl(baseUrl, endpoints);
  return (fetchFn) => (endpoint) => {
    const url = genUrl(endpoint);
    return (params) => fetchFn(url, params);
  };
}
