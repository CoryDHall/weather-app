import React, { useCallback } from 'react';
import './UnitToggle.css';
export const UnitToggle = ({ current, setCurrent }) => {
  const setCelsius = useCallback(() => setCurrent('metric'), [setCurrent]);
  const setFahrenheit = useCallback(() => setCurrent('imperial'), [setCurrent]);
  const isCelsius = current === 'metric';
  const isFahrenheit = current === 'imperial';

  return (
    <ul className="unit_toggle">
      <li
        onClick={setCelsius}
        className={`unit_toggle__option ${isCelsius ? 'selected' : ''}`}
      >
        Celsius
      </li>
      <li
        onClick={setFahrenheit}
        className={`unit_toggle__option ${isFahrenheit ? 'selected' : ''}`}
      >
        Fahrenheit
      </li>
    </ul>
  );
};
