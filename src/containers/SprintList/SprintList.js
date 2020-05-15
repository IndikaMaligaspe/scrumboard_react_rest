import React , {Component } from 'react';
import { PropertyGet } from '../../containers/Common/Properties';
import {SprintCardList} from '../../components/SprintCard/SprintCard';
import { withRouter } from 'react-router-dom';



class SprintList extends Component{
    state = {
        token:'',
        sprintURL: '',
        sprints: [],
    }

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(path, id){
        if(path){
            this.props.history.push(path);            
        }
        
    }

    componentDidMount() {
        const url = PropertyGet ({key:"sprintAPIURL"})
        const token = localStorage.getItem('token')
        fetch(url, {
            method: 'GET',
            headers:{'Content-Type': 'application/json', 
            'Authorization':'Token '+token
            }
        }).then((response)=> response.json())
        .then(json => this.setState({ sprints: json}))
        .catch(e=>{
            console.log(e.message)
        });        
    }

    render(){
        const sprints = this.state.sprints
        return (
            <div>
                {sprints !== null &&
                   <SprintCardList sprintList={sprints} title={this.props.title} clickOnCard={this.handleClick}></SprintCardList>
                }
            </div>
        )
    }
}

export default withRouter(SprintList);