import React from "react";
import {getPatient} from "./../../API/getPatient";


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
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">Nom :    {this.state.patient.name[0].family}</li>
                        <li class="list-group-item">Prenom :  {this.state.patient.name[0].given[0]}</li>
                        <li class="list-group-item">Genre :    {this.state.patient.gender}</li>
                        <li class="list-group-item">Date de Naissance :   {this.state.patient.birthDate}</li>
                        <li class="list-group-item">Tel :     {this.state.patient.telecom[0].value}</li>
                        <li class="list-group-item">Mail :    {this.state.patient.telecom[1].value}</li>
                        <li class="list-group-item">Adresse : {this.state.patient.address[0].line[1] + ", " + this.state.patient.address[0].line[0] + " " + this.state.patient.address[0].city}</li>
                    </ul>
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