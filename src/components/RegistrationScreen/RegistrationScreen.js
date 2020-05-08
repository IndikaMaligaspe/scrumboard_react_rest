import React from 'react';
import {RegistrationScreenLayout} from '../../components/Layout/Layout';
import { Container, Row, Col } from 'react-bootstrap';

const RegistrationScreen =(props) =>(
            <RegistrationScreenLayout
                        cred={UserLogin}           
                        profile={UserProfile} > 
            </RegistrationScreenLayout>
);

const listStyle = {
    listStyle:"None",
    fontSize:10
};
const UserLogin = (
    <Container>
        <Row>
            <Col lg={4} style={{textAlign:"left"}}><label  id="id_username" readOnly>User name:</label></Col>
            <Col lg={7} style={{textAlign:"left"}}>
            <input  type="text" id="username" ></input>&nbsp;<a href="/">Verify</a></Col>
            <Col lg={1} style={{textAlign:"left"}}></Col>
        </Row>
        <Row>
            <Col lg={3} ></Col>    
            <Col lg={6} xs={0} style={{textAlign:"center"}}>
                <ul style={listStyle}>
                    <li >Required. 150 characters or fewer.</li>
                </ul>
            </Col>
            <Col lg={3}></Col>
        </Row>
        <Row>
            <Col lg={4} style={{textAlign:"left"}}>
                <label  id="id_password" readOnly>Password:</label>
            </Col>
            <Col lg={6} style={{textAlign:"left"}}>
                <input  type="text" id="pasword"></input>
            </Col>
            <Col lg={2}></Col>
        </Row>
        <Row>
            <Col style={{textAlign:"center"}}>
                <ul style={listStyle}>
                    <li >Your password can’t be too similar to your other personal information.</li>
                    <li >Your password must contain at least 8 characters.</li>
                    <li >Your password can’t be a commonly used password.</li>
                    <li >Your password can’t be entirely numeric.</li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col lg={4} style={{textAlign:"left"}}>
                <label   id="id_password_conf" readOnly>Confirm Password:</label>
            </Col>
            <Col lg={6} style={{textAlign:"left"}}>
                <input  type="text" id="password_conf"></input>
            </Col>
            <Col lg ={2}></Col>
        </Row>
        <Row>    
            <Col style={{textAlign:"center"}}>
                <ul style={listStyle}>
                    <li>Enter same password as before.</li>
                </ul>
            </Col>
        </Row>

    </Container>
);

const UserProfile = (
    <Container>
        <Row>
            <Col style={{textAlign:"left"}}><h3>Personal Infroamtion</h3></Col>
        </Row>
        <Row>
            <Col lg={4} style={{textAlign:"left"}}>
                <label  id="for_fname">First name :</label>
            </Col>
            <Col lg={6} style={{textAlign:"left"}}>
                <input  type="text" id="fname"></input>
            </Col>
            <Col lg={2}>
            </Col>
            
        </Row>
        <Row>
            <Col lg={4}  style={{textAlign:"left"}}>
                <label  id="for_lname">Last name :</label>
            </Col>
            <Col lg={6}  style={{textAlign:"left"}}>
                <input  type="text" id="lname"></input>
            </Col>
            <Col lg={2}></Col>
        </Row>
        <Row>
            <Col lg={4} style={{textAlign:"left"}}>
                <label  id="for_email">Email address :</label>
            </Col>
            <Col lg={6} style={{textAlign:"left"}}>
                <input  type="text" id="email"></input>
            </Col>
            <Col lg={2}></Col>
        </Row>
        <div>
            <span></span>
            <span>
                <input type="Button" id="back" value="Go Back"></input>
                <input type="Button" id="submit" value="Register"></input>
            </span>
        </div>
    </Container>
);
export default RegistrationScreen;