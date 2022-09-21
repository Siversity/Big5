// Impot React
import { startOfDay } from '@fullcalendar/react';
import React from 'react';

import { getListeRDV } from '../../API/getListeRDV';
import moment from 'moment/moment';
import 'moment/locale/fr';

moment.locale("fr");


class PageListeResultats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rdvs: null,
            resultats: null,
        };
    }

    async componentDidMount() {
        let listeRDV = await getListeRDV();

        this.setState({
            rdvs: listeRDV
        })
    }

    displayRDVs() {
        let liste = [];

        this.state.rdvs.forEach(rdv => {
            liste.push(
                <li className="list-group-item">{moment(rdv.start).format("DD/MM/YYYY") + "  "}
                    <button type="button" class="btn btn-primary btn-sm">Afficher >>></button>
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
                                    <p class="card-text">Ici les résultats</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PageListeResultats;