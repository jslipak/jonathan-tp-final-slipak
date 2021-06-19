import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount.js';

function CardProduct(props) {
  return (
    <Card
      className="shadow-lg p-3 mb-5 bg-body rounded-4"
      style={{ width: '18rem', margin: ' 10px auto' }}
    >
      <Card.Img variant="top" src="http://via.placeholder.com/100px100" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <ItemCount />
        <div
          className="d-flex mt-4 justify-content-around"
          style={{ margin: '10px auto' }}
        >
          <Button variant="secondary" href="/product/test">
            Más Info
          </Button>
          <Button variant="primary">Comprar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;

//TODO: mas info redirect and send full props to renden ItemDetail
