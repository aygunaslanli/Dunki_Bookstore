import React from 'react';
import { Card,Col,Button } from 'react-bootstrap';

export default function SingleCard1(props) {
  return (
    <Col sm={12} md={3}>
      <Card>
        <Card.Img variant="top" src={props.photo} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.title}</Card.Text>
          <Card.Text>{props.price} $</Card.Text>
          <Button variant="dark">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}