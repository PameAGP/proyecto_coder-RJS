
import {CartWidget } from "./CartWidget"

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
      <Navbar.Brand href="#">Pelu Peluquería</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="container me-auto my-2 my-lg-0"
          style={{ maxHeight: '500px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Inicio</Nav.Link>
          <Nav.Link href="#action2">Damas</Nav.Link>
          <Nav.Link href="#action2">Cabelleros</Nav.Link>
          <Nav.Link href="#action2">Niños</Nav.Link>
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

// export const NavBar = () => {
//     return (
//         <header>
//         <nav class="navbar navbar-expand-md navbar-dark bg-black">
//         <div class="container-fluid">
//           <div class="container containerBC">
//           <p id="bienvenidaCliente" class='texto-blanco bienvenidoCliente'></p>
//           </div>
//           <a class="navbar-brand" href="./index">Peluquería Nico's</a>
          
//           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
//             aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//             <div class="offcanvas-header bg-black">
//               <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>
//             <div class="offcanvas-body bg-black">
//               <ul class="navbar-nav flex-grow-1 pe-3">
//                 <li class="nav-item">
//                   <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="./index">Mujer</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="./index">Hombre</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="./index">Niños</a>
//                 </li>
//                 <li class="nav-item dropdown">
//                   <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
//                     aria-expanded="false">
//                     Usuario
//                   </a>
//                   <ul id="sesionOp" class="dropdown-menu bg-black ">
                    
//                   </ul>
//                 </li>
//                 <li class="nav-item">
//                 <button id="cargar-carrito" class="bg-black btn btn-primary" type="button" data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
//             <CartWidget/>
//         </button>
//                 </li>
//               </ul>
    
//             </div>
//           </div>
//         </div>
//       </nav>
//       </header>
//     )
// }