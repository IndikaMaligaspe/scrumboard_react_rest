import React , {Component } from 'react';
import { PropertyGet } from '../../containers/Common/Properties';
import {SprintCardList} from '../../components/SprintCard/SprintCard';
import {SprintCardAdd} from '../../components/SprintCard/SprintCardAdd';
import { withRouter } from 'react-router-dom';



class SprintList extends Component{
    state = {
        token:'',
        sprintURL: '',
        sprints: [],
        show: false,
    }

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSprintAddClose = this.handleSprintAddClose.bind(this);
        this.handleSprintDelete = this.handleSprintDelete.bind(this);
        this.handleSprintSave = this.handleSprintSave.bind(this);
    }

    handleSprintAddClose(){
        this.setState({"show":false});       
    }

    handleSprintDelete(){
        this.setState({"show":false});       
    }

    handleSprintSave(){
        this.setState({"show":false});       
    }

    handleClick(path, id){
        if ((parseInt(id)===2) && (!path)){
            console.log("Add a Sprint")
            this.setState({"show":true});
        }else if(path){
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
        .then(json => {
            console.log(this.props.id);
            let sprints = json;  
            if(parseInt(this.props.id)===2){
                console.log("Pushing empty elem");
                sprints.push({"id":0,"name":"", description:"[+] Add a Sprint"});
            }
            console.log(sprints);
            this.setState({ sprints: sprints})
        })
        .catch(e=>{
            console.log(e.message)
        });        
    }

    render(){
        const sprints = this.state.sprints;
        const show = this.state.show;
        console.log(this.state.show);
        return (
            <React.Fragment>
                {sprints !== null &&
                   <SprintCardList 
                        sprintList={sprints} 
                        title={this.props.title} 
                        clickOnCard={this.handleClick} 
                        id={this.props.id}>
                   </SprintCardList>
                }
                {
                    this.state.show &&
                    <SprintCardAdd 
                        show={show} 
                        handleSprintSave={this.handleSprintSave}
                        handleSprintDelete={this.handleSprintDelete}
                        handleSprintAddClose={this.handleSprintAddClose}>
                    </SprintCardAdd>
                }
            </React.Fragment>
        )
    }
}

export default withRouter(SprintList);