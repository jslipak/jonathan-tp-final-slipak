import React from 'react';
import './ItemList.css';
import { CardDeck } from 'react-bootstrap';
import Item from './Item.js';

const CHOCOLATE = [
  { id: 1, name: 'Bizniken', description: 'Rico choclate' },
  { id: 2, name: 'Dolca', description: 'Rico choclate' },
  { id: 3, name: 'Cabsha', description: 'Rico choclate' },
  { id: 4, name: 'Cabsha', description: 'Rico choclate' },
  { id: 5, name: 'Cabsha', description: 'Rico choclate' },
];
const CardsContainer = (props) => {
  return (
    <CardDeck>
      {CHOCOLATE.map((item) => {
        return <Item key={item.id} title={item.name} text={item.description} />;
      })}
    </CardDeck>
  );
};

export default CardsContainer;
