import React from 'react';
import './ItemList.css';
import { CardDeck } from 'react-bootstrap';
import Item from './Item.js';

const CardsContainer = (props) => {
  return (
    <CardDeck>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </CardDeck>
  );
};

export default CardsContainer;
