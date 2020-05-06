import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {PropertyGet} from '../Common/Properties'

// import { Connect } from '../Common/Connect'


class Login extends Component{
    state = {
        userName: '',
        password: '',
        message: '',
    }

    constructor(props){
        super(props);
        this.userName = React.createRef();
        this.passWord = React.createRef();
        // this.message  = React.createRef(); 
    }

    loginAPI = (user, pass)=>{
        const jsonStr = '{"username": "'+user+'",\n "password":"'+pass+'"}'; 
        const loginUrl = PropertyGet({key:'loginURL'})
        fetch(loginUrl , {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: jsonStr
        }).then((response) => response.json())
        .then(json =>{
            const apiToken = json["token"];
            if (apiToken){
                localStorage.setItem('token', apiToken);
            }else{
                console.log("Invalid Cred");
            }
        })
        .catch(this.setState( {message: "Invalid Credentials"}));         
    }   

    onSubmitClick =e =>{
        if(!this.validate())
            return;
        this.loginAPI(this.state.userName, this.state.password); 
    }

    onRegisterClick =e =>{
        console.log("to register page");
    }

    onKeyEnter =e =>{
        if (e.charCode === 13){
            this.onSubmitClick(e);
        }
    }

    validate= () =>{
        if(this.state.userName.trim().length === 0){
             this.userName.current.focus();
             this.setState( {message: "Please enter user name"});
             return false;
        }else if(this.state.password.trim().length === 0){
                this.setState( {message: "Please enter password"});
                return false;    
        }
        return true;
    }

    render(){
        return(
            <div style={innerDivStyle}>
                <input id="userName" ref={this.userName} type="text" name="userName" placeholder="Username" onChange={(event)=> this.setState({userName: event.target.value,message:'',})}/>
                <input id="passWord" ref={this.passWord} type="password" name="password" placeholder="Paasword" onChange={(event)=> this.setState({password: event.target.value,message:'',})} onKeyPress={this.onKeyEnter}/> <br/>
                <div style={errorStyle}>{this.state.message}</div>
                <div><span style={spacerStyle}></span>
                <input type="Button" name="login" value="Sign In" onClick={this.onSubmitClick} readOnly/>
                <p>If not already a user <Link to="/register">Sign Up</Link></p>
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
    textAlign: "center",
    margin: "0 auto",
    padding:2,
    fontSize:12
}

const spacerStyle={
    textAlign:"right",
    display: "inline-block",
    paddingRight: 0,
    marginRight: 0,
}

const errorStyle={
    color:"red",
    fontSize:14,
    padding:0,
    margin:0,
    textAlign:"center",
    // backgroudColor:""
}
export default Login;