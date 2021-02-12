import React from 'react';
import { Temperature } from './Temperature';
import { WeatherIcon } from './WeatherIcon';
import './Weather.css';
import { useAPIWeather } from './hooks/useAPIWeather';

export const Weather = ({ units, position }) => {
  const weather = useAPIWeather({ position, units });

  if (!weather) return <div></div>;

  return (
    <div className="weather">
      <WeatherIcon {...{ ...weather.weather['0'] }} />
      {weather.name}
      <Temperature {...{ ...weather.main, units }} />
    </div>
  );
};
