import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Counter from './ItemCount.js';

function CardItem(props) {
  console.log(props);
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
  useEffect(() => {
    console.log('Change Counter State');
  });

  return (
    <Card
      className="shadow-lg p-3 mb-5 bg-body rounded-4"
      style={{ width: '18rem', margin: ' 10px auto' }}
    >
      <Card.Img variant="top" src="http://via.placeholder.com/100px100" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Counter addItem={addOneItem} subItem={subOneItem} counter={counter} />

        <div
          className="d-flex mt-4 justify-content-around"
          style={{ margin: '10px auto' }}
        >
          <Button
            variant="secondary"
            as={Link}
            to={{
              pathname: `/product/${props.productId}`,
              state: {
                text: props.text,
                title: props.title,
              },
            }}
          >
            Más Info
          </Button>
          {counter > 0 ? (
            <Button variant="primary">Comprar</Button>
          ) : (
            <Button variant="primary disabled">Comprar</Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardItem;

//TODO: --> mas info redirect and send full props to ren:den ItemDetail
