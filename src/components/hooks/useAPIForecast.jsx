import { fetchForecast } from '../../utils';
import { buildWeatherAPIHook } from './buildWeatherAPIHook';

export const useAPIForecast = buildWeatherAPIHook(fetchForecast, 'position');
