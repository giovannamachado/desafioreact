import React from 'react';
import ReactDOM from 'react-dom';
import AppReact from './App.jsx';
import './index.css';

// Renderizar o componente React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppReact />
  </React.StrictMode>,
);