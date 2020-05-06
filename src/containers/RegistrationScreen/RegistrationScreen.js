import React, {Component} from 'react'

class RegistrationScreen extends Component{
    

    render(){
        return (
            <div style={mainStyle}>
                <div style={innerDivStyle}>
                    {UserLogin}           
                    {UserProfile}
                </div>
            </div>
        )
    }
}
const mainStyle = {
    leftMargin: 150,
    top: 10,
    border: 1,
    width: "100%",
    position: "relative",
    padding:0,
    top:50,
};

const innerDivStyle = {
    width:"40%",
    height:400,
    borer: 1, 
    backgroundColor: "#999",
    align: "center",
    margin: "0 auto",
    padding:2,
    textAlign: "left",

}

const listStyle = {
    listStyle: "none",
    position: "relative",
    top: 0,
    padding: 0,
    topMargine:0,

};

const rowLabelStyle = {
    width:240,
    display: "inline-block",
    textAlign:"right",
    paddingRight:4,
    fontSize:12,
}

const rowInputlStyle = {
    width:200,
    display: "inline-block",
}


const fineTextStyle = {
    fontSize:10,
    paddingLeft: 240,
    width:"100%",
}

const barHeaderStyle = {
    width:"100%",
    backgroundColor:"#777",
    fontSize:14,
}

const linkStyle = {
    color:"#940",
    fontSize:12,
}

const spacerStyle={
    textAlign:"right",
    display: "inline-block",
    width:203,
    paddingRight: 0,
    marginRight: 0,
}

const UserLogin = (
    <div>
        <div>
            <label style={rowLabelStyle} id="id_username" readOnly>UserName:</label>
            <input style={rowInputlStyle} type="text" id="username" ></input>
            &nbsp;&nbsp;<a href="#" style={linkStyle}>Verify</a>
            <ul style={listStyle}>
                <li style={fineTextStyle} >Required. 150 characters or fewer.</li>
            </ul>
        </div>
        <div>
            <label style={rowLabelStyle} id="id_password" readOnly>Password:</label>
            <input style={rowInputlStyle} type="text" id="pasword"></input>
            <ul style={listStyle}>
                <li style={fineTextStyle}>Your password can’t be too similar to your other personal information.</li>
                <li style={fineTextStyle}>Your password must contain at least 8 characters.</li>
                <li style={fineTextStyle}>Your password can’t be a commonly used password.</li>
                <li style={fineTextStyle}>Your password can’t be entirely numeric.</li>
            </ul>
        </div>
        <div>
            <label  style={rowLabelStyle} id="id_password_conf" readOnly>Confirm Password:</label>
            <input style={rowInputlStyle}  type="text" id="password_conf"></input>
            <ul style={listStyle}>
                <li style={fineTextStyle}>Enter same password as before.</li>
            </ul>
        </div>

    </div>
);

const UserProfile = (
    <div>
        <h3 style={barHeaderStyle}>Personal Infroamtion</h3>
        <div>
            <label  style={rowLabelStyle} id="for_fname">First name :</label>
            <input  style={rowInputlStyle} type="text" id="fname"></input>
        </div>
        <div>
            <label  style={rowLabelStyle} id="for_lname">Last name :</label>
            <input  style={rowInputlStyle} type="text" id="lname"></input>
        </div>
        <div>
            <label  style={rowLabelStyle} id="for_email">Email address :</label>
            <input  style={rowInputlStyle} type="text" id="email"></input>
        </div>
        <div>
            <span style={rowLabelStyle}></span>
            <span style={spacerStyle}>
                <input type="Button" id="back" value="Go Back"></input>
                <input type="Button" id="submit" value="Register"></input>
            </span>
        </div>
    </div>
);


export default RegistrationScreen;