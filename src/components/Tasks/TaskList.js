import React from 'react'
import {Card, Container, Row, Col } from 'react-bootstrap'

export const TaskList = (props) =>(
  <Container>
      <Row>
          <Col lg={12}>
              <Card style={cardLayoutStyle}>
                <Card.Body>
                    <Card.Text>{props.task.name}</Card.Text>   
                    { (props.task.due) &&
                        <Card.Subtitle>Due- {props.task.due}</Card.Subtitle>
                    }
                    <Card.Subtitle style={{textAlign:"right", color:"blue"}}>{props.task.assigned}</Card.Subtitle>
                </Card.Body>
              </Card>
          </Col>
      </Row>
  </Container>
);

const cardLayoutStyle = {
    marginLeft:0, 
    marginTop:1,
    marginBottom:1,
    padding:0,
    cursor: "pointer",
}

