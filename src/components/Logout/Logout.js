import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Card, Button, Form, Row, Col} from 'react-bootstrap'




const FormButton  = {
    textAlign:"right",
    paddingLeft:1,
    paddingRight:0,
    paddingTop:0,
    paddingBottom:0,
}

const LogoutCard = {
  position: "relative",
  top: 100,
}

class  LogoutView extends Component {

  state={
     canLogOut: false
  }

  logout(){
    localStorage.removeItem("token")
    this.props.history.push('\login');
  }

  componentDidMount(){
    let token = localStorage.getItem("token");
    console.log(token)
    if (token){
      this.setState({"canLogOut":true});
    }
  }

  render(){
  return (
     <React.Fragment>
         
           { (this.state.canLogOut) &&
             <Card style={LogoutCard}>
              <Card.Header>Logout</Card.Header>
              <Card.Body> Are you sure you want to sign out</Card.Body>
              <Card.Body>
                  <Form>
                      <Form.Group as={Row}>
                          <Col sm={8}>
                          </Col>
                          <Col sm={2} style={FormButton}>
                              <Button type="Button" name="" value="Logout" onClick={(e)=>{this.logout()}}>Logout</Button>
                          </Col>
                          <Col sm={2} style={FormButton}>    
                              <Button  name="" value="Go Back" onClick={(e)=>{window.history.go(-1);window.history.reload();}}>Go Back</Button>
                          </Col>
                      </Form.Group>
                  </Form>
              </Card.Body>
             </Card>
           }
           {
            (!this.state.canLogOut) &&  
            <Card style={LogoutCard}>
              <Card.Header>Logout</Card.Header>
              <Card.Body> You are not signed in, please sign in</Card.Body>
              <Card.Body>
                  <Form>
                      <Form.Group as={Col}>
                          <Col sm={8}>
                          </Col>
                          <Col sm={7} style={FormButton}>
                              <Button type="Button" name="" value="Logout" onClick={(e)=>{this.logout()}}>Sign in</Button>
                          </Col>
                      </Form.Group>
                  </Form>
              </Card.Body>
             </Card>
           }
     </React.Fragment>
   )    
  }
}

export default withRouter (LogoutView);