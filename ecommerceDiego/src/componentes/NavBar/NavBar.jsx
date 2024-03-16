
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../../../img/Logo.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">VER TODO</a>
            </li>
            <li className="nav-item">
              <a href="/category/ProductosFaciales" className="nav-link">Productos faciales</a>
            </li>
            <li className="nav-item">
              <a href="/category/ProductosCorporales" className="nav-link">Productos corporales</a>
            </li>
          </ul>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
