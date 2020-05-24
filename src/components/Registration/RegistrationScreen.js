import React from 'react';
import { Row, Col, Card, Form,  Button } from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FormLabel = {
    textAlign: "center",
    fontSize:11,
    padding:0,
}

const FormButton  = {
    textAlign:"center",
    paddingLeft:1,
    paddingRight:0,
    paddingTop:0,
    paddingBottom:2,
}



function RegistrationScreen (props) {
    return(
    <Card style={{width:"100%"}}>
        <Card.Body>
            <Form noValidate validated={props.validated} onSubmit={props.handleSubmit}>
                <Form.Group as={Row} controlId="validationCustom01">
                    <Form.Label column sm={3}> User Name </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                        name="username" 
                        type="text" 
                        placeholder="User name" 
                        required 
                        // defaultValue="User name"
                        onChange={(e)=>{props.handleFieldInput(props.USER_FIELDS_ENUM.USERNAME, e.target.value);}}
                        >
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">Please enter proper username</Form.Control.Feedback>
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
                        <Form.Control
                         name="pass"
                         type="password" 
                         placeholder="Password" 
                         required 
                         onChange={(e)=>{props.handleFieldInput(props.USER_FIELDS_ENUM.PASSWORD, e.target.value);}}>
                         </Form.Control>
                        <Form.Control.Feedback type="invalid">Please enter Password</Form.Control.Feedback>
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
                        <Form.Control
                        name="conpass" 
                        type="password" 
                        placeholder="Confrirm Password" 
                        required 
                        onChange={(e)=>{props.handleFieldInput(props.USER_FIELDS_ENUM.CONF_PASSWORD, e.target.value);}}>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{props.passwordConfMessage}</Form.Control.Feedback>
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
                        <Form.Control
                        name="fname" 
                        type="text" 
                        placeholder="First name" 
                        onChange={(e)=>{props.handleFieldInput(props.USER_FIELDS_ENUM.F_NAME, e.target.value);}}>
                        </Form.Control>
                    </Col>
                    <Col sm={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                        name="lname" 
                        type="text" 
                        placeholder="Last name" 
                       onChange={(e)=>{props.handleFieldInput(props.USER_FIELDS_ENUM.L_NAME, e.target.value);}}>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={3}>
                        <Form.Label required>Email</Form.Label>
                    </Col>
                    <Col sm={9}>    
                        <Form.Control 
                        name="email"
                        type="email" 
                        placeholder="name@email.com"
                        required 
                        onChange={(e)=>{props.handleFieldInput(props.USER_FIELDS_ENUM.EMAIL, e.target.value);}}>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{props.emailMessage}</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                    </Col>
                    <Col sm={3}>
                    <Row>
                        <Col sm={6} style={FormButton}>
                            <Button type="submit" name="" value="Register">Register</Button>
                        </Col>
                        <Col sm={6} style={FormButton}>    
                            <Link to="/login"><Button  name="" value="Go Back">Sign</Button></Link>
                        </Col>
                    </Row>
                    </Col>
                </Form.Group>
            </Form>
        </Card.Body>
    </Card>
 )
}

export default RegistrationScreen;