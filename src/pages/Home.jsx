import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogoLoop from '../components/LogoLoop';
import { projects } from '../data/projects';
import CVFile from '../assets/CV_Alexandre_Lopere_MonMaster (3).pdf';

// Import icons
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap,
  SiTailwindcss, SiSass, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiLinkedin
} from 'react-icons/si';

const Home = () => {
  const techLogos = [
    { node: <SiHtml5 size={48} color="#fff" />, label: 'HTML5' },
    { node: <SiCss3 size={48} color="#fff" />, label: 'CSS3' },
    { node: <SiJavascript size={48} color="#fff" />, label: 'JavaScript' },
    { node: <SiReact size={48} color="#fff" />, label: 'React' },
    { node: <SiBootstrap size={48} color="#fff" />, label: 'Bootstrap' },
    { node: <SiTailwindcss size={48} color="#fff" />, label: 'Tailwind' },
    { node: <SiSass size={48} color="#fff" />, label: 'Sass' },
    { node: <SiFigma size={48} color="#fff" />, label: 'Figma' },
    { node: <SiAdobephotoshop size={48} color="#fff" />, label: 'Photoshop' },
    { node: <SiAdobeillustrator size={48} color="#fff" />, label: 'Illustrator' },
  ];

  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">


        <Row className="w-100 position-relative" style={{ zIndex: 1 }}>
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-3 fw-bold text-white mb-2">Alexandre Lopere</h1>
            <p className="text-secondary lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Bienvenue sur mon portfolio découvrez mes différents projets
            </p>
            <div className="d-flex gap-1 justify-content-center align-items-center mt-4 flex-wrap">
              <a href="mailto:loperealexandre@gmail.com" className="btn btn-light text-dark rounded-pill hero-contact-btn glow-btn px-5 py-3 fw-bold">Contacter</a>
              <a href={CVFile} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold">CV</a>
              <a href="https://www.linkedin.com/in/alexandre-lopere-303b3a294/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4 py-3 d-flex align-items-center justify-content-center">
                <SiLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </section>

      {/* Section Présentation */}
      <section className="mb-5 content-pad" id="about">
        <Row>
          <Col lg={8}>
            <h2 className="display-6 fw-bold text-white mb-4">À propos de moi</h2>
            <p className="text-secondary lead">
              Actuellement en 3ème année de BUT MMI, je suis passionné par le développement informatique et l'ingénierie web.
              Mon objectif est de concevoir des solutions modernes, performantes et intelligentes.
            </p>
          </Col>
        </Row>
      </section>

      {/* Section LogoLoop Full Width */}
      <div className="mb-5" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative', overflow: 'hidden' }}>
        <h3 className="text-center text-secondary small mb-4" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>Compétences</h3>
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={68} // Reduced by 30% (was 96)
          gap={56} // Reduced by 30% (was 80)
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#0f0f11"
          ariaLabel="Technology stack"
        />
      </div>

      {/* Section Projets */}
      <section className="mb-5 content-pad" id="projects">
        <h2 className="display-6 fw-bold text-white mb-5">Mes projets</h2>

        <Row className="g-4">
          {projects.map((projet) => (
            <Col md={6} key={projet.id}>
              <Link to={`/project/${projet.id}`} className="text-decoration-none">
                <Card className="bg-dark text-white border-0 project-card h-100" style={{ minHeight: '400px' }}>
                  <Card.Img src={projet.img} alt={projet.title} className="h-100 w-100 object-fit-cover opacity-75 project-img" />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-between p-4">
                    <div className="text-end">
                      <span className="badge bg-black bg-opacity-50">{projet.year}</span>
                    </div>
                    <div className="project-overlay-content">
                      <Card.Title className="fs-2">{projet.title}</Card.Title>
                      <Card.Text className="small text-white-50 project-desc">
                        {projet.desc}
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Home;
