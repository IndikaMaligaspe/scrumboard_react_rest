import React , { Component } from "react";
import {PropertyGet} from '../../containers/Common/Properties';
import Tasks from '../../components/Tasks/Tasks'

class TaskList extends Component {
    state =  {
        taskSprintId: '',
        show : false,
        stateTask : null,
        users:[]
    }
     
    constructor(props){
        super(props);
        this.state.taskId  = props.task.id.valueOf();
        this.state.users = props.users;
        this.state.stateTask = JSON.parse(JSON.stringify(props.task));  
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this)
        this.updateState = this.updateState.bind(this);
        this.setSelected = this.setSelected.bind(this);
    }
    
    updateState = (attrname, target) =>{
       console.log(attrname) 
       if ((attrname) && (target)){
            let task = this.state.stateTask;
            switch (attrname) {
                case 'name': task.name = target;break;
                case 'description': task.description = target;break;
                case 'assigned': task.assigned = target;break;
                case 'status': task.status = target;break;
                case 'started': task.started = target;break;
                case 'due': task.due = target;break;
                case 'sprint': task.sprint = target;break;
                case 'completed': task.completed = target;break;
                default: break;
            }   
            this.setState({"stateTask":task});
        }
    }


    handleSave = () => {
            this.setState({"show":false});
            this.updateTask(1);
    }

    handleDelete = () => {
        this.setState({"show":false});
        this.updateTask(2);
    }

    handleClose = () => {
        this.setState({"show":false});
        console.log(this.props.task);
        console.log(this.state.stateTask);
        let stateTask = JSON.parse(JSON.stringify(this.props.task));  
        this.setState({"stateTask":stateTask});
    }

    handleShow = () => {
        this.setState({"show":true});
        console.log(this.props.task);
        console.log(this.state.stateTask);

    }
     
    setSelected = (object) =>{
        if(object.length > 0){
            this.updateState("assigned", object[0].name);
        }
    }

    doPost = (token , data) =>{
        var url = PropertyGet({key:'taskCreateAPIURL'})+this.state.taskId;
        var body = data;
        console.log(body)
        fetch(url,{
            method: "POST",
            headers: {  'Content-Type': 'application/json', 
                        'Authorization':'Token '+token
                    },
                    body: JSON.stringify(data),  
            })
        .then((response)=> response.json())
        .then((json)=> {
            this.props.clickOnCard('/sprintDetails/'+this.props.sprintId,this.props.sprintId)
            console.log(json);
        })
        .catch((e)=>console.log(e));
    }
 
    doPut = (token, data) =>{
        var url = PropertyGet({key:'taskDetailsAPIURL'})+this.state.taskId;
        var body = data;
        fetch(url,{
            method: "PUT",
            headers: {  'Content-Type': 'application/json', 
                        'Authorization':'Token '+token
                    },
                    body: JSON.stringify(data),  
            })
        .then((response)=> response.json())
        .then((json)=> {
            this.props.clickOnCard('/sprintDetails/'+this.props.sprintId,this.props.sprintId)
        })
        .catch((e)=>console.log(e));
    } 

    doDelete(token, data){
        var url = PropertyGet({key:'taskDetailsAPIURL'})+this.state.taskId;
        var body = data;
        fetch(url,{
            method: "DELETE",
            headers: {  'Content-Type': 'application/json', 
                        'Authorization':'Token '+token
                    },
                    body: JSON.stringify(data),  
            })
        .then((response)=> response.ok)
        .then((ok)=> {
            (ok)?this.props.clickOnCard('/sprintDetails/'+this.props.sprintId,this.props.sprintId):console.log("Was not able to delete [id]"+this.state.stateTask.id)
        })
        .catch((e)=>console.log(e));
    } 

    updateTask = (type) =>{
        var token = localStorage.getItem("token");
        const data=this.state.stateTask;
        if(type ===1 ){
            (!this.state.taskId)?this.doPost(token, data) : this.doPut(token, data)
        }else if(type===2){
            (this.state.taskId)?this.doDelete(token, data) : console.log("can not delete Empy task!!!");
        }
        
    }
    
    render(){
        return (
                <Tasks  show={this.state.show} 
                        handleSave={this.handleSave} 
                        handleDelete={this.handleDelete}
                        handleClose = {this.handleClose}
                        handleShow = {this.handleShow}
                        updateState = {this.updateState}
                        setSelected = {this.setSelected}
                        start = {this.state.taskStart}
                        task ={this.state.stateTask}
                        users= {this.state.users}
                        addTask = {this.props.addTask}>
                        </Tasks>        
        );
    }
  }
  
  export default TaskList;