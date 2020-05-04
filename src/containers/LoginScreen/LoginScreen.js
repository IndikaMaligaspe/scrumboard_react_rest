import React , { Component } from 'react';
import Login from '../../components/Login/Login'

class LoginScreen extends Component{
    render() {
        return (
            <div style={divStyle}>
                <p> Login Page </p>
                <Login/>
            </div>
        );
    }
}

const divStyle = {
    leftMargin: 150,
    border: 1,
    width: "30%",
    position: "relative",
    backgroundColor: "#999",
    align: "center",
    textAlign: "center",

};

export default LoginScreen;