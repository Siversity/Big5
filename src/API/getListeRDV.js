import { url } from "./Constantes";
import { idPatient } from "./Constantes";
import axios from "axios";

export function getListeRDV() {
    return axios({
        method: 'GET',
        url: url + "api/appointment?participant.actor.identifier.value=" + idPatient
    }).then(response => {
       return response.data;
    });
}
