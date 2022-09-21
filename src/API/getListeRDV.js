import { url } from "./Constantes";
import { idPatient } from "./Constantes";
import axios from "axios";

import moment from 'moment/moment';
import 'moment/locale/fr';
moment.locale("fr");

export function getListeRDV() {
    return axios({
        method: 'GET',
        url: url + "api/appointment?participant.actor.identifier.value=" + idPatient
    }).then(response => {
        let liste = response.data.sort((a, b) => {
            a = new Date(a.start);
            b = new Date(b.start);
            var results = a > b ? -1 : a < b ? 1 : 0;
            return results * -1;
        });
        return liste;
    });
}
