import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CVFile from '../assets/CV Alexandre Lopere Recherche de Stage (2).pdf';
import { SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="mt-auto border-top border-secondary py-5" id="contact">
      <Container fluid className="content-pad">
        <Row className="gy-4 align-items-center">
          <Col md={8} className="d-flex gap-3 flex-wrap align-items-center">
            <a href="mailto:loperealexandre@gmail.com" className="btn btn-light text-dark rounded-pill glow-btn px-5 py-3 fw-bold">loperealexandre@gmail.com</a>
            <a href={CVFile} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold">CV</a>
            <a href="https://www.linkedin.com/in/alexandre-lopere-303b3a294/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4 py-3 d-flex align-items-center justify-content-center">
              <SiLinkedin size={24} />
            </a>
          </Col>
          <Col md={4} className="text-md-end text-white-50">
            <small>@2026 Alexandre LOPERE</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
