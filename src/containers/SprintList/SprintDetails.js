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
        taskTypes:['To Do','In Development','In Testing','Completed'],
        NewTask:{},
        show: false,
        abd:'',
        users: [],
        fetched: false,
    }
   
    constructor(props){
        super(props);
        let {id} =  this.props.match.params;
        this.state.id = id;
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(path, id){
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
            if(this.state.fetched)
                console.log("test");
        }
        return [toDoList,inProgresList,inTestingList,completedList];
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        this.getUsers(token)
        .then(state=>{
            this.getTasks(token);
            this.setState({"fetched":true})
            let NewTask = {"id":"","name":"[ + ] - Add Task", "assigned":"", "sprint":this.state.id};
            this.setState({"NewTask":NewTask});     
        }).catch(message=>{
            console.log(message);
        });   

    }

    getTasks = (token) =>{
        const sprintDetailsAPIURL = PropertyGet({key:'sprintDetailsAPIURL'});
        const id = this.state.id
        if ((id) && (sprintDetailsAPIURL)){
            let url = sprintDetailsAPIURL+id+"&ordering=due"
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
        return new Promise((resolve, reject) => {
            const userDetailsAPIURL = PropertyGet({key:"userDetailsAPIURL"});
            let users = [];
            if(!userDetailsAPIURL){
                reject("URL not available");
            }
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
                resolve(true);
            })
            .catch((e)=>{
                console.log(e);
                reject(e.message);
            })
        });
    }

    render(){
        const taskList = this.prepTaskList(this.state.taskList);
        const taskMap = this.state.taskTypes;
        const NewTask = this.state.NewTask;
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
                                    <TaskList  task={task} key={task.id} users={this.state.users} sprintId={this.state.id}  clickOnCard={this.handleClick}>></TaskList>       
                                ))
                                }
                                <Card.Footer>
                                {
                                   (NewTask.name) && (value) && (value ==='To Do') &&
                                         <TaskList addTask="false" task={NewTask} key={NewTask.id} users={this.state.users} sprintId={this.state.id}  clickOnCard={this.handleClick}>></TaskList>   
                                }
                                </Card.Footer>
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