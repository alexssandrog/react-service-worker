import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { useServiceWorker } from './context/ServiceWorkerContext';
import useInterval from './hooks/useInterval';
import logo from './logo.svg';
import './App.css';

function App() {
  const [timeout, setTimeout] = useState(1000);
  const { assetsUpdateReady, updateAssets } = useServiceWorker();

  useInterval(() => {
    if (assetsUpdateReady) {
      setTimeout(null);
      const toastrOptions = {
        type: 'info',
        onClick: () => updateAssets(),
        closeOnClick: true // false by default, this will close the toastr when user clicks on it
      };
      toast(
        'Há uma nova versão do TPag disponível! Clique neste aviso para atualizar.',
        toastrOptions
      );
    }
  }, timeout);

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
