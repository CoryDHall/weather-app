import React from 'react';
import { Temperature } from './Temperature';
import { WeatherIcon } from './WeatherIcon';
import './ForecastEntry.css';

export const ForecastEntry = ({ main, weather, units, isNewDay, date }) => {
  return (
    <li className="forecast_entry">
      <h5 className="forecast_entry__date">
        {isNewDay && date.toLocaleDateString()}
      </h5>
      <h5 className="forecast_entry__time">
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </h5>
      {weather && weather['0'] && <WeatherIcon {...{ ...weather['0'] }} />}
      <Temperature {...{ ...main, units }} />
    </li>
  );
};
