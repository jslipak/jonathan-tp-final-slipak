import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Counter from './ItemCount.js';
import { useOrder, useOrderUpdate } from './CartContext';

function CardItem(props) {
  const order = useOrder();
  const setOrder = useOrderUpdate();
  const [counter, setCounter] = useState(0);

  function addOneItem() {
    return setCounter(counter + 1);
  }
  function subOneItem(event) {
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
      <Card.Img variant="top" src={props.photo} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Text>${props.price}</Card.Text>
        <Counter addItem={addOneItem} subItem={subOneItem} counter={counter} />

        <div
          className="d-flex mt-4 justify-content-around"
          style={{ margin: '10px auto' }}
        >
          <Button
            variant="secondary"
            as={Link}
            to={`/product/${props.productId}`}
          >
            Más Info
          </Button>
          {counter > 0 ? (
            <Button
              variant="primary"
              onClick={() =>
                setOrder(
                  props.productId,
                  props.title,
                  counter,
                  props.price,
                  props.thumb,
                )
              }
            >
              Agregar
            </Button>
          ) : (
            <Button variant="primary disabled">Agregar</Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardItem;

//TODO: --> mas info redirect and send full props to ren:den ItemDetail
//TODO: mandar un mensaje cuando agregas un item y volver el contador a 0 de ese item
//TODO: que tan estricto tengo que ser con el Stock
