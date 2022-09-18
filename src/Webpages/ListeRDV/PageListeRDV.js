import React from "react";
import {getListeRDV} from "./../../API/getListeRDV";

class PageListeRDV extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            rdvs : null
        };
    }
    
    async componentDidMount(){
        let r = await getListeRDV();
        this.setState({
            rdvs: r
        });
    }

    render(){
        if(this.state.rdvs !== null){
            const current = new Date(); 
            const date = `${current.getFullYear()}-${(current.getMonth()+1).toString().padStart(2,"0")}-${current.getDate()}T00:00:00Z`;
            return(
                    <ul class="list-group">
                        {this.state.rdvs.forEach(rdv =>{
                            if(rdv.start >= date){
                                console.log(rdv.start);
                                <li class="list-group-item">{rdv.start}</li>
                            }
                        })}
                    </ul>
            );
        }
        else{
            return(<div></div>)
        }
    }
    
}

export default PageListeRDV;