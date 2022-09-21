import React from "react";
import ReactDOM from 'react-dom/client';
import {getPatient} from "./../../API/getPatient";
import Authentification from '../Main/Authentification';
import moment from 'moment/moment';
import 'moment/locale/fr';
import { putPatient } from "../../API/putPatient";
moment.locale("fr");

class PageInfoPatient extends React.Component {
    
    constructor (props){
        super(props);
        this.state = {
            patient : null
        };
    }

    async componentDidMount(){
        let p = await getPatient();
        this.setState({
            patient : p
        });
    }

    
    render() {
        if(this.state.patient !== null){
            return(
                <div class="container-fluid">
                    <div class="text-center ">
                        <h1>Mes informations</h1>
                        <br/>
                    </div>
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td><strong>Nom :</strong></td>
                                <td>{this.state.patient.name[0].family}</td>
                            </tr>
                            <tr>
                                <td><strong>Prénom :</strong></td>
                                <td>{this.state.patient.name[0].given[0]}</td>
                            </tr>
                            <tr>
                                <td><strong>Genre :</strong></td>
                                <td>{this.state.patient.gender}</td>
                            </tr>
                            <tr>
                                <td><strong>Date de naissance :</strong></td>
                                <td>{moment(this.state.patient.birthDate).format("DD/MM/YYYY")}</td>
                            </tr>
                            <tr>
                                <td><strong>Numéro de téléphone :</strong></td>
                                <td><input type="text" id="tel" class="form-control" placeholder={this.state.patient.telecom[0].value}/></td>
                            </tr>
                            <tr>
                                <td><strong>Mail :</strong></td>
                                <td><input type="text" id="mail" class="form-control" placeholder={this.state.patient.telecom[1].value}/></td>
                            </tr>
                            <tr>
                                <td><strong>Adresse :</strong></td>
                                <td><input type="text" id="adr" class="form-control" placeholder={this.state.patient.address[0].line[1] + " " + this.state.patient.address[0].line[0] + ", " + this.state.patient.address[0].city}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <div class="text-center">
                        <div class="row align-items-start">
                            <div class="col">
                                <button type="button" class="btn btn-danger" onClick={() => afficherPageConnexion()}>Déconnexion <i class="bi bi-box-arrow-right"></i></button>
                            </div>
                            <div class="col">
                                <button type="button" class="btn btn-success" onClick={() => majPatient()}>Mettre à jour <i class="bi bi-arrow-counterclockwise"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
        
    }
    
}

export default PageInfoPatient;

// Navigation functions
function afficherPageConnexion() {

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
            <Authentification/>
        </React.StrictMode>
    );
  }



    // Envoi d'un RDV
function majPatient() {
        

    }