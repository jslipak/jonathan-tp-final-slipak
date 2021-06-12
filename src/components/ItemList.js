import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { CardDeck, Spinner } from 'react-bootstrap';
import Item from './Item.js';

const ItemList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(function () {
      fetch(
        'https://github.com/jslipak/jonathan-tp-final-slipak/chocolate.json',
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((err) => console.log('catch:', err));
    }, 2000);
  }, []);

  return (
    <CardDeck className="d-flex justify-content-around">
      {data ? (
        data.map((item) => {
          return (
            <Item key={item.id} title={item.name} text={item.description} />
          );
        })
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </CardDeck>
  );
};

export default ItemList;
