import React from 'react'
import { Container, Row, Col   } from 'react-bootstrap';
import {Login} from '../../components/Login/Login'
import LogoutView from '../../components/Logout/Logout'
import RegistrationScreen from '../../components/Registration/RegistrationScreen'


export const Layout =(props) =>(
    <Container fluid>
        {props.children}
    </Container>
);

export const LogoutLayout = (props) => (
    <Container fluid >
        <Row >
            <Col></Col>
            <Col sm={4}><LogoutView></LogoutView></Col>
            <Col></Col>
        </Row>
    </Container>

);



export const LoginPageLayout = (props) =>(
    <Container style={loginContainerStyle}>
        <Row>
            <Col sm={3}></Col>
            <Col>
                <Login keyEnter={props.keyEnter} submitForm={props.submitForm} 
                                      onUserNameChange={props.onUserNameChange} onPasswordChange={props.onPasswordChange}
                                      message={props.message}></Login>
            </Col>
            <Col sm={3}></Col>
        </Row>
    </Container>
)

export const RegistrationScreenLayout = (props) =>(
    <Container fluid style={registrationPageLayout}>
        <Row>
            <Col></Col>
            <Col sm={5}>
                <RegistrationScreen
                    handleFieldInput={props.handleFieldInput}
                    handleSubmit={props.handleSubmit}
                    validated = {props.validated}
                    passwordConfMessage={props.passwordConfMessage}
                    emailMessage={props.emailMessage}        
                    USER_FIELDS_ENUM={props.USER_FIELDS_ENUM}
                     >
                </RegistrationScreen>    
             </Col>
             <Col ></Col>
        </Row>
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
    width:"100%",
    top:20,
    position: "relative",
    paddingTop:20,
};

const loginContainerStyle = {
    width:"100%",
    top:100,
    position: "relative",
    paddingTop:20,
};
