import React from "react";
import {getPatient} from "./../../API/getPatient";
import moment from 'moment/moment';
import 'moment/locale/fr';
moment.locale("fr");

class PageInfoPatient extends React.Component {
    
    constructor (props){
        super(props);
        this.state = {
            patient : null
        };
    }

    async componentDidMount(){
        let p = await getPatient();
        this.setState({
            patient : p
        });
    }

    
    render() {
        if(this.state.patient !== null){
            return(
                <div class="container-fluid">
                    <div class="text-center ">
                        <h1>Mes informations</h1>
                        <br/>
                    </div>
                    <div class="">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td><strong>Nom :</strong></td>
                                    <td>{this.state.patient.name[0].family}</td>
                                </tr>
                                <tr>
                                    <td><strong>Prénom :</strong></td>
                                    <td>{this.state.patient.name[0].given[0]}</td>
                                </tr>
                                <tr>
                                    <td><strong>Genre :</strong></td>
                                    <td>{this.state.patient.gender}</td>
                                </tr>
                                <tr>
                                    <td><strong>Date de naissance :</strong></td>
                                    <td>{moment(this.state.patient.birthDate).format("DD/MM/YYYY")}</td>
                                </tr>
                                <tr>
                                    <td><strong>Numéro de téléphone :</strong></td>
                                    <td>{this.state.patient.telecom[0].value}</td>
                                </tr>
                                <tr>
                                    <td><strong>Mail :</strong></td>
                                    <td>{this.state.patient.telecom[1].value}</td>
                                </tr>
                                <tr>
                                    <td><strong>Adresse :</strong></td>
                                    <td>{this.state.patient.address[0].line[1] + " " + this.state.patient.address[0].line[0] + ", " + this.state.patient.address[0].city}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
        
    }
    
}

export default PageInfoPatient;