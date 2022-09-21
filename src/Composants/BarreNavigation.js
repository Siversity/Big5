import React from 'react'
import ReactDOM from 'react-dom/client';
import './BarreNavigation.css'
import PageInfoPatient from '../Webpages/InfoPatient/PageInfoPatient'
import pagePrincipale from "../Webpages/Main/PagePrincipale";
import PagePrincipale from "../Webpages/Main/PagePrincipale";


const Navbar = () => (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a className="navbar-brand" href="#" onClick={() => afficherPagePrincipale()}><img className="imagelogo" src="https://cdn-icons-png.flaticon.com/512/2784/2784065.png" alt="React Logo" />Big 5</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" onClick={() => afficherInfoPatient()}>
                        <i class="col-4 bi bi-person-circle"></i> Mon profil</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Navbar


// Navigation functions
function afficherInfoPatient() {

    console.log("Afficher IP")

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
            <PageInfoPatient/>
        </React.StrictMode>
    );
  }

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