import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';


function PageInfoPatient() {
    
     

    return(
        <ul class="list-group">
            <li class="list-group-item">Nom     </li>
            <li class="list-group-item">Prenom </li>
            <li class="list-group-item">Tel</li>
            <li class="list-group-item">Mail</li>
            <li class="list-group-item">Adresse</li>
        </ul>
        
    );
}

export default PageInfoPatient;