import React from 'react';
import './CardProduct.css';
import { CardDeck } from 'react-bootstrap';
import CardProduct from './CardProduct.js';

const CardsContainer = (props) => {
  return (
    <CardDeck>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </CardDeck>
  );
};

export default CardsContainer;
