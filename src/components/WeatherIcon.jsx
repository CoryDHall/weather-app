import React from 'react';
import { owmIconUrl } from '../OpenWeatherMap';
import './WeatherIcon.css';

export const WeatherIcon = ({ icon, description }) => {
  return (
    <div className="weather_icon" title={description}>
      <div
        className="weather_icon__inner"
        style={{ backgroundImage: `url(${owmIconUrl(icon)})` }}
      />
    </div>
  );
};
