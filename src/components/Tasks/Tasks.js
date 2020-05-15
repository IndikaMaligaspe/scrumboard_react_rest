import React from 'react'
import {Modal , Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

export function Tasks (props) {
  const task = {
        name: props.task.name,
        description: props.task.description,
        assignee: props.task.assigned,
        status: props.task.status,
        start: props.task.started,
        due: props.task.due,
        sprintId: props.task.sprintId,
    };
   

  return (
    <>  
     <Modal show={props.show} onHide={props.handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>
                    <Form>
                        <Form.Group as={Row}>
                            <Col sm="10">
                                <Form.Control plaintext  placeholder={props.task.name} style={{fontWeight:"bold"}} onChange={(e)=>{props.updateState("taskName",e.target.value)}}/>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Col sm="12">
                                <Form.Control size="1g" as="textarea" rows="3" placeholder={props.task.description} onChange={(e)=>{props.updateState("taskDescription",e.target.value)}} />
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
                                <Form.Control as="select" placeholder={props.task.status} value={props.task.status} onChange={(e)=>{props.updateState("taskStatus",e.target.value)}}>
                                    <option value="1">Not Started</option>
                                    <option value="2">In Development</option>
                                    <option value="3">In Testing</option>
                                    <option value="4">Completed</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Group>                    
                        <Form.Group as={Row}>
                            <Form.Group as={Col}>
                                <Form.Label>Started</Form.Label>
                                <Form.Control   type="text" placeholder={props.task.started} onChange={(e)=>{props.updateState("taskStart",e.target.value)}}/> 
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Due</Form.Label>
                                <Form.Control   type="text" placeholder={props.task.due} onChange={(e)=>{props.updateState("taskEnd",e.target.value)}}/>
                            </Form.Group>
                        </Form.Group>                    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
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