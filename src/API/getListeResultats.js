import { url } from "./Constantes";

export function getListeResultats() {
    return axios({
        method: 'GET',
        url: url + "/api/appointment/"
    }).then(response => {
       return response.data;
    });
}