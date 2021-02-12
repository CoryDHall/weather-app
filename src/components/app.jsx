import React, { useState } from 'react';
import '../App.css';
import { usePosition } from './hooks/usePosition';
import { UnitToggle } from './UnitToggle';

import { Switch, Route } from 'react-router-dom';
import { Weather } from './Weather';
import { GetLocation } from './GetLocation';
function App({ defaultUnits }) {
  const position = usePosition();
  const [units, setUnits] = useState(defaultUnits);
  return (
    <div className="app">
      <h1>Weather</h1>
      <Switch>
        <Route exact path="/">
          <GetLocation position={position} />
        </Route>
        <Route exact path="/:lat([.\-0-9]+)/:lon([.\-0-9]+)">
      <Weather units={units} position={position} />
        </Route>
      </Switch>
      <UnitToggle current={units} setCurrent={setUnits} />
    </div>
  );
}

export default App;
