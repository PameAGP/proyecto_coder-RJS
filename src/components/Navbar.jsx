import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className="container-fluid bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">Pelu Peluquería</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="container me-auto my-2 my-lg-0"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="category/mujer">
              Damas
            </NavLink>
            <NavLink className="nav-link" to="category/hombre">
              Caballeros
            </NavLink>
            <NavLink className="nav-link" to="category/nino">
              Niños
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  );
};
