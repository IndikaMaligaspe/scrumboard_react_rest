import React from 'react';
import {Modal, Form , Row , Col, Button} from 'react-bootstrap';

export const SprintCardAdd = (props) =>(    
            <React.Fragment>
                <Modal show={props.show} onHide={props.handleSprintAddClose} centered backdrop="static"> 
                    <Modal.Header> 
                        <Modal.Title style={cardLayoutStyle}>
                            <Form>
                                <Form.Group controlId="formGroup" as={Row}>
                                <Form.Control  plaintext readOnly defaultValue="Add New Sprint" style={headerStyle}/>      
                                </Form.Group>
                            </Form>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formGroupName" as={Row}>
                            <Col sm="4">
                                <Form.Label> Name : </Form.Label>
                            </Col>
                            <Col sm="8"> 
                                <Form.Control type="text" />
                            </Col>    
                        </Form.Group>
                        <Form.Group controlId="formGroupDescription" as={Row}>
                            <Col sm="4">
                                <Form.Label> Description : </Form.Label>
                            </Col>
                            <Col sm="8"> 
                                <Form.Control size="1g" as="textarea" rows="3" />
                            </Col>    
                        </Form.Group>
                        <Form.Group controlId="formGroupDate" as={Row}>
                            <Col sm="4">
                                <Form.Label> Due : </Form.Label>
                            </Col>
                            <Col sm="8"> 
                                <Form.Control   type="Date"/>
                            </Col>    
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleSprintAddClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={props.handleSprintSave}>
                            Save Changes
                        </Button>
                </Modal.Footer>                    
                </Modal>    
            </React.Fragment>
)

const cardLayoutStyle = {
    marginLeft:10, 
    marginTop:1,
    marginBottom:1,
    padding:2,
    cursor: "pointer",
}

const headerStyle = {
    fontWeight:"bold",
}