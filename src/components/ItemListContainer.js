import React from 'react';
import CardsContainer from './CardsContainer.js';

const ItemListContainer = (props) => {
  console.log(props);
  return (
    <>
      <h2>{props.saludo}</h2>
      <CardsContainer />
    </>
  );
};

export default ItemListContainer;
