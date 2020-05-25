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
        sprint:{
            "name": null,
            "description": null,
            "end":null,
        },
        show: false,
    }

    constructor(props){
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
        this.handleSprintAddClose = this.handleSprintAddClose.bind(this);
        this.handleSprintDelete = this.handleSprintDelete.bind(this);
        this.handleSprintSave = this.handleSprintSave.bind(this);
        this.handleNewSprintData = this.handleNewSprintData.bind(this);
    }
    
    init(){
        let sprint = {
            "name": null,
            "description": null,
            "end":null,
        }; 
        this.setState({"sprint":sprint});
    }

    handleNewSprintData(target, value){
        let sprint = this.state.sprint;
        switch (target) {
            case 1: sprint.name = value;break;
            case 2: sprint.description = value;break;
            case 3: sprint.end = value;break;
            default:
                break;
        }
        this.setState({"sprint":sprint});
    }

    handleSprintAddClose(){
        this.setState({"show":false});       
    }

    handleSprintDelete(){
        this.setState({"show":false});  
        this.init();     
    }

    handleSprintSave(){
        let data = this.state.sprint
        let token = localStorage.getItem('token')
        console.log(data);
        
        if((data.name) && (data.description) && (data.end)){
            if(token){    
                let sprintAPIURL = PropertyGet({key:"sprintAPIURL"});
                fetch(sprintAPIURL,
                    {method: "POST",
                    headers: {  'Content-Type': 'application/json', 
                                'Authorization':'Token '+token
                            },
                            body: JSON.stringify(data),  
                    })
                    .then((response)=>{
                        console.log(response);
                        window.location.reload(false);
                    })
                    .catch((e)=>{console.log(e.message);
                });
            }
        }
        this.setState({"show":false});      
        this.init();
    }

    handleClick(path, id){
        if ((parseInt(id)===2) && (!path)){
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
                sprints.push({"id":0,"name":"", description:"[+] Add a Sprint"});
            }
            this.setState({ sprints: sprints})
        })
        .catch(e=>{
            console.log(e.message)
        });        
    }

    render(){
        const sprints = this.state.sprints;
        const show = this.state.show;
        // const SPRINT_ENUM = this.state.SPRINT_ENUM;
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
                        handleSprintAddClose={this.handleSprintAddClose}
                        handleNewSprintData = {this.handleNewSprintData}
                        SPRINT_ENUM={SPRINT_ENUM}
                        >
                    </SprintCardAdd>
                }
            </React.Fragment>
        )
    }
}
export const SPRINT_ENUM = {
        "NAME" : 1,
        "DESCRIPTION":2,
        "END":3,
}

export default withRouter(SprintList);

