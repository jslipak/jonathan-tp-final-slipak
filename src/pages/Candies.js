import React, { useState } from 'react';
import ItemListContainer from '../components/ItemListContainer.js';
const GREETTING = `Bienvenidos a 80th food Store!`;

function Candies() {
  return (
    <div>
      <ItemListContainer saludo={GREETTING} />
    </div>
  );
}

export default Candies;
