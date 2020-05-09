import React from 'react';
import {Container, Row, Col, Card, Badge} from 'react-bootstrap'



export const SprintCard = (props) =>(
    <Card style={cardLayoutStyle} onClick={()=>props.clickOnCard('/sprintDetails/'+props.sprint.id,props.sprint.id)}>
        <Card.Header>{props.sprint.name}</Card.Header>
        <Card.Body>
            <Card.Subtitle>Due- {props.sprint.end}</Card.Subtitle>
            <Card.Text>{props.sprint.description}</Card.Text>   
        </Card.Body>
        </Card>
);

export const SprintCardList = (props) =>(
    <Container>   
        <Row>
            <Col lg={12}><h5><Badge variant="secondary">{props.title}</Badge></h5></Col>
        </Row>         
        <Row>
            {props.sprintList.map((sprint) =>(
                <SprintCard sprint={sprint} key={sprint.id} clickOnCard={props.clickOnCard}></SprintCard>
            ))}
        </Row>
    </Container>
);

const cardLayoutStyle = {
    width: '12 rem', 
    marginLeft:10, 
    marginTop:10,
    marginBottom:10,
    cursor: "pointer",
}
