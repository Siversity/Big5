// Impot React
import { startOfDay } from '@fullcalendar/react';
import React from 'react';

import { getListeRDV } from '../../API/getListeRDV';
import moment from 'moment/moment';
import 'moment/locale/fr';
import { getResultat } from '../../API/getResultat';

moment.locale("fr");


class PageListeResultats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rdvs: null,
            resultat: "",
        };
    }

    async componentDidMount() {
        let listeRDV = await getListeRDV();

        this.setState({
            rdvs: listeRDV
        })
    }

    async afficherResultat(idRDV) {
        let newResultat = await getResultat(idRDV);
        this.setState({
            resultat: newResultat[0]
        });
    }

    displayRDVs() {
        let liste = [];

        this.state.rdvs.forEach(rdv => {
            liste.push(
                <li className="list-group-item">{moment(rdv.start).format("DD/MM/YYYY") + "  "}
                    <button type="button" class="btn btn-primary btn-sm" onClick={() => this.afficherResultat(rdv.id)}>Résultats >>></button>
                </li>
            )
        });

        return liste;
    }


    render() {

        let listeRDVs;
        if (this.state.rdvs !== null) {
            listeRDVs = this.displayRDVs();
        }

        let results = "";
        if (this.state.resultat !== null && this.state.resultat !== undefined && this.state.resultat !== "") {

            if (this.state.resultat.performer[0].diplay !== null) {
                results = (
                    <>
                        <h6>RDV du {moment(this.state.resultat.effectiveDateTime).format("DD/MM/YYYY")} à {moment(this.state.resultat.effectiveDateTime).format("HH:MM")}</h6>
                        <p><strong>Médecin : </strong> {this.state.resultat.performer[0].display}</p>
                        <p><strong>Observations : </strong>{this.state.resultat.conclusion}</p>
                    </>);
            }


        }
        if (this.state.resultat == "") {
            results = "Sélectionnez un RDV passé"
        }
        if (this.state.resultat == null || this.state.resultat == undefined) {
            results = "Le RDV est à venir ou les résultats n'ont pas encore été publiés"
        }



        return (
            <div class="container-fluid">
                <div class="text-center ">
                    <h1>Mes résultats d'analyse</h1>
                </div>
                <div className='row'>
                    <div className='col-md-auto'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Liste des résultats</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                {listeRDVs}
                            </ul>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Résultats</h5>
                                {results}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PageListeResultats;