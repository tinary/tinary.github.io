import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './pages/App';

import './css/main.scss';

ReactGA.initialize('UA-000000-01');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
