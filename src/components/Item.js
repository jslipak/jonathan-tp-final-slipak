import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount.js';

function CardProduct() {
  return (
    <Card style={{ width: '18rem', margin: ' 10px auto' }}>
      <Card.Img variant="top" src="http://via.placeholder.com/100px100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ItemCount />
        <div style={{ margin: '10px auto' }}>
          <Button variant="primary">Agregar al carrito</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
