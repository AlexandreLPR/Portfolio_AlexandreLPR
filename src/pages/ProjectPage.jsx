import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { SiFigma } from 'react-icons/si';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));
    const [expandedImage, setExpandedImage] = useState(null);
    const scrollContainerRef = useRef(null);

    // Sécurité si l'ID n'existe pas
    if (!project) return <div className="text-white p-5">Projet introuvable</div>;

    // Filter out the current project to show others
    const otherProjects = projects.filter(p => p.id !== project.id);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const firstCard = scrollContainerRef.current.firstElementChild; // Get first card to measure width
            // Default to 40% viewport + gap if card not found (though it should be)
            const scrollAmount = firstCard ? firstCard.clientWidth + 24 : window.innerWidth * 0.4;
            scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const firstCard = scrollContainerRef.current.firstElementChild;
            const scrollAmount = firstCard ? firstCard.clientWidth + 24 : window.innerWidth * 0.4;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Container fluid className="py-5 content-pad">
            {/* Hero Section: Title, Desc, Button (Left) + Image (Right) */}
            <Row className="mb-5 gy-5 align-items-center">
                <Col lg={5}>
                    <h1 className="display-4 fw-bold mb-4">{project.title} <span className="fw-light text-white-50">{project.year}</span></h1>
                    <p className="text-light mb-4 lh-lg">
                        {project.fullDesc || project.desc}
                    </p>

                    <div className="d-flex gap-3 flex-wrap">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg rounded-pill px-4 text-dark fw-bold glow-btn">
                                Voir le site
                            </a>
                        )}
                        {project.figmaLink && (
                            <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg rounded-pill px-4 fw-bold">
                                Voir sur Figma
                            </a>
                        )}
                    </div>
                </Col>

                <Col lg={7}>
                    <div className="rounded-3 overflow-hidden" style={{ height: '400px' }}>
                        <img src={project.img} className="w-100 h-100 object-fit-cover" alt={project.title} />
                    </div>
                </Col>
            </Row>

            {/* Details Section: Missions & Tech (Below Hero) */}
            <Row className="mb-5 gy-5">
                <Col lg={6}>
                    {project.missions && (
                        <div className="mb-4">
                            <h4 className="h5 mb-4 text-white border-bottom border-secondary border-opacity-25 pb-2 d-inline-block">Missions du TP</h4>
                            <ul className="text-light list-unstyled">
                                {project.missions.map((mission, index) => (
                                    <li key={index} className="mb-3 d-flex align-items-start">
                                        <span className="me-2" style={{ color: '#7366e6' }}>•</span>
                                        {mission}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Col>

                <Col lg={6}>
                    {project.stack && (
                        <div className="mb-5">
                            <h4 className="h5 mb-4 text-white border-bottom border-secondary border-opacity-25 pb-2 d-inline-block">Technologies utilisées</h4>

                            {/* Design / Maquettage */}
                            {project.stack.design && (
                                <div className="mb-4">
                                    <strong className="text-white-50 d-block mb-3 small text-uppercase ls-1">Design & Prototypage</strong>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.stack.design.map((tech, i) => (
                                            <span key={`design-${i}`} className="badge text-white fw-normal px-3 py-2 rounded-pill"
                                                style={{
                                                    background: 'linear-gradient(135deg, #7366e6 0%, #8a66ff 100%)',
                                                    boxShadow: '0 4px 15px rgba(115, 102, 230, 0.3)'
                                                }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Développement */}
                            {project.stack.dev && (
                                <div className="mb-4">
                                    <strong className="text-white-50 d-block mb-3 small text-uppercase ls-1">Développement</strong>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.stack.dev.map((tech, i) => (
                                            <span key={`dev-${i}`} className="badge text-white fw-normal px-3 py-2 rounded-pill"
                                                style={{
                                                    background: 'linear-gradient(135deg, #7366e6 0%, #8a66ff 100%)',
                                                    boxShadow: '0 4px 15px rgba(115, 102, 230, 0.3)'
                                                }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Backend / 3D */}
                            {project.stack.backend && (
                                <div className="mb-4">
                                    <strong className="text-white-50 d-block mb-3 small text-uppercase ls-1">Backend / 3D</strong>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.stack.backend.map((tech, i) => (
                                            <span key={`back-${i}`} className="badge text-white fw-normal px-3 py-2 rounded-pill"
                                                style={{
                                                    background: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
                                                    boxShadow: '0 4px 15px rgba(76, 161, 175, 0.3)'
                                                }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tools */}
                            {project.stack.tools && (
                                <div className="mb-4">
                                    <strong className="text-white-50 d-block mb-3 small text-uppercase ls-1">Outils</strong>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.stack.tools.map((tech, i) => (
                                            <span key={`tool-${i}`} className="badge text-white fw-normal px-3 py-2 rounded-pill"
                                                style={{
                                                    background: 'linear-gradient(135deg, #424242 0%, #616161 100%)',
                                                    boxShadow: '0 4px 15px rgba(97, 97, 97, 0.3)'
                                                }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Accessibilité */}
                            {project.stack.accessibility && (
                                <div>
                                    <strong className="text-white-50 d-block mb-3 small text-uppercase ls-1">Accessibilité</strong>
                                    <div className="d-flex flex-wrap gap-2">
                                        {project.stack.accessibility.map((tech, i) => (
                                            <span key={`a11y-${i}`} className="badge text-white fw-normal px-3 py-2 rounded-pill"
                                                style={{
                                                    background: 'linear-gradient(135deg, #7366e6 0%, #8a66ff 100%)',
                                                    boxShadow: '0 4px 15px rgba(115, 102, 230, 0.3)'
                                                }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Col>
            </Row>

            {/* Photo Gallery */}
            {project.gallery && (
                <section className="mb-5">
                    <h3 className="display-6 fw-bold text-white mb-5">Galerie du projet</h3>
                    <Row className="g-4">
                        {project.gallery.map((item, index) => {
                            const imgSrc = typeof item === 'string' ? item : item.img;
                            const imgDesc = typeof item === 'string' ? `Galerie ${index + 1}` : item.desc;

                            return (
                                <Col md={6} key={index}>
                                    <div
                                        className="mb-2 rounded-3 overflow-hidden"
                                        style={{ height: '350px' }}
                                        onClick={() => setExpandedImage(imgSrc)}
                                    >
                                        <img src={imgSrc} alt={imgDesc} className="w-100 h-100 object-fit-cover hover-scale transition-all" />
                                    </div>
                                    <p className="text-white-50 text-center small fst-italic">{imgDesc}</p>
                                </Col>
                            );
                        })}
                    </Row>
                </section>
            )}

            {/* Lightbox Overlay */}
            {expandedImage && (
                <div className="lightbox-overlay" onClick={() => setExpandedImage(null)}>
                    <img
                        src={expandedImage}
                        alt="Agrandissement"
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="btn btn-close btn-close-white position-absolute top-0 end-0 m-4"
                        onClick={() => setExpandedImage(null)}
                    ></button>
                </div>
            )}

            {/* Mes autres projets */}
            <section className="mt-5 pt-5 border-top border-secondary border-opacity-25 position-relative">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="display-6 fw-bold text-white mb-0">Mes autres projets</h2>
                    <div className="d-flex gap-2">
                        <Button
                            variant="outline-light"
                            className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px' }}
                            onClick={scrollLeft}
                        >
                            <FaChevronLeft />
                        </Button>
                        <Button
                            variant="outline-light"
                            className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px' }}
                            onClick={scrollRight}
                        >
                            <FaChevronRight />
                        </Button>
                    </div>
                </div>

                <div
                    className="d-flex flex-nowrap overflow-auto gap-4 pb-3 hide-scrollbar projects-scroll"
                    ref={scrollContainerRef}
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {otherProjects.map((projet) => (
                        <Link to={`/project/${projet.id}`} key={projet.id} className="text-decoration-none">
                            <Card className="bg-dark text-white border-0 project-card" style={{ height: '400px', minWidth: '350px' }}>
                                <Card.Img src={projet.img} alt={projet.title} className="h-100 w-100 object-fit-cover opacity-75 project-img" />
                                <Card.ImgOverlay className="d-flex flex-column justify-content-between p-4">
                                    <div className="text-end">
                                        <span className="badge bg-black bg-opacity-50">{projet.year}</span>
                                    </div>
                                    <div className="project-overlay-content">
                                        <Card.Title className="fs-3">{projet.title}</Card.Title>
                                        <Card.Text className="small text-white-50 project-desc">
                                            {projet.desc}
                                        </Card.Text>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </Container>
    );
};

export default ProjectPage;
