
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

      <App />

  </React.StrictMode>
);