import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getGeolocation } from '../helpers/getGeolocation';
export const usePosition = () => {
  const match = useRouteMatch('/:lat([.\\-0-9]+)/:lon([.\\-0-9]+)');
  const { lat, lon } = match ? match.params : {};
  const [coordinates, setCoordinates] = useState(
    lat && lon ? { lat, lon } : null
  );
  useEffect(() => {
    if (coordinates !== null) return;
    getGeolocation(setCoordinates);
  }, [coordinates, lat, lon]);
  return coordinates;
};
