import React from 'react';
import './NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from './Logo.js';
import CartWidget from './CartWidget.js';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Nav-Style" variant="dark">
      <Logo />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Alfajoras</Nav.Link>
          <Nav.Link href="#pricing">Caramelos</Nav.Link>
          <Nav.Link href="#deets">Chicles</Nav.Link>
          <Nav.Link href="#memes">Chocolates</Nav.Link>
          <Nav.Link href="#choco">Varios</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <CartWidget />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
