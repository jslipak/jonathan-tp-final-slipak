import React from 'react';
import './CartWidget.css';
import ShoppingCart from '../images/shopping-cart.svg';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useOrder } from '../components/CartContext';

const CartWidget = () => {
  const Order = useOrder();
  const items = Order.reduce((acu, element) => acu + element.quantity, 0);
  return (
    <Nav.Link as={Link} to="/cart" className="avatar">
      <img src={ShoppingCart} alt="cartWidget" className="fa iconSize" />
      <span className="badge badge-warning" id="lblCartCount">
        {items}
      </span>
    </Nav.Link>
  );
};

export default CartWidget;
