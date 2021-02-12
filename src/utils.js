import { OpenWeatherMapAPI } from './OpenWeatherMap';
import { API_KEY } from './config';
import { queryAPIWithDefaults } from './utils/queryAPIWithDefaults';

const owm = OpenWeatherMapAPI(queryAPIWithDefaults({ appid: API_KEY }));

const fetchByPosition = (fetchFn) => async ({
  position: { lat, lon },
  units = 'metric',
}) => {
  return fetchFn({ lat, lon, units });
};
export const fetchWeather = fetchByPosition(owm('CURRENT'));
export const fetchForecast = fetchByPosition(owm('FORECAST'));
