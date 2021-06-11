import React, { useState } from 'react';
import './ItemList.css';
import { CardDeck, Spinner } from 'react-bootstrap';
import Item from './Item.js';

const CHOCOLATE = [
  { id: 1, name: 'Bizniken', description: 'Rico choclate' },
  { id: 2, name: 'Dolca', description: 'Rico choclate' },
  { id: 3, name: 'Cabsha', description: 'Rico choclate' },
  { id: 4, name: 'Cabsha', description: 'Rico choclate' },
  { id: 5, name: 'Cabsha', description: 'Rico choclate' },
];

const ItemList = () => {
  const [items, setItems] = useState(0);

  let promise = new Promise((resolve, reject) => {
    resolve(
      setTimeout(function () {
        let itemsCounter = CHOCOLATE.length;
        setItems(itemsCounter);
      }, 2000),
    );
    reject(console.log('Error'));
  });

  promise.then(console.log('Create delay'));

  return (
    <CardDeck className="d-flex justify-content-around">
      {items > 0 ? (
        CHOCOLATE.map((item) => {
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

// ? se podrio hacer con useEffect
// useEffect(() => {
//const subscription = props.source.subscribe();
//return () => {
//// Clean up the subscription
//subscription.unsubscribe();
//};
//});
