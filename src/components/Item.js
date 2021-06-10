import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount.js';

function CardProduct(props) {
  return (
    <Card style={{ width: '18rem', margin: ' 10px auto' }}>
      <Card.Img variant="top" src="http://via.placeholder.com/100px100" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <ItemCount />
        <div style={{ margin: '10px auto' }}>
          <Button variant="primary">Agregar al carrito</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
