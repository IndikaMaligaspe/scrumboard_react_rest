import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import styled  from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color:white;
        }
    }

`;

export const NavigationBar = () => (
    <Styles>
        <Navbar exppand="lg">
            <Navbar.Brand href="/">ScrumBoard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/login">SignIn</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/register">SignUp</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/#">Config</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/#">Home</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);