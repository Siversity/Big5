import { url } from "./Constantes";
import axios from "axios";

export function postPrendreRDV(objectJSON) {

    return axios({
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        url: url + "api/appointment/",
        data: objectJSON,
    }).then(response => {
       return response.data;
    });
    
}