import { stringify } from 'query-string';

export const queryAPIWithDefaults = (defaultParams) => async (url, params) => {
  const resp = await fetch(
    `${url}?${stringify({
      ...defaultParams,
      ...params,
    })}`
  );
  return resp.json();
};
