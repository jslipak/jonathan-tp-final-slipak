import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { CardDeck, Spinner } from 'react-bootstrap';
import CardItem from './CardItem.js';

const ItemList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jslipak.github.io/data/chocolate.json')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log('catch:', err));
    }, 2000);
  }, []);

  return (
    <CardDeck className="d-flex justify-content-around">
      {data ? (
        data.map((item) => {
          console.log(item);
          return (
            <CardItem
              key={item.id}
              title={item.name}
              text={item.description}
              productId={item.id}
              price={item.precio}
              stock={item.stock}
              photo={item.photo_url}
              thumb={item.thumb}
            />
          );
        })
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </CardDeck>
  );
};

export default ItemList;
