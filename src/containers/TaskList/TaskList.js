import React , { Component } from "react";
import {Modal , Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
import {PropertyGet} from '../../containers/Common/Properties';

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
        users:[]
    }
     
    constructor(props){
        super(props);
        this.state.taskId  = props.task.id.valueOf();
        this.state.taskName = props.task.name;
        this.state.taskDescription = props.task.description;
        this.state.taskAssigned = props.task.assigned;
        this.state.taskStatus = props.task.status_display;
        this.state.taskStart = props.task.started;
        this.state.taskEnd = props.task.due;
        this.state.taskSprintId = props.task.sprint;
        this.state.taskCompleted = props.task.completed;
        this.state.users = props.users;
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
        this.setState({"taskStatus":this.props.task.status_display});
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
        console.log(this.state.taskName);
        const data={
            id: this.state.taskId,
            name: this.state.taskName,
            description: this.state.taskDescription,
            sprint: this.state.taskSprintId,
            status_display: this.state.taskStatus,
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
            <>
            <Modal show={this.state.show} onHide={this.handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>
                    <Form>
                        <Form.Group as={Row}>
                            <Col sm="10">
                                <Form.Control plaintext  placeholder={this.state.taskName} style={{fontWeight:"bold"}} onChange={(e)=>{this.setState({"taskName":e.target.value})}}/>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Col sm="12">
                                <Form.Control size="1g" as="textarea" rows="3" placeholder={this.props.task.description} onChange={(e)=>{this.setState({"taskDescription":e.target.value})}} />
                            </Col>
                        </ Form.Group> 
    
                        <Form.Group as={Row}>
                            <Form.Group as={Col}>
                                <Form.Label>Assignee</Form.Label>
                                <Typeahead id="assigned_users" labelKey="name" multiple={false} onChange={(e)=>{this.setSelected(e)}}
                                            options={this.state.users} placeholder={this.props.task.assigned} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Status</Form.Label>
                                <Form.Control as="select" placeholder={this.props.task.status_display} onChange={(e)=>{this.setState({"taskStatus":e.target.value})}}>
                                    <option value="Not Started">Not Started</option>
                                    <option value="In Development">In Development</option>
                                    <option value="In Testing">In Testing</option>
                                    <option value="Completed">Completed</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Group>                    
                        <Form.Group as={Row}>
                            <Form.Group as={Col}>
                                <Form.Label>Started</Form.Label>
                                <Form.Control   type="text" placeholder={this.props.task.started} onChange={(e)=>{this.setState({"taskStart":e.target.value})}}/> 
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Due</Form.Label>
                                <Form.Control   type="text" placeholder={this.props.task.due} onChange={(e)=>{this.setState({"taskEnd":e.target.value})}}/>
                            </Form.Group>
                        </Form.Group>                    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.handleSave}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Container>
            <Row>
                <Col lg={12}>
                    <Card style={cardLayoutStyle} onClick={this.handleShow}> 
                    <Card.Body>
                        <Card.Text>{this.state.taskName}</Card.Text>   
                        { (this.state.taskDue) &&
                            <Card.Subtitle>Due- {this.props.task.due}</Card.Subtitle>
                        }
                        <Card.Subtitle style={{textAlign:"right", color:"blue"}}>{this.state.taskAssigned}</Card.Subtitle>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
        );
    }
  }
  
  const cardLayoutStyle = {
      marginLeft:0, 
      marginTop:1,
      marginBottom:1,
      padding:0,
      cursor: "pointer",
  }

  export default TaskList;