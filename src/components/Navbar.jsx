
import {CartWidget } from "./CartWidget"

import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="container-fluid bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Pelu Peluquería</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="container me-auto my-2 my-lg-0"
          style={{ maxHeight: '500px' }}
          navbarScroll
        >
          <NavLink className="nav-link" to="/">Inicio</NavLink>
          <NavLink className="nav-link" to="category/mujer">Damas</NavLink>
          <NavLink className="nav-link" to="category/hombre">Caballeros</NavLink>
          <NavLink className="nav-link" to="category/nino">Niños</NavLink>
          <NavDropdown title="Usuario" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Inicio de Sesión</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Registro
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Busqueda</Button>
        </Form>
      </Navbar.Collapse>
      <Nav>
      <CartWidget/>
      </Nav>
    </Container>
  </Navbar>
  )
}
