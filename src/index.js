import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './Webpages/Main/MainPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

reportWebVitals();
