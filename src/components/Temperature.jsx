import React from 'react';
import { Units } from '../utils/Units';
import './Temperature.css';

export const Temperature = ({
  temp,
  feels_like,
  temp_min,
  temp_max,
  units,
}) => {
  const deg = Units.shortWithDegree(units);

  return (
    <div className="temperature">
      <h2 className="temperature__right_now">
        {temp}
        {deg}
      </h2>
      <h4 className="temperature__feels_like">
        Feels like{' '}
        <b>
          {feels_like}
          {deg}
        </b>
      </h4>
      <h3 className="temperature__day_range">
        <span className="temperature__day_range__hi">
          High:{' '}
          <b>
            {temp_max}
            {deg}
          </b>
        </span>
        <span className="temperature__day_range__lo">
          Low:{' '}
          <b>
            {temp_min}
            {deg}
          </b>
        </span>
      </h3>
    </div>
  );
};
