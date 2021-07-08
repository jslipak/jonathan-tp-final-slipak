import React from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList.js';
//import Jumbo from './Jumbo.js';
//const GREETTING = `Bienvenidos a 80th food Store!`;
//const DESCRIPTION = 'Lorem temporibus repellat obcaecati autem non Unde voluptates cum distinctio tenetur minus? Obcaecati facilis ex sapiente perspiciatis lorem natus Reiciendis et excepturi autem aspernatur quidem. Saepe officia amet fugit aspernatur.';
//const TEXTBTN = 'carrito';
//const URLBUTTON = '/cart';
const ItemListContainer = (props) => {
  return (
    <>
      {/*      <Jumbo
        title={GREETTING}
        description={DESCRIPTION}
        buttonText={TEXTBTN}
        urlButton={URLBUTTON}
      />
    */}
      <ItemList />
    </>
  );
};

export default ItemListContainer;
