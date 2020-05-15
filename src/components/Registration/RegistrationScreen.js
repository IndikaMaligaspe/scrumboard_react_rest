import React from 'react';
import { Row, Col, Card, Form, FormControl , Button } from 'react-bootstrap';
import styled from 'styled-components';

const FormLabel = {
    textAlign: "center",
    fontSize:11,
    padding:0,
}

const FormButton  = {
    textAlign:"right",
    paddingLeft:1,
    paddingRight:0,
    paddingTop:0,
    paddingBottom:0,
}

const RegistrationScreen =(props) =>(
    <Card style={{width:"100%"}}>
        <Card.Body>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}> User Name </Form.Label>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="User name"></FormControl>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col sm = {3}> </Col>
                        <Form.Label column sm={8} style={FormLabel}>Required. 150 characters or fewer.</Form.Label>
                    </Row>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}> Password </Form.Label>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Password"></FormControl>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col sm = {3}> </Col>
                        <Form.Label column sm={8} style={FormLabel}>Your password must contain at least 8 characters, non common and must contain numbers and characters</Form.Label>
                    </Row>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={3}>
                     <Form.Label> Confirm Password </Form.Label>
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Password"></FormControl>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col sm = {3}> </Col>
                        <Form.Label column sm={8} style={FormLabel}>Enter same password as before.</Form.Label>
                    </Row>
                </Form.Group>
                <hr></hr>
                <Form.Group as={Row}>
                    <Col sm={6}>
                        <Form.Label>First Name</Form.Label>
                        <FormControl type="text" placeholder="First name"></FormControl>
                    </Col>
                    <Col sm={6}>
                        <Form.Label>Last Name</Form.Label>
                        <FormControl type="text" placeholder="Last name"></FormControl>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={3}>
                        <Form.Label>Email</Form.Label>
                    </Col>
                    <Col sm={9}>    
                        <FormControl type="email" placeholder="name@email.com"></FormControl>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={8}>
                    </Col>
                    <Col sm={2} style={FormButton}>
                        <Button  name="" value="Register">Register</Button>
                    </Col>
                    <Col sm={2} style={FormButton}>    
                        <Button  name="" value="Go Back">Go Back</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Card.Body>
    </Card>
);

export default RegistrationScreen;