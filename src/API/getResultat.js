import { idPatient, url } from "./Constantes";
import axios from "axios";

export function getResultat(idRDV) {
    return axios({
        method: 'GET',
        url: url + "api/diagnostic-report?code.text=" + idRDV,
    }).then(response => {
       return response.data;
    });
}