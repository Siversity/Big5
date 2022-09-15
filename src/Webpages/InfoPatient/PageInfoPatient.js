import React from "react";
import {getPatient} from "./../../API/getPatient";


class PageInfoPatient extends React.Component {
    
    constructor (props){
        super(props);
        this.state = {
            patient : undefined
        };
    }

    async componentDidMount(){
        let p = await getPatient();
        this.setState({
            patient : p
        });
        console.log(p);
    }

    
    render() {
        if(patient !== undefined){
            return(
                <ul class="list-group">
                    <li class="list-group-item">Nom{this.state.patient.id}</li>
                    <li class="list-group-item">Prenom </li>
                    <li class="list-group-item">Tel</li>
                    <li class="list-group-item">Mail</li>
                    <li class="list-group-item">Adresse</li>
                </ul>
                
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