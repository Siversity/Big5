import { idPatient, url } from "./Constantes";

export function getListeResultats() {
    return axios({
        method: 'GET',
        url: url + "/api/diagnostic-report?subject.reference=" + idPatient,
    }).then(response => {
       return response.data;
    });
}