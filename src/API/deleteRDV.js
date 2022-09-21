import { url } from "./Constantes";
import axios from "axios";

export async function deleteRDV(idRDV) {
    return axios({
        method: 'DELETE',
        url: url + "api/appointment/" + idRDV
    }).then(response => {
       return response.data;
    });
}