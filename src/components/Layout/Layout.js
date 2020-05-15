import React from 'react'
import { Container, Row, Col   } from 'react-bootstrap';
import {Login} from '../../components/Login/Login'

import RegistrationScreen from '../../components/Registration/RegistrationScreen'


export const Layout =(props) =>(
    <Container>
        {props.children}
    </Container>
);

export const LoginScreenLayout = (props) =>(
    
    <Container>
        <Row >
            <Col lg={3}></Col>
            <Col lg={6}>{props.children}</Col>
            <Col lg={3}></Col>
        </Row>
    </Container>
);

export const LoginPageLayout = (props) =>(
    <Container style={loginContainerStyle}>
       <Login keyEnter={props.keyEnter} submitForm={props.submitForm} 
                                      onUserNameChange={props.onUserNameChange} onPasswordChange={props.onPasswordChange}
                                      message={props.message}></Login>
    </Container>
)

export const RegistrationScreenLayout = (props) =>(
    <Container style={registrationPageLayout}>
        <RegistrationScreen></RegistrationScreen>
    </Container>
);
export const HomeLayout = (props) =>(
    <Container>
        <Row>
            <Col lg={3}>{props.sidebar}</Col>
            <Col lg={8}>{props.mainbord}</Col>
        </Row>
    </Container>
);

const registrationPageLayout = {
    width:"65%",
    top:20,
    position: "relative",
    paddingTop:20,
};

const loginContainerStyle = {
    width:"50%",
    top:200,
    position: "relative",
    paddingTop:20,
};
