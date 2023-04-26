import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">🎃 Pumpkin Gaming</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Plataformas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Playstation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Xbox</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget  cantCarrito={0}/>
    </Navbar>
    
  );
}

export default BasicExample;
