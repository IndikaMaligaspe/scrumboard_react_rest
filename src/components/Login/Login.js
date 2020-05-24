import React from 'react';
import { Container, Row, Col, Form, FormControl, Button, Card   } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const ButtonDiv = {
    textAlign:"left",
    paddingBottom:1,
    margin:0,
    width: '100%'
}



export const Login = (props) =>(
    <Container>
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group as={Row}>
                            <Form.Label column sm={3}> User Name </Form.Label>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="User Name" 
                                onChange={(e)=>{props.onUserNameChange(e.target.value)}}></FormControl>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                            <Form.Label column sm={3}> Password </Form.Label>
                            <Col sm={9}>
                                <FormControl type="password" placeholder="Password"  onChange={(e)=>{props.onPasswordChange(e)}} onKeyPress={(e)=>{props.keyEnter(e)}}></FormControl>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                            <Col sm={7}>
                                <span>{props.message}</span>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                            <Col sm={12} style={ButtonDiv}>
                                <Button  style={{width:"100%"}} onClick={props.submitForm}>Sign In</Button>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                            <Col>Dont have an account, &nbsp;
                                <Link to="/register">
                                    Singn Up
                                </Link>
                            </Col>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </Container>
);

export default Login;