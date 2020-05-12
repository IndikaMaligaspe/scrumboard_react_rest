import React , { Component } from "react";
import {Modal , Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import {PropertyGet} from '../../containers/Common/Properties'

class TaskList extends Component {
    state =  {
        taskName: '',
        taskDescription: '',
        taskAssignee: '',
        taskStatus: '',
        taskStart: '',
        taskDue: '',
        taskSprintId: '',
        show : false
    }
     
    constructor(props){
        super(props);
        this.state.taskId  = props.task.id;
        this.state.taskName = props.task.name;
        this.state.taskDescription = props.task.description;
        this.state.taskAssignee = props.task.assigned;
        this.state.taskStatus = props.task.status_display;
        this.state.taskStart = props.task.started;
        this.state.taskDue = props.task.due;
        this.state.taskSprintId = props.task.sprint;
        this.state.taskCompleted = props.task.completed
        
    }
    
    handleSave = () => {
            this.setState({"show":false});
            this.updateTask();
    }

    handleClose = () => {
        this.setState({"show":false});
    }

    handleShow = () => {
        this.setState({"show":true});
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
            assigned: this.state.taskAssignee,
            started: this.state.taskStart,
            due: this.state.taskDue,
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
        .then((json)=> console.log(json))
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
                                <Form.Control plaintext  placeholder={this.props.task.name} style={{fontWeight:"bold"}} onChange={(e)=>{this.setState({"taskName":e.target.value})}}/>
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
                                <Form.Control   type="text" placeholder={this.props.task.assigned} onChange={(e)=>{this.setState({"taskAssigned":e.target.value})}} /> 
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