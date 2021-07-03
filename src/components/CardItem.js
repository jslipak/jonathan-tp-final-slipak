import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Counter from './ItemCount.js';
import { useOrder, useOrderUpdate, useOrderChange } from './CartContext';

function CardItem(props) {
  const order = useOrder();
  const setOrder = useOrderUpdate();
  const updateOrder = useOrderChange();
  const [counter, setCounter] = useState(0);
  const alert = useAlert();

  function addOneItem() {
    return setCounter(counter + 1);
  }
  function subOneItem() {
    counter > 0
      ? setCounter(counter - 1)
      : console.log('tiene que ser mayor a 0');
  }
  function addItem(event) {
    event.preventDefault();
    const index = order.findIndex((element) => element.id === props.productId);
    if (index === -1) {
      setOrder(
        props.productId,
        props.title,
        counter,
        props.price,
        props.thumb,
        props.category,
      );
      alert.show(
        `Se a agredado al carrito:${props.title} con ${counter} unidades!`,
      );
    } else {
      const cantidad = order[index].quantity + counter;
      updateOrder(cantidad, index);
      alert.show(`Se sumaron ${counter} unidades a ${props.title}!`);
    }
    setCounter(0);
  }

  useEffect(() => {});
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
            <Button variant="primary" onClick={addItem}>
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
