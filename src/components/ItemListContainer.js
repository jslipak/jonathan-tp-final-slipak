import React from 'react';
import ItemList from './ItemList.js';

const ItemListContainer = (props) => {
  console.log(props);
  return (
    <>
      <h2>{props.saludo}</h2>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
