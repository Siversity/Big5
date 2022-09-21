import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PagePrincipale from './Webpages/Main/PagePrincipale';
import BarreNavigation from './Composants/BarreNavigation';
import reportWebVitals from './reportWebVitals';
import Authentification from './Webpages/Main/Authentification';


const content = ReactDOM.createRoot(document.getElementById('contenu'));
content.render(
  <React.StrictMode>
    <Authentification />
  </React.StrictMode>
);

reportWebVitals();
