// Impot React
import React from 'react';

import { postPrendreRDV } from '../../API/postPrendreRDV';

import moment from 'moment/moment';
import 'moment/locale/fr';

import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid';

moment.locale("fr");

class PagePriseRDV extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: "1970-01-01",
            time: 0,
            notification: false,
        }
    }


    // Envoi d'un RDV
    prendreRDV() {
        let dateStartFinal = this.state.date + "T" + moment(this.state.time).format("LT") + ":00Z";
        let dateEndFinal = this.state.date + "T" + moment(this.state.time).add(1800000).format("LT") + ":00Z";

        // Patient
        let patientIdentifier = new Object();
        patientIdentifier.value = "6322e3bf76c6f7001a59728d";

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

        this.afficherNotification();
    }


    afficherNotification() {

    }


    // Affichage de la sélection d'un RDV
    render() {

        return (
            <div className="container mt-4">
                <div className="row justify-content-md-center">

                    {/* Calendrier */}
                    <div className="col border rounded p-4">
                        <FullCalendar
                            plugins={[interactionPlugin, dayGridPlugin]}
                            initialView="dayGridMonth"
                            validRange={{
                                start: '2022-09-15',
                                end: null,
                            }}
                            selectable={true}
                            dateClick={(info) => (console.log(info.date), this.setState({ date: info.dateStr }))}
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
                        <button type="button" class="btn btn-primary" onClick={() => this.prendreRDV()}>Prendre RDV</button>
                    </div>
                </div>

                {/* Toast */}
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                            <strong class="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                </div>


            </div>
        );
    }
}

export default PagePriseRDV;