import React , { Component } from "react";
import {PropertyGet} from '../../containers/Common/Properties';
import Tasks from '../../components/Tasks/Tasks'

class TaskList extends Component {
    state =  {
        taskName: '',
        taskDescription: '',
        taskAssignee: '',
        taskStatus: '',
        taskStart: '',
        taskDue: '',
        taskSprintId: '',
        show : false,
        task : [],
        users:[]
    }
     
    constructor(props){
        super(props);
        this.state.taskId  = props.task.id.valueOf();
        this.state.taskName = props.task.name;
        this.state.taskDescription = props.task.description;
        this.state.taskAssigned = props.task.assigned;
        this.state.taskStatus = props.task.status;
        this.state.taskStart = props.task.started;
        this.state.taskEnd = props.task.due;
        this.state.taskSprintId = props.task.sprint;
        this.state.taskCompleted = props.task.completed;
        this.state.users = props.users;
        this.state.task = props.task;  
        this.handleSave = this.handleSave.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this)
        this.updateState = this.updateState.bind(this);
        this.setSelected = this.setSelected.bind(this);
    }
    
    updateState = (attrname, value) =>{
       if ((attrname) && (value)){
            this.setState({[attrname]:value});
        }
    }


    handleSave = () => {
            this.setState({"show":false});
            this.updateTask();
    }

    handleClose = () => {
        this.setState({"show":false});
        this.setState({"taskName":this.props.task.name});
        this.setState({"taskDescription":this.props.task.description});
        this.setState({"taskAssigned":this.props.task.assigned});
        this.setState({"taskStatus":this.props.task.status});
        this.setState({"taskStart":this.props.task.started});
        this.setState({"taskEnd":this.props.task.due});
        this.setState({"taskSprintId":this.props.task.sprint});
        this.setState({"taskCompleted":this.props.task.completed});
    }

    handleShow = () => {
        this.setState({"show":true});
    }
     
    setSelected = (object) =>{
        if(object.length > 0){
            this.setState({"taskAssigned": object[0].name});
        }
    }


    updateTask(){
        var url = PropertyGet({key:'taskDetailsAPIURL'})+this.state.taskId;
        var token = localStorage.getItem("token");
        console.log(this.state.task);
        const data={
            id: this.state.taskId,
            name: this.state.taskName,
            description: this.state.taskDescription,
            sprint: this.state.taskSprintId,
            status: this.state.taskStatus,
            assigned: this.state.taskAssigned,
            started: this.state.taskStart,
            due: this.state.taskEnd,
            completed: this.state.taskCompleted
        };
        console.log(data);
        fetch(url,{
            method: "PUT",
            headers: {  'Content-Type': 'application/json', 
                        'Authorization':'Token '+token
                    },
                    body: JSON.stringify(data),  
            })
        .then((response)=> response.json())
        .then((json)=> {
            console.log(json)
            this.props.clickOnCard('/sprintDetails/'+this.props.sprintId,this.props.sprintId)
        })
        .catch((e)=>console.log(e));
    }
    
    render(){
        return (
                <Tasks  show={this.state.show} 
                        handleSave={this.handleSave} 
                        handleClose = {this.handleClose}
                        handleShow = {this.handleShow}
                        updateState = {this.updateState}
                        setSelected = {this.setSelected}
                        task ={this.props.task}
                        users= {this.state.users}></Tasks>        
        );
    }
  }
  
  export default TaskList;