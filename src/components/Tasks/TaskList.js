import React from 'react'
import {Modal , Button, Card, Container, Row, Col, Form, FormControl } from 'react-bootstrap';

export function TaskList (props) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);}   
//   console.log("Model Dialog..."+show)
  return (
    <>  
      <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>
                <Form>
                    <Form.Group>
                        <Form.Control plaintext  placeholder="Task name" style={{fontWeight:"bold"}} />
                        
                    </Form.Group>
                </Form>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control size="1g" as="textarea" rows="3" placeholder="Task Description" />
                        <br/>
                        <Form.Control   type="text" placeholder="Task assignee" style={{width:"30%"}}/> 
                        <Form.Control   type="text" placeholder="sprint" style={{width:"30%"}}/>
                        <br/> 
                        <Form.Control   plaintext readOnly placeholder="started : " style={{width:"30%"}}/> 
                        <Form.Control   plaintext readOnly placeholder="due : " style={{width:"30%"}}/> 
                        <br/>
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

