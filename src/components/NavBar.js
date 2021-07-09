import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './Logo.js';
import CartWidget from './CartWidget.js';
import Envelop from '../images/email.svg';
import { useOrder } from './CartContext';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function NavBar() {
  let Order = useOrder();

  return (
    <Navbar collapseOnSelect expand="lg" className="Nav-Style" variant="dark">
      <Logo />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/types-candy">
            Productos
          </Nav.Link>
          <DropdownButton
            id="dropdown-item-button"
            title="Categorias"
            className="nav-link"
            variant="warning"
          >
            <Dropdown.Item as={Link} to="/category/Alfajores">
              Alfajores
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/category/Chocolates">
              Chocolates
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/category/Bombones">
              Bombones
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/category/Galletitas">
              Galletitas
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/category/Helados">
              Helados
            </Dropdown.Item>
          </DropdownButton>
          {Order.length > 0 ? <CartWidget /> : null}
          <Nav.Link as={Link} to="/contact">
            <img src={Envelop} alt="contactImages" className="EmailContact" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
