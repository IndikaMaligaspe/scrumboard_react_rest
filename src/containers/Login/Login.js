import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {PropertyGet} from '../Common/Properties';
import {LoginPageLayout} from '../../components/Layout/Layout';
import logo from '../../assets/logo.jpg';
import {  withRouter } from 'react-router-dom'



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
    }

    // using a promise to ensure the redirecting waits till server returns results
    loginAPI = (user, pass)=>{
        return new Promise ((resolve, reject) => {
                    const jsonStr = '{"username": "'+user+'",\n "password":"'+pass+'"}'; 
                    const loginUrl = PropertyGet({key:'loginURL'})
                    let response = '';
                    fetch(loginUrl , {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: jsonStr
                    }).then((response) => response.json())
                    .then(json =>{
                        const apiToken = json["token"];
                        if (apiToken){
                            localStorage.setItem('token', apiToken);
                            response =  PropertyGet({key:'homeURL'});
                            resolve(response);
                        }else{
                            console.log("Invalid Cred");
                            this.setState( {message: "Invalid Credentials"})
                            response = "Invalid Cred"
                            reject(response);
                        }
                    })
                    .catch(e => {
                        response = e.message
                        reject(response);
                });         
        });
    }   
    
    
    onSubmitClick =e =>{
        if(!this.validate())
            return;
        this.loginAPI(this.state.userName, this.state.password)
        .then(path=>{
            console.log(path);
            this.props.history.push(path);
        }).catch(error=>{
            console.log(error); 
        });
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
                <React.Fragment>     
                    <LoginPageLayout
                                    logo = {<img style={logoStyle} src={logo}  alt="logo-sb2k"/>} 
                                    username={<input id="userName" ref={this.userName} type="text" name="userName" placeholder="Username" onChange={(event)=> this.setState({userName: event.target.value,message:'',})}/>}
                                    password={<input id="passWord" ref={this.passWord} type="password" name="password" placeholder="Paasword" onChange={(event)=> this.setState({password: event.target.value,message:'',})} onKeyPress={this.onKeyEnter}/> }
                                    message={this.state.message}
                                    signIn={<button name="login" onClick={this.onSubmitClick}>Sign In</button>}
                                    signinLink={<p>If not already a user <Link to="/register">Sign Up</Link></p>}
                                 >
                    </LoginPageLayout>                 
                </React.Fragment>

            
        )
    }
}

const logoStyle = {
    width:100, 
    align: "center",
    paddingBottom: 10,
}
// esporting with Router in order to ensure I have page routing.
export default withRouter(Login);