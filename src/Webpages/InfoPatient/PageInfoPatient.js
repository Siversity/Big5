import React from "react";
import ReactDOM from 'react-dom/client';
import {getPatient} from "./../../API/getPatient";
import { putPatient } from "../../API/putPatient";
import Authentification from '../Main/Authentification';

import moment from 'moment/moment';
import 'moment/locale/fr';

moment.locale("fr");

class PageInfoPatient extends React.Component {
    
    constructor (props){
        super(props);
        this.state = {
            patient : null,
            inputTel : "",
            inputEmail : "",
            inputVoie : "",
            inputVille : ""
        };
    }

    async componentDidMount(){
        let p = await getPatient();
        this.setState({
            patient : p,
            inputTel : p.telecom[0].value,
            inputEmail : p.telecom[1].value,
            inputVoie : p.address[0].line[0],
            inputVille : p.address[0].city
        });
    }


    majPatient() {
    
        let name = new Object();
        name.use = "official";
        name.family = this.state.patient.name[0].family; 
        name.given = [this.state.patient.name[0].given[0]];
    
        let phone = new Object();
        phone.system = "phone";
        phone.value = this.state.inputTel;
        phone.use = "mobile";
    
        let email = new Object();
        email.system = "email";
        email.value = this.state.inputEmail;
        email.use = "home";
    
        let adresse = new Object();
        adresse.use = "home"
        adresse.line = [this.state.inputVoie];
        adresse.city = this.state.inputVille;
        adresse.country = "France";
    
        let patientJSON = new Object();
        patientJSON.resourceType = "Patient";
        patientJSON.id = this.state.patient.id;
        patientJSON.active = new Boolean(true);
        patientJSON.name = [name];
        patientJSON.telecom = [phone, email]
        patientJSON.gender = this.state.patient.gender;
        patientJSON.birthDate = this.state.patient.birthDate;
        patientJSON.address = [adresse];    
        putPatient(JSON.stringify(patientJSON));
    
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
                                <td><input type="text" id="tel" class="form-control" value={this.state.inputTel} onChange={e => this.setState({inputTel: e.target.value})}/></td>
                            </tr>
                            <tr>
                                <td><strong>Mail :</strong></td>
                                <td><input type="text" id="mail" class="form-control" value={this.state.inputEmail} onChange={e => this.setState({inputEmail: e.target.value})}/></td>
                            </tr>
                            <tr>
                                <td><strong>Voie :</strong></td>
                                <td><input type="text" id="adr" class="form-control" value={this.state.inputVoie} onChange={e => this.setState({inputVoie: e.target.value})}/></td>
                            </tr>
                            <tr>
                                <td><strong>Ville :</strong></td>
                                <td><input type="text" id="adr" class="form-control" value={this.state.inputVille} onChange={e => this.setState({inputVille: e.target.value})}/></td>
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
                                <button type="button" class="btn btn-success" onClick={() => this.majPatient()} data-bs-toggle="modal" data-bs-target="#modification">Mettre à jour <i class="bi bi-arrow-counterclockwise"></i></button>
                            </div>
                        </div>
                    </div>
                    {/* Modal */}
                    <div class="modal fade" id="modification" tabindex="-1" aria-labelledby="modificationModal" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modificationModal">Modification des infos</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Les modifications ont bien été prises en compte !
                                </div>
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
function afficherPageConnexion(){

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




