import { idPatient, url } from "./Constantes";
import axios from "axios";
import moment from "moment";

export function getResultat(start) {
    return axios({
        method: 'GET',
        url: url + "api/diagnostic-report?subject.reference=" + idPatient,
    }).then(response => {

        let currentDate = moment(start).format("DD/MM/YYYY");
        let i;
        let status = false;

        response.data.forEach(report => {

            if (moment(report.effectiveDateTime).format("DD/MM/YYYY") == currentDate && status == false) {
                status = true;
                i = report;

            }
        });

        console.log(i)

        return i;

    });
}