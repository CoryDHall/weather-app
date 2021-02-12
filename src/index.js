import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { BrowserRouter as Router } from 'react-router-dom';
import { DEFAULT_UNITS } from './config';

ReactDOM.render(
  <Router>
    <App defaultUnits={DEFAULT_UNITS} />
  </Router>,
  document.getElementById('root')
);
