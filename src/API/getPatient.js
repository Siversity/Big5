import { url } from "./Constantes";
import { idPatient } from "./Constantes";
import axios from "axios";

export function getPatient() {
    return axios({
        method: 'GET',
        url: url + "api/patient/" + idPatient
    }).then(response => {
       return response.data;
    });
}
