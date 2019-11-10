import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ServiceWorkerProvider } from './context/ServiceWorkerContext';

ReactDOM.render(
  <ServiceWorkerProvider>
    <App />
  </ServiceWorkerProvider>,
  document.getElementById('root')
);
