// Impot React
import React from 'react';
import ReactDOM from 'react-dom/client';
import PageListeRDV from '../ListeRDV/PageListeRDV';
import PageListeResultats from '../ListeResultats/PageListeResultats';

// Import CSS
import './PagePrincipale.css';


// Page principale
function PagePrincipale() {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 p-4 m-4">

      {/* Liste des résultats */}
      <div class="col">
        <div class="card h-100 border-0">
            <div class="card-body">
              <button class="btn btn-primary h-100 w-100 fs-3 fw-bold" type="submit" onClick={() => afficherListeResutats()}>Afficher la liste des résultats</button>
            </div>
        </div>
      </div>

      {/* Prise de RDV */}
      <div class="col">
      <div class="card h-100 border-0">
            <div class="card-body">
              <button class="btn btn-primary h-100 w-100 fs-3 fw-bold" type="submit">Prendre un RDV</button>
            </div>
        </div>
      </div>

      {/*!-- Liste des RDV */}
      <div class="col">
      <div class="card h-100 border-0">
            <div class="card-body">
              <button class="btn btn-primary h-100 w-100 fs-3 fw-bold" type="submit" onClick={() => afficherListeRDV()}>Afficher la liste des RDV</button>
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


function afficherListeRDV() {

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