import React from 'react'
import {Container, Row,  Button} from 'react-bootstrap'

const SideBar = (props) =>(
    <Container style={sideBarStyle}>
        
        <Row><Button size="1g" variant="outline-light" block style={sideBarButtonSelectedStyle}>Bords</Button></Row>
        <Row><Button size="1g" variant="outline-light" block style={sideBarButtonStyle}>Templates</Button></Row>
        <Row><Button size="1g" variant="outline-light" block style={sideBarButtonStyle}>Home</Button></Row>
        <Row><Button size="1g" variant="outline-light" block style={sideBarButtonStyle}>Teams</Button></Row>
        
    </Container>    
);

const sideBarStyle = {
    top: 45,
    position: "relative",
    width:"100%",
}

const sideBarButtonSelectedStyle = {
    backgroundColor:"grey",   
    color:"white",
    textAlign:"left",
}

const sideBarButtonStyle = {
    color:"black",
    textAlign:"left",
}


export default SideBar;