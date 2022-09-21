// Impot React
import React from 'react';

import { postPrendreRDV } from '../../API/postPrendreRDV';

import moment from 'moment/moment';
import 'moment/locale/fr';

import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid';
import {idPatient} from "../../API/Constantes";
import {afficherPagePrincipale} from "../Main/Authentification";
import { getListeRDV } from '../../API/getListeRDV';
import { afficherListeRDV} from "../Main/PagePrincipale";

moment.locale("fr");

class PagePriseRDV extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rdvs: null,
            date: "1970-01-01",
            time: 0,
            notification: false,
        }
    }

    async componentDidMount() {
        let listeRDVs = await getListeRDV();

        this.setState({
            rdvs: listeRDVs
        })
    }


    afficherRDVs() {
        let liste = []
        if (this.state.rdvs !== null) {
            this.state.rdvs.forEach(rdv => {
                liste.push(
                {title: 'RDV à venir', date: moment(rdv.start).format("YYYY-MM-DD")},
            )
            });
        }

        return liste;
    }


    // Envoi d'un RDV
    prendreRDV() {
        let dateStartFinal = this.state.date + "T" + moment(this.state.time).format("LT") + ":00Z";
        let dateEndFinal = this.state.date + "T" + moment(this.state.time).add(1800000).format("LT") + ":00Z";

        // Patient
        let patientIdentifier = new Object();
        patientIdentifier.value = idPatient;

        let patientJSON = new Object();
        patientJSON.type = "Patient";
        patientJSON.identifier = patientIdentifier;

        let patientActor = new Object();
        patientActor.actor = patientJSON;

        // Médecin
        let medecinIndentifier = new Object();
        medecinIndentifier.value = "420";

        let medecinJSON = new Object();
        medecinJSON.type = "Practitioner";
        medecinJSON.identifier = medecinIndentifier;

        let medecinActor = new Object();
        medecinActor.actor = medecinJSON;

        // JSON
        let rdvJSON = new Object();
        rdvJSON.resourceType = "Appointment";
        rdvJSON.status = "booked";
        rdvJSON.start = dateStartFinal;
        rdvJSON.end = dateEndFinal;
        rdvJSON.minutesDuration = 30;
        rdvJSON.participant = [patientActor, medecinActor];

        postPrendreRDV(JSON.stringify(rdvJSON));

    }

    validerRDV() {
        afficherPagePrincipale()
    }


    // Affichage de la sélection d'un RDV
    render() {

        let listeRDVs = this.afficherRDVs();

        return (
            <div className="container mt-4">
                <div className="row justify-content-md-center">
                    <h1>Prendre un rendez-vous <button type="button" class="btn btn-primary" onClick={() => afficherListeRDV()}>Gérer mes RDV</button> </h1>
                    {/* Calendrier */}
                    <div className="col border rounded p-4">
                        <FullCalendar
                            plugins={[interactionPlugin, dayGridPlugin]}
                            initialView="dayGridMonth"
                            validRange={{
                                start: moment(Date.now()).format("YYYY-MM-DD"),
                                end: null,
                            }}
                            events={listeRDVs}
                            selectable={true}
                            dateClick={(info) => (this.setState({ date: info.dateStr }))}
                        />
                    </div>

                    {/* Prise de RDV */}
                    <div className="col-md-auto border rounded p-4">
                        <h5>Date sélectionnée :</h5>
                        <p>{this.state.date}</p>
                        <hr />
                        <h5>Horaire sélectionné :</h5>
                        <input type="time" name="time" min="08:00" max="17:30" required onInput={(e) => (this.setState({ time: moment(e.target.value, "hh:mm".valueOf()) }))}></input>
                        <p>Rendez-vous de {moment(this.state.time).format("LT")} à {moment(this.state.time).add(1800000).format("LT")}</p>
                        <hr />
                        <button type="button" class="btn btn-primary" onClick={() => this.prendreRDV()} data-bs-toggle="modal" data-bs-target="#validation">Confirmer ce rendez-vous</button>
                    </div>
                </div>

                {/* Modal */}
                <div class="modal fade" id="validation" tabindex="-1" aria-labelledby="validationModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="validationModal">Validation du RDV</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Rendez-vous validé pour le {moment(this.state.date).format("DD/MM/YYYY")} de {moment(this.state.time).format("LT")} à {moment(this.state.time).add(1800000).format("LT")} !
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onClick={() => this.validerRDV()} data-bs-dismiss="modal" aria-label="Close">Retourner à l'écran principal</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default PagePriseRDV;