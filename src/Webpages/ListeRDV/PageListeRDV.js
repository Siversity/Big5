import React from "react";
import ReactDOM from 'react-dom/client';
import {getListeRDV} from "./../../API/getListeRDV";
import moment from 'moment/moment';
import 'moment/locale/fr';
import PagePriseRDV from "../PriseRDV/PagePriseRDV";
moment.locale("fr");


class PageListeRDV extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rdvs: null
        };
    }

    async componentDidMount() {
        let r = await getListeRDV();

        this.setState({
            rdvs: r
        });
    }

    render() {
        if (this.state.rdvs !== null) {
            let current = new Date();
            let date = `${current.getFullYear()}-${(current.getMonth() + 1).toString().padStart(2, "0")}-${current.getDate()}T00:00:00Z`;
            let dates = [];
            console.log("ok");
            this.state.rdvs.forEach(rdv => {
                if (rdv.start >= date) {
                    let formatDate = moment(rdv.start).format("DD/MM/YYYY");
                    let formatHeure = moment(rdv.start).format("HH:mm");
                    dates.push(<li class="list-group-item"><strong>{formatDate} à {formatHeure} </strong> : Analyse Hématologique</li>);
                }
            });

            return(
                <div class="container-fluid text-center">
                    <h1>Mes rendez-vous à venir <div><br/></div></h1>
                    <ul class="list-group" p-1>
                        {dates}
                    </ul>
                    <br/>
                    <button type="button" class="btn btn-primary" onClick={() => afficherPriseRDV()}>Prendre un nouveau rendez-vous</button>
                </div>
                    
            );
        }
        else {
            return (<div></div>)
        }
    }

}

export default PageListeRDV;

// Navigation functions
function afficherPriseRDV() {

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
            <PagePriseRDV/>
        </React.StrictMode>
    );
  }