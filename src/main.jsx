import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import Stylesheet Global
import './syles/VismayaKriya/variables.css';
import './syles/VismayaKriya/base.css';
import './syles/VismayaKriya/layout.css';
import './syles/VismayaKriya/components.css';
import './syles/VismayaKriya/animations.css';
import './syles/VismayaKriya/responsive.css';

// Menjalankan App ke dalam HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);