import React, { Component } from 'react';
import {PropertyGet} from '../Common/Properties';
import {LoginPageLayout} from '../../components/Layout/Layout';
import logo from '../../assets/logo.jpg';
import {  withRouter } from 'react-router-dom'



class Login extends Component{
    state = {
        userName: '',
        password: '',
        message: '',
        render: true,
    }

    constructor(props){
        super(props);

        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onKeyEnter = this.onKeyEnter.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
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
                        console.log(json);
                        const apiToken = json["token"];
                        if (apiToken){
                            localStorage.setItem('token', apiToken);
                            response =  PropertyGet({key:'homeURL'});
                            resolve(response);
                        }else{
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
    
    onUserNameChange(e){
        this.setState({"userName":e})
    }    
    
    onSubmitClick =e =>{
        if(!this.validate())
            return;
        this.loginAPI(this.state.userName, this.state.password)
        .then(path=>{
            this.props.history.push(path);
        }).catch(error=>{
            console.log(error); 
        });
    }
    
    onPasswordChange =e =>{
        this.setState({"password":e.target.value});
    }
    
    onKeyEnter =e =>{
        if (e.charCode === 13)
            this.onSubmitClick(e);
    }

    validate= () =>{
        if(this.state.userName.trim().length === 0){
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
                    <LoginPageLayout keyEnter={this.onKeyEnter} submitForm={this.onSubmitClick} 
                                      onUserNameChange={this.onUserNameChange} onPasswordChange={this.onPasswordChange}
                                      message={this.state.message}>
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