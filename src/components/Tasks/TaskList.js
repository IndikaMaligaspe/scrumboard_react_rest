import React from 'react'
import {Modal , Button, Card, Container, Row, Col, Form } from 'react-bootstrap';

export function TaskList (props) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => {setShow(false);props.setTask(task);}
  const handleShow = () => {setShow(true);} 
  const task = {
        name: props.task.name,
        description: props.task.description,
        assignee: props.task.assigned,
        status: props.task.status,
        start: props.task.started,
        due: props.task.due,
        sprintId: props.task.sprintId,
    };
   

//   console.log("Model Dialog..."+show)
  return (
    <>  
      <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>
                <Form>
                    <Form.Group as={Row}>
                        <Col sm="10">
                            <Form.Control plaintext  placeholder={props.task.name} style={{fontWeight:"bold"}} onChange={(e)=>{task.name=e.target.value;}}/>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row}>
                        <Col sm="12">
                            <Form.Control size="1g" as="textarea" rows="3" placeholder={props.task.description} onChange={(e)=>{task.description=e.target.value;}} />
                        </Col>
                    </ Form.Group> 

                    <Form.Group as={Row}>
                        <Form.Group as={Col}>
                            <Form.Label>Assignee</Form.Label>
                            <Form.Control   type="text" placeholder={props.task.assigned} onChange={(e)=>{task.assigned=e.target.value;}} /> 
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" placeholder={props.task.status_display} onChange={(e)=>{task.status=e.target.value;}}>
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
                            <Form.Control   type="text" placeholder={props.task.started} onChange={(e)=>{task.start=e.target.value;}}/> 
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Due</Form.Label>
                            <Form.Control   type="text" placeholder={props.task.due} onChange={(e)=>{task.end=e.target.value;}}/>
                        </Form.Group>
                    </Form.Group>                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
      </Modal>
      <Container>
      <Row>
          <Col lg={12}>
              <Card style={cardLayoutStyle} onClick={handleShow}> 
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

export default TaskList;