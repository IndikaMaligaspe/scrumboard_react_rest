import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Login extends Component{
    state = {
        userName: '',
        password: '',
    }
    onSubmitClick =e =>{
        localStorage.setItem('userName', this.state.userName);
        localStorage.setItem('password', this.state.password);
        console.log("to Home page");
    }

    onRegisterClick =e =>{
        console.log("to register page");

    }

    onKeyEnter =e =>{
        if (e.charCode === 13){
            this.onSubmitClick(e);
            console.log(e.target.value);
            
        }
    }
    render(){
        return(
            <div style={innerDivStyle}>
                <input type="text" name="userName" placeholder="User name" onChange={(event)=> this.setState({userName: event.target.value})}/>
                <input type="password" name="password" placeholder="Paas word" onChange={(event)=> this.setState({password: event.target.value})} onKeyPress={this.onKeyEnter}/> <br/>
                <div><span style={spacerStyle}></span>
                <input type="Button" name="login" value="Sign In" onClick={this.onSubmitClick} readOnly/>
                <p>If not alreay a user <Link to="/register">Sign Up</Link></p>
                </div>
            </div>
        )
    }
}


const innerDivStyle = {
    width:"40%",
    height:200,
    borer: 1, 
    backgroundColor: "#999",
    align: "center",
    margin: "0 auto",
    padding:2,
    textAlign: "left",
    fontSize:12
}

const spacerStyle={
    textAlign:"right",
    display: "inline-block",
    width:55,
    paddingRight: 0,
    marginRight: 0,
    // border: "1px solid green",
}

export default Login;