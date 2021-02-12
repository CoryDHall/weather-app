import { useState, useEffect } from 'react';

export const buildWeatherAPIHook = (apiFn) => ({ position, units }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!position) return;
    (async () => {
      setData(await apiFn({ position, units }));
    })();
  }, [units, position]);

  return data;
};
