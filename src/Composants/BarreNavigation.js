import React from 'react'
import ReactDOM from 'react-dom/client';
import './BarreNavigation.css'
import PageInfoPatient from '../Webpages/InfoPatient/PageInfoPatient'


const Navbar = () => (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a className="navbar-brand" href="#">Big 5 : bio results</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" onClick={() => afficherInfoPatient()}>Mon profil</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Navbar


// Navigation functions
function afficherInfoPatient() {

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