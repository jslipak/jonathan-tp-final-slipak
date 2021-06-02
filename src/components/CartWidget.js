import React from 'react';
import './CartWidget.css'
import  ShoppingCart from '../images/shopping-cart.svg';
import {  Nav  } from 'react-bootstrap';

const CartWidget = () => {
   return(
      <Nav.Link href="#orden" className="avatar"><img src={ShoppingCart} alt="cartWidget" className="iconSize" /></Nav.Link>
   )
}

export default CartWidget;
