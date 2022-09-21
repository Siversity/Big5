import { url } from "./Constantes";
import { idPatient } from "./Constantes";
import axios from "axios";


export async function putPatient(objectJSON) {
    return axios({
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        url: url + "api/patient/" + idPatient + "/",
        data: objectJSON,
    }).then(response => {
       return response.data;
    });
}