import React from 'react'
import {Modal , Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import TaskDetails from '../../components/Tasks/TaskDetails';


export function Tasks(props) {  
        console.log("add Task - "+props.addTask);
        return( 
            <React.Fragment>
                <TaskDetails  show={props.show} 
                            handleSave={props.handleSave} 
                            handleDelete={props.handleDelete}
                            handleClose = {props.handleClose}
                            handleShow = {props.handleShow}
                            updateState = {props.updateState}
                            setSelected = {props.setSelected}
                            start = {props.start}
                            task ={props.task}
                            users= {props.users}></TaskDetails>   
                {   (!props.addTask) &&
                    <Container>
                    <Row>
                        <Col lg={12}>
                            <Card style={cardLayoutStyle} onClick={props.handleShow}> 
                            <Card.Body>
                                <Card.Text>{props.task.name}</Card.Text>   
                                { (props.task.due) &&
                                    <Card.Subtitle>Due- {props.task.due}</Card.Subtitle>
                                }
                                { (props.task.assigned) &&
                                <Card.Subtitle style={{textAlign:"right", color:"blue"}}>{props.task.assigned}</Card.Subtitle>
                                }
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            }
            {
                 (props.addTask) &&
                 <div style={FooterLayoutStyle} onClick={props.handleShow}>[+] Add a Task</div>
            }
           </React.Fragment>
        )   
}

const cardLayoutStyle = {
    marginLeft:0, 
    marginTop:1,
    marginBottom:1,
    padding:0,
    cursor: "pointer",
}

const FooterLayoutStyle = {
    marginLeft:0, 
    marginTop:1,
    marginBottom:1,
    textAlign:"center",
    padding:0,
    cursor: "pointer",
}


export default Tasks;