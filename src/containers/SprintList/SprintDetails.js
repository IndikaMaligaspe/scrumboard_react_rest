import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {PropertyGet} from '../Common/Properties';
// import { TaskList } from '../../components/Tasks/TaskList'
import {Card, Container, Row, Col } from 'react-bootstrap';
import TaskList from '../../containers/TaskList/TaskList';


class SprintDetails extends Component{

    state  = {
        id: '',
        taskList:[],
        taskTypes:['To Do','In Development','Completed','In Testing'],
        show: false,
        abd:'',
        users: [],
    }
   
    constructor(props){
        super(props);
        let {id} =  this.props.match.params;
        this.state.id = id;
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(path, id){
        console.log(path);
        if(path){
            this.props.history.push(path);     
            window.location.reload(false);
        }
        
    }

    prepTaskList(taskList){
        var toDoList = [];
        var inProgresList = []
        var completedList = [];
        var inTestingList = [];
        // var mainList = [5]
        if(taskList){
            taskList.forEach(task => {
               if(task.status_display === 'Not Started'){
                    toDoList.push(task);                    
               } 
               if(task.status_display === 'In Development'){
                    inProgresList.push(task);                    
               } 
               if(task.status_display === 'In Testing'){
                    inTestingList.push(task);                    
               } 
               if(task.status_display === 'Completed'){
                    completedList.push(task);                    
               } 

            });        
        }
        return [toDoList,inProgresList,completedList,inTestingList];
    }

    componentDidMount(){
        const sprintDetailsAPIURL = PropertyGet({key:'sprintDetailsAPIURL'});
        const token = localStorage.getItem('token')
        const id = this.state.id
        if ((id) && (sprintDetailsAPIURL)){
            let url = sprintDetailsAPIURL+id
            fetch(url,{
                method: 'GET',
                headers:{'Content-Type': 'application/json', 
                'Authorization':'Token '+token}
            })
            .then((response)=>response.json())
            .then((json)=>{
               console.log(json);
               this.setState({'taskList':json});
            })
            .catch((e)=>{console.log(e)});
        }
        // Need to fetch from server.
        this.setState({"users":[{id: 1, name: 'John'},{id: 2, name: 'Miles'},{id: 3, name: 'Charles'},{id: 1, name: 'indika'}]});
    }

    render(){
        const taskList = this.prepTaskList(this.state.taskList);
        return(
            <Container style={{padding:0, margin:0, backgroudColor:"skyblue"}}>
               
                { (taskList) && (taskList.length > 0) &&  
                <Row >
                   <Col lg={3}> 
                        <Card> 
                            <Card.Header>To Do</Card.Header>
                            {
                            taskList[0].map((task)=>(
                                    <TaskList task={task} key={task.id} users={this.state.users} sprintId={this.state.id}  clickOnCard={this.handleClick}>></TaskList>       
                            ))
                            }
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card>
                            <Card.Header>In Progress</Card.Header>
                            {
                            taskList[1].map((task)=>(
                                    <TaskList task={task} key={task.id} users={this.state.users} sprintId={this.state.id}  clickOnCard={this.handleClick}></TaskList>       
                            ))
                            }
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card>
                            <Card.Header>In QA</Card.Header>
                            {
                            taskList[2].map((task)=>(
                                    <TaskList task={task} key={task.id} users={this.state.users} sprintId={this.state.id}  clickOnCard={this.handleClick}></TaskList>       
                            ))
                            }
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card>
                            <Card.Header>Completed</Card.Header>
                            {
                            taskList[3].map((task)=>(
                                    <TaskList task={task} key={task.id} users={this.state.users} sprintId={this.state.id}  clickOnCard={this.handleClick}></TaskList>       
                            ))
                            }
                        </Card>
                    </Col>
                </Row>
                }
            
           </Container>
        );
    }
}

export default withRouter (SprintDetails);