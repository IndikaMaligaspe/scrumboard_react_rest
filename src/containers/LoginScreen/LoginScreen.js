import React , { Component } from 'react';
import Login from '../../components/Login/Login';
import logo from '../../assets/logo.jpg';

class LoginScreen extends Component{
    render() {
        return (
            <div style={divStyle}>
                <img 
                    style={logoStyle}
                    src={logo}
                    alt="logo-sb2k">
                </img>
                <p> &nbsp; </p>
                <Login/>
            </div>
        );
    }
}

const logoStyle = {
    width:100, 
    position: "relative", 
    top: 20,
}

const divStyle = {
    leftMargin: 150,
    width: "30%",
    backgroundColor: "#999",
    align: "center",
    textAlign: "center",
    margin:"0 auto",
    top: 50,
    position: "relative",
    fontSize:14,
};

export default LoginScreen;