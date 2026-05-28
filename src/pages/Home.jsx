import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogoLoop from '../components/LogoLoop';
import { projects } from '../data/projects';
import CVFile from '../assets/CV_IMAC_Alexandre_Lopere.pdf';

// Import icons
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap,
  SiTailwindcss, SiSass, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiLinkedin,
  SiThreedotjs, SiUnity, SiBlender, SiUnrealengine, SiJava, SiTypescript,
  SiNodedotjs, SiSpringboot, SiDocker, SiGit, SiAdobeaftereffects
} from 'react-icons/si';

const Home = () => {
  const techLogos = [
    // 3D & Real-time Graphics
    { node: <SiThreedotjs size={48} color="#fff" />, label: 'Three.js' },
    { node: <SiUnity size={48} color="#fff" />, label: 'Unity' },
    { node: <SiBlender size={48} color="#fff" />, label: 'Blender' },
    { node: <SiUnrealengine size={48} color="#fff" />, label: 'Unreal Engine' },
    // Engineering Rigor
    { node: <SiJava size={48} color="#fff" />, label: 'Java' },
    { node: <SiTypescript size={48} color="#fff" />, label: 'TypeScript' },
    { node: <SiNodedotjs size={48} color="#fff" />, label: 'Node.js' },
    { node: <SiSpringboot size={48} color="#fff" />, label: 'Spring Boot' },
    { node: <SiDocker size={48} color="#fff" />, label: 'Docker' },
    { node: <SiGit size={48} color="#fff" />, label: 'Git' },
    // Web & Creative
    { node: <SiReact size={48} color="#fff" />, label: 'React' },
    { node: <SiFigma size={48} color="#fff" />, label: 'Figma' },
    { node: <SiAdobeaftereffects size={48} color="#fff" />, label: 'After Effects' },
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
              Actuellement en stage pour conclure ma 3ème année de BUT MMI, je suis passionné par l'ingénierie logicielle et les technologies interactives (Web, 3D). Afin d'allier définitivement rigueur technique et création visuelle, mon objectif est d'intégrer la formation d'ingénieur IMAC pour devenir ingénieur créatif.
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
