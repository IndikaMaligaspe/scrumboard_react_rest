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
                console.log(task.status);
               if(task.status === 1){
                    toDoList.push(task);                    
               } 
               if(task.status === 2){
                    inProgresList.push(task);                    
               } 
               if(task.status === 3){
                    inTestingList.push(task);                    
               } 
               if(task.status === 4){
                    completedList.push(task);                    
               } 

            });  
            toDoList.push({"id":"","name":"[ + ] - Add Task", "assigned":"Indika"});

        }
        return [toDoList,inProgresList,completedList,inTestingList];
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        this.getTasks(token);
        this.getUsers(token);        
    }

    getTasks = (token) =>{
        const sprintDetailsAPIURL = PropertyGet({key:'sprintDetailsAPIURL'});
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
               this.setState({'taskList':json});
            })
            .catch((e)=>{console.log(e)});
        }
    }

    getUsers= (token) =>{
        const userDetailsAPIURL = PropertyGet({key:"userDetailsAPIURL"});
        let users = [];
        if(userDetailsAPIURL){
            fetch(userDetailsAPIURL,
                {method: 'GET',
                headers:{'Content-Type': 'application/json', 
                'Authorization':'Token '+token}
            })
            .then((response) => response.json())
            .then((json) =>{
                json.forEach(user => {
                    if(user.is_active)
                        users.push({"id":user.id, "name":user.username});      
                });
                this.setState({"users":users});
            })
            .catch((e)=>{console.log(e);})
        }
    }

    render(){
        const taskList = this.prepTaskList(this.state.taskList);
        const taskMap = this.state.taskTypes;
        return(
            <Container>
                { (taskList) && (taskList.length > 0) &&  
                <Row >
                   {taskMap.map((value, index) =>{
                       return <React.Fragment key={index}>
                            <Col lg={3}> 
                            <Card> 
                                <Card.Header>{value}</Card.Header>
                                {
                                taskList[index].map((task)=>(
                                        <TaskList task={task} key={task.id} users={this.state.users} sprintId={this.state.id}  clickOnCard={this.handleClick}>></TaskList>       
                                ))
                                }
                            </Card>
                        </Col>
                      </React.Fragment>
                   })}
                </Row>
                }
            
           </Container>
        );
    }
}

export default withRouter (SprintDetails);