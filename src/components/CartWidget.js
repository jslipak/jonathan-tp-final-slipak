import React from 'react';
import './CartWidget.css';
import ShoppingCart from '../images/shopping-cart.svg';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Nav.Link as={Link} to="/cart" className="avatar">
      <img src={ShoppingCart} alt="cartWidget" className="iconSize" />
    </Nav.Link>
  );
};

export default CartWidget;
