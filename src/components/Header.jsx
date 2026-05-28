import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" className="py-4">
      <Container fluid className="content-pad">
        <Link to="/" className="navbar-brand fs-2 glow-text-logo">AL</Link>
        <Nav className="ms-auto gap-4">
          <Nav.Link href="#projects" className="text-white-50">Mes projets</Nav.Link>
          <Nav.Link href="#about" className="text-white-50">À propos de moi</Nav.Link>
          <Nav.Link href="#contact" className="text-white-50">Me contacter</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;