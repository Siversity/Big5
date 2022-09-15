import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PagePrincipale from './Webpages/Main/PagePrincipale';
import BarreNavigation from './Composants/BarreNavigation';
import reportWebVitals from './reportWebVitals';


const navbar = ReactDOM.createRoot(document.getElementById('navigation'));
navbar.render(
  <React.StrictMode>
    <BarreNavigation />
  </React.StrictMode>
);

const content = ReactDOM.createRoot(document.getElementById('contenu'));
content.render(
  <React.StrictMode>
    <PagePrincipale />
  </React.StrictMode>
);

reportWebVitals();
