import React from 'react';
import { ForecastEntry } from './ForecastEntry';
import './Forecast.css';
import { useAPIForecast } from './hooks/useAPIForecast';

export const Forecast = ({ units, position }) => {
  const forecast = useAPIForecast({ position, units });

  if (!forecast) return <div />;

  let dateStr = '';

  return (
    <div className="forecast">
      {forecast.city && forecast.city.name}
      <ul className="forecast__entries">
        {forecast.list &&
          forecast.list.map((entry) => {
            const thisDate = new Date(Number.parseInt(entry.dt) * 1000);
            const thisDateStr = thisDate.toLocaleDateString();
            const isNewDay = thisDateStr !== dateStr;
            dateStr = thisDateStr;
            return (
              <ForecastEntry
                key={entry.dt}
                {...{ ...entry, units, isNewDay, date: thisDate }}
              />
            );
          })}
      </ul>
    </div>
  );
};
