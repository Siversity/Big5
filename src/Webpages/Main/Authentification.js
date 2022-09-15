import React from 'react';
import ReactDOM from 'react-dom/client';

import './Authentification.css';

import PagePrincipale from "./PagePrincipale";

function Authentification() {

    return(
        <div className="container-fluid justify-content-center w-100 h-100 text-center m-4 p-4">
            <button type="button" class="btn btn-primary auth" onClick={() => afficherPagePrincipale()}>Se connecter</button>
        </div>
    )
}

export default Authentification;


// Navigation
function afficherPagePrincipale() {
    // Balise d'affichage
    let contenu = null;
    contenu = ReactDOM.createRoot(
        document.getElementById('contenu')
    );

  // Réactualisation de l'affichage
  contenu.render(
    // Sélection du noeud
      <React.StrictMode>
          {/* Composant affichés */}
          <PagePrincipale/>
      </React.StrictMode>
  );
}