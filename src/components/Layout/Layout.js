import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Layout =(props) =>(
    <Container>
        {props.children}
    </Container>
);

export const LoginScreenLayout = (props) =>(
    <Container >
        <Row >
            <Col lg={3}></Col>
            <Col lg={6}>{props.children}</Col>
            <Col lg={3}></Col>
        </Row>
    </Container>
);

export const LoginPageLayout = (props) =>(
    <Container style={loginContainerStyle}>
        <Row style={loginRowStyle}><Col>{props.logo}</Col></Row>
        <Row style={loginRowStyle}><Col>{props.username}</Col></Row>
        <Row style={loginRowStyle}><Col>{props.password}</Col></Row>
        <Row style={loginRowStyle}><Col>{props.message}</Col></Row>
        <Row style={loginRowStyle}><Col>{props.signIn}</Col></Row>
        <Row style={loginRowStyle}><Col>{props.signinLink}</Col></Row>
    </Container>
)

export const RegistrationScreenLayout = (props) =>(
    <Container style={loginContainerStyle}>
        <Row >
            <Col lg={3} ></Col>
            <Col lg={6} >{props.cred}</Col>
            <Col lg={3} ></Col>
        </Row>
        <Row >
            <Col lg={3} ></Col>
            <Col lg={6} >{props.profile}</Col>
            <Col lg={3} ></Col>
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

const loginRowStyle = {
    width:"100%",
    paddingBottom: 2
};
const loginContainerStyle = {
    width:"100%",
    textAlign:"center",
    top:100,
    position: "relative",
    border: "1px groove ",
    paddingTop:20,
};
