import React, {useState, useEffect} from 'react'
import "./BarreNavigation.css"


const Navbar = () => (
    <nav className="navbar">
        {/* Permet de revenir à la page d'accueil...à finaliser avec le href */}
        <btn className="btn" href="PagePrincipale.js">
            <h1>Big Five : bio results </h1>
        </btn>
        <ul className="navbar--link">
            <btn className="btn">Mon profil</btn>
        </ul>
    </nav>
)
export default Navbar
