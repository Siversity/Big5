import React from "react";
import {getListeRDV} from "./../../API/getListeRDV";
import moment from 'moment/moment';
import 'moment/locale/fr';
moment.locale("fr");


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
            let current = new Date(); 
            let date = `${current.getFullYear()}-${(current.getMonth()+1).toString().padStart(2,"0")}-${current.getDate()}T00:00:00Z`;
            let dates = [];
            console.log("ok");
            this.state.rdvs.forEach(rdv =>{
                if(rdv.start >= date){
                    let format = moment(rdv.start).format("DD/MM/YYYY");
                    dates.push(<li class="list-group-item"><tr>{format}</tr><tr>Analyse Hématologique</tr></li>);
                }
            });

            return(
                    <ul class="list-group">
                        {dates}
                    </ul>
            );
        }
        else{
            return(<div></div>)
        }
    }
    
}

export default PageListeRDV;