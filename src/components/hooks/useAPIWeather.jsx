import { fetchWeather } from '../../utils';
import { buildWeatherAPIHook } from './buildWeatherAPIHook';

export const useAPIWeather = buildWeatherAPIHook(fetchWeather, 'position');
