import React from 'react'
import {Modal , Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

function addText(id, target, value){
    if((id !== "") && (value))
        target.value = value + " "
}

export function Tasks (props) {
  const start = (props.task.started)? props.task.started : new Date().toLocaleDateString("en-US");
  const end =  (props.task.due)? props.task.due : new Date().toLocaleDateString("en-US");
   
 if((props.task.id === "") && (props.show) && (props.task.name === "[ + ] - Add Task")){
     props.task.name =  "Task Name";
 }
    
  return (
    <>  
     <Modal show={props.show} onHide={props.handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                <Modal.Title>
                    <Form>
                        <Form.Group controlId="formGroupTaskName">
                            <Form.Control plaintext  placeholder={props.task.name} style={{fontWeight:"bold"}} onClick={(e)=>{addText(props.task.id, e.target,props.task.name)}} onChange={(e)=>{props.updateState('name',e.target.value)}}/>
                        </Form.Group>
                    </Form>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Col sm="12">
                                <Form.Control size="1g" as="textarea" rows="3" placeholder={props.task.description} onClick={(e)=>{addText(props.task.id, e.target,props.task.description)}}  onChange={(e)=>{props.updateState('description',e.target.value)}} />
                            </Col>
                        </ Form.Group> 
    
                        <Form.Group as={Row}>
                            <Form.Group as={Col}>
                                <Form.Label>Assignee</Form.Label>
                                <Typeahead id="assigned_users" labelKey="name" multiple={false} onChange={(e)=>{props.setSelected(e)}}
                                            options={props.users} placeholder={props.task.assigned} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Status</Form.Label>
                                <Form.Control as="select" placeholder={props.task.status} value={props.task.status} onChange={(e)=>{props.updateState('status',e.target.value)}}>
                                    <option value="1">Not Started</option>
                                    <option value="2">In Development</option>
                                    <option value="3">In Testing</option>
                                    <option value="4">Completed</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Group>                    
                        <Form.Group as={Row}>
                            <Form.Group as={Col}>
                                <Form.Label>Start date</Form.Label>
                                <Form.Control   type="date" value={start} onChange={(e)=>{props.updateState('started',e.target.value)}}/> 
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Col style={{marginLeft:0 , paddingLeft:0}} sm="9">
                                    <Form.Label>Due</Form.Label>
                                </Col>
                                <Form.Control   type="Date" value={end} onChange={(e)=>{props.updateState('due',e.target.value)}}/>
                            </Form.Group>
                        </Form.Group>                    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={props.handleDelete}>
                    Delete
                </Button>
                <Button variant="primary" onClick={props.handleSave}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Container>
            <Row>
                <Col lg={12}>
                    <Card style={cardLayoutStyle} onClick={props.handleShow}> 
                    <Card.Body>
                        <Card.Text>{props.task.name}</Card.Text>   
                        { (props.task.due) &&
                            <Card.Subtitle>Due- {props.task.due}</Card.Subtitle>
                        }
                        <Card.Subtitle style={{textAlign:"right", color:"blue"}}>{props.task.assigned}</Card.Subtitle>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  );
}

const cardLayoutStyle = {
    marginLeft:0, 
    marginTop:1,
    marginBottom:1,
    padding:0,
    cursor: "pointer",
}

export default Tasks;