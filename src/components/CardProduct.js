import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function CardProduct() {
  const [counter, setCounter] = useState(0);

  function addOneItem(event) {
    console.log(event);
    return setCounter(counter + 1);
  }
  function subOneItem(event) {
    console.log(event);
    counter > 0
      ? setCounter(counter - 1)
      : console.log('tiene que ser mayor a 0');
  }
  return (
    <Card style={{ width: '18rem', margin: ' 10px auto' }}>
      <Card.Img variant="top" src="http://via.placeholder.com/100px100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success" onClick={addOneItem}>
          +
        </Button>
        <div>{counter}</div>
        <Button variant="danger" onClick={subOneItem}>
          -
        </Button>
        <div style={{ margin: '10px auto' }}>
          <Button variant="primary">Agregar al carrito</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
