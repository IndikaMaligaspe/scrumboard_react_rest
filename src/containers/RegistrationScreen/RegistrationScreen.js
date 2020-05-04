import React, {Component} from 'react'

class RegistrationScreen extends Component{
    

    render(){
        return (
            <div style={mainStyle}>
                {UserLogin}           
                {UserProfile}
            </div>
        )
    }
}
const mainStyle = {
    leftMargin: 150,
    top: 10,
    border: 1,
    width: "60%",
    position: "relative",
    backgroundColor: "#999",
    align: "center",
    textAlign: "center",
};

const listStyle = {
    listStyle: "none",
    position: "relative",
    top: 0,
    padding: 0,
    topMarging:0,
    fontSize:10,
};

const UserLogin = (
    <div>
        <div>
            <label id="id_username" readOnly>UserName:</label>
            <input type="text" id="username" ></input>
            <ul style={listStyle}>
                <li>Required. 150 characters or fewer.</li>
            </ul>
        </div>
        <div>
            <label id="id_password" readOnly>Password:</label>
            <input type="text" id="pasword"></input>
            <ul style={listStyle}>
                <li>Your password can’t be too similar to your other personal information.</li>
                <li>Your password must contain at least 8 characters.</li>
                <li>Your password can’t be a commonly used password.</li>
                <li>Your password can’t be entirely numeric.</li>
            </ul>
        </div>
        <div>
            <label id="id_password_conf" readOnly>Password:</label>
            <input type="text" id="password_conf"></input>
            <ul style={listStyle}>
                <li>Enter same password as before.</li>
            </ul>
        </div>

    </div>
);

const UserProfile = (
    <div>
        <p>Personal Infroamtion</p>
        <div>
            <label id="for_fname">First name :</label>
            <input type="text" id="fname"></input>
        </div>
        <div>
            <label id="for_lname">Last name :</label>
            <input type="text" id="lname"></input>
        </div>
        <div>
            <label id="for_email">Email address :</label>
            <input type="text" id="email"></input>
        </div>
 
    </div>
);


export default RegistrationScreen;