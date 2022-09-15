import { url } from "./Constantes";
import { idPatient } from "./Constantes";

export function getPatient() {
    return axios({
        method: 'GET',
        url: url + "/api/patient/"+idPatient
    }).then(response => {
       return response.data;
    });
}
