import React from 'react';
import ReactDOM from 'react-dom/client';

import './Authentification.css';

import PagePrincipale from "./PagePrincipale";
import BarreNavigation from "./../../Composants/BarreNavigation";

function Authentification() {

    return (
        <div className="container-fluid justify-content-center w-100 h-100 text-center m-4 p-4">
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="form-group mt-3">
                        <label>Identifiant</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            defaultValue="sylvie.vartan@gmail.com"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            defaultValue="***************"
                            placeholder="Enter password"
                        />
                    </div>
                </form>
            </div>
            <button type="button" className="btn btn-primary auth" onClick={() => afficherPagePrincipale()}>Se
                connecter
            </button>

        </div>
    )
}

export default Authentification;


// Navigation
export function afficherPagePrincipale() {
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
            <PagePrincipale />
        </React.StrictMode>
    );

    // Balise d'affichage
    let navbar = null;
    navbar = ReactDOM.createRoot(
        document.getElementById('navigation')
    );

    navbar.render(
        <React.StrictMode>
            <BarreNavigation />
        </React.StrictMode>
    );
}