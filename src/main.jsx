import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Note le .jsx ici, important pour Vite
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);