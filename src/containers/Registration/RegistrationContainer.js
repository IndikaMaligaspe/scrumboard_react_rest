import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {RegistrationScreenLayout} from '../../components/Layout/Layout';
import {PropertyGet} from '../../containers/Common/Properties'
import {RegistrationConfirmModel} from '../../components/Registration/ConfirmModel'
class RegistrationScreen extends Component{
    state ={
        user: {
           userName: '',
           passWord: '',
           passWordConf:'',
           firstName: '',
           lastName: '',
           email: '',    
        },
        validated:false,
        passwordConfMessage: 'Password Missmatch',
        emailMessage: 'Enter Valid Email',
        show: false,
        message: '',
        state: true,
        varient: "secondary",
    }

    constructor(props){
        super(props);
        this.handleFieldInput = this.handleFieldInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }
    
    handleClose(){
      this.setState({"show":false});
    }

    handleFieldInput(target, value){
      let user = this.state.user;
      if((target) && (value)){
              switch(target){
                case 1:user.userName = value;break; 
                case 2:user.passWord= value;break;
                case 3:user.passWordConf = value;break;
                case 4:user.firstName = value;break;
                case 5:user.lastName = value;break;
                case 6:user.email = value;break;      
            }
        }
        this.setState({"user":user});
    }

    validate(form){
      console.log(this.state.user.passWord);
      console.log(this.state.user.passWordConf);
      console.log(form.conpass);
      if (this.state.user.passWord !== this.state.user.passWordConf){
        this.setState({"passwordConfMessage":"Password mismatch"})
        form.conpass.value='';
        return false;
      }
      return true;    
    }

    handleSubmit = (event) => {
        // alert(event);
        
        const form = event.currentTarget;
        console.log(form.checkValidity());
        
        if ((!this.validate(form)) || (form.checkValidity() === false))
        { 
          event.preventDefault();
          event.stopPropagation();
          this.setState({"validated":true});
        }else{
          console.log("Save Data...") 
          event.preventDefault();
          event.stopPropagation(); 
          this.registerUser();
        }
    };

    registerUser(){
      let data = {};
      data.username = this.state.user.userName;
      data.password = this.state.user.passWord;
      data.first_name = this.state.user.firstName;
      data.last_name = this.state.user.lastName;
      data.email = this.state.user.email;
      data.is_active = false;

      let registUserAPIURL = PropertyGet({key:"registUserAPIURL"});
      let token = localStorage.getItem("token");
      if((registUserAPIURL) && (token)){
          fetch(registUserAPIURL,
                {method: 'POST',
                headers: {'Content-Type': 'application/json',
                'Authorization':'Token '+token
              },
              body: JSON.stringify(data)})
        .then(response=>response.json())
        .then((json)=>{
          this.setState({"show":true});
          this.setState({"state":true});
          this.setState({"varient":"secondary"});
          this.setState({"message":"Your registration is suucess. Please check your mail for activation."});
          
        })
        .catch((e)=>{
          console.log(e)
          this.setState({"show":true});
          this.setState({"state":false});
          this.setState({"varient":"danger"});
          this.setState({"message":"Your registration is failed. Please check the data you have eneterd."});
        });
      }
    }

    render(){
        return(
            <React.Fragment>
                <RegistrationScreenLayout
                    handleFieldInput={this.handleFieldInput}
                    handleSubmit={this.handleSubmit}
                    validated={this.state.validated}
                    passwordConfMessage={this.state.passwordConfMessage}
                    emailMessage={this.state.emailMessage}
                    USER_FIELDS_ENUM={USER_FIELDS_ENUM}>
                </RegistrationScreenLayout>
                <RegistrationConfirmModel
                    show={this.state.show}
                    message ={this.state.message}
                    varient = {this.state.varient}
                    handleClose={this.handleClose}>
                 </RegistrationConfirmModel>
            </React.Fragment>
            
        )
    }
}

export const USER_FIELDS_ENUM = {
    "USERNAME": 1,
    "PASSWORD": 2,
    "CONF_PASSWORD":3,
    "F_NAME":4,
    "L_NAME":5,
    "EMAIL": 6
}

export default withRouter(RegistrationScreen);