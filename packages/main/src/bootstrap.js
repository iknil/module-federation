import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// const Docker = React.lazy(() => import('@docker/Entry'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
