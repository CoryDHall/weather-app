import React, { useState } from 'react';
import '../App.css';
import { usePosition } from './hooks/usePosition';
import { UnitToggle } from './UnitToggle';

import { Weather } from './Weather';
function App() {
  const position = usePosition();
  const [units, setUnits] = useState('imperial');
  return (
    <div className="app">
      <h1>Weather</h1>
      <Weather units={units} position={position} />
      <UnitToggle current={units} setCurrent={setUnits} />
    </div>
  );
}

export default App;
