import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Connect } from '../Common/Connect'


class Login extends Component{
    state = {
        userName: '',
        password: '',
    }

    csrfSafeMethod = (method) => {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/i.test(method));
    }

    getCookie = (name) =>{
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


    loginAPI = (user, pass)=>{
        const jsonStr = '{"username": "'+user+'",\n "password":"'+pass+'"}'; 
        fetch('http://localhost:8000/api/token/' , {
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
        .catch(console.log("Error while fetching"));         
    }   

    onSubmitClick =e =>{
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
    render(){
        return(
            <div style={innerDivStyle}>
                <input type="text" name="userName" placeholder="Username" onChange={(event)=> this.setState({userName: event.target.value})}/>
                <input type="password" name="password" placeholder="Paasword" onChange={(event)=> this.setState({password: event.target.value})} onKeyPress={this.onKeyEnter}/> <br/>
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