// Impot React
import React from 'react';
import ReactDOM from 'react-dom/client';
import PageListeRDV from '../ListeRDV/PageListeRDV';
import PageListeResultats from '../ListeResultats/PageListeResultats';
import PagePriseRDV from '../PriseRDV/PagePriseRDV';

// Import CSS
import './PagePrincipale.css';


// Page principale
function PagePrincipale() {
  return (
    <div class container-fluid>
      <h1 class="text-center">Bienvenue</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-4 m-4">
        {/* Liste des résultats */}
        <div class="col">
          <div class="card cardPP h-100 border-0">
              <div class="card-body">
                <button class="btn btn-primary h-100 w-100 fs-3 fw-bold" type="submit" onClick={() => afficherListeResutats()}>
                <i class="bi bi-ui-checks"></i>
                <br/>
                Consulter mes résultats d'analyse</button>
              </div>
          </div>
        </div>

        {/* Prise de RDV */}
        <div class="col">
        <div class="card cardPP h-100 border-0">
              <div class="card-body">
                <button class="btn btn-primary h-100 w-100 fs-3 fw-bold" type="submit" onClick={() => afficherPriseRDV()}>
                  
                  <i class="bi bi-calendar-date"></i>
                  <br/>
                  Prendre un rendez-vous</button>
                
              </div>
          </div>
        </div>

        {/*!-- Liste des RDV */}
        <div class="col">
        <div class="card cardPP h-100 border-0">
              <div class="card-body">
                <button class="btn btn-primary h-100 w-100 fs-3 fw-bold" type="submit" onClick={() => afficherListeRDV()}>
                <i class="bi bi-calendar3"></i>
                <br/>
                Gérer mes prochains rendez-vous</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagePrincipale;


// Navigation functions
function afficherListeResutats() {

  // Balise d'affichage
  let content = null;
  content = ReactDOM.createRoot(
      document.getElementById('contenu')
  );

  // Réactualisation de l'affichage
  content.render(
    // Sélection du noeud
      <React.StrictMode>
          {/* Composant affichés */}
          <PageListeResultats/>
      </React.StrictMode>
  );
}


export function afficherListeRDV() {

  // Balise d'affichage
  let content = null;
  content = ReactDOM.createRoot(
      document.getElementById('contenu')
  );

  // Réactualisation de l'affichage
  content.render(
    // Sélection du noeud
      <React.StrictMode>
          {/* Composant affichés */}
          <PageListeRDV/>
      </React.StrictMode>
  );
}


function afficherPriseRDV() {

  // Balise d'affichage
  let content = null;
  content = ReactDOM.createRoot(
      document.getElementById('contenu')
  );

  // Réactualisation de l'affichage
  content.render(
    // Sélection du noeud
      <React.StrictMode>
          {/* Composant affichés */}
          <PagePriseRDV/>
      </React.StrictMode>
  );
}