import { buildAPI } from './utils/buildAPI';
const BASE_URL = '//api.openweathermap.org/data/2.5/';
const ENDPOINTS = {
  CURRENT: 'weather',
  FORECAST: 'forecast',
};

const ICON_BASE_URL = '//openweathermap.org/img/wn/';
export const OpenWeatherMapAPI = buildAPI(BASE_URL, ENDPOINTS);
