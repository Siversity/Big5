import React, {useState, useEffect} from 'react'
import './BarreNavigation.css'


const Navbar = () => (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a className="navbar-brand" href="#">Big 5 : bio results</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Mon profil</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Navbar
