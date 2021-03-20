import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes/index';
import history from './services/history';

import './styles/global.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
