import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload, FiBookOpen } from "react-icons/fi";
import profilePhoto from "../../Assets/profile-photo.png";

function Home() {
  return (
    <section className="home-page">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center g-5">
            <Col lg={7} className="home-header">
              <div className="eyebrow">ACADEMIC · RESEARCH · ENTREPRENEURSHIP</div>
              <h1 className="hero-title">Hello, I’m <span>Sanjana Hans.</span></h1>
              <div className="hero-role"><Type /></div>
              <p className="hero-summary">
                I am a Biology educator with a background in Biotechnology, senior-secondary teaching experience,
                and a growing research profile in life sciences.
              </p>
              <div className="hero-actions">
                <Link className="primary-btn" to="/about">Explore my profile <FiArrowRight /></Link>
                <Link className="secondary-btn" to="/research"><FiBookOpen /> Research</Link>
                <a className="secondary-btn" href="/sanjana-cv.pdf" target="_blank" rel="noreferrer"><FiDownload /> CV</a>
              </div>
              <div className="hero-highlights">
                <div><strong>9.75</strong><span>M.Sc. CGPA</span></div>
                <div><strong>3+ yrs</strong><span>Teaching experience</span></div>
                <div><strong>2024</strong><span>Published review article</span></div>
              </div>
            </Col>
            <Col lg={5} className="hero-visual">
              <div className="photo-card">
                <div className="photo-placeholder">
                  <img src={profilePhoto} alt="Sanjana Hans" className="profile-photo" />
                </div>
                <div className="photo-caption"><span>Biology · Biotechnology</span><b>Academic Portfolio</b></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <section className="home-about-section" id="profile">
        <Container>
          <Row className="align-items-start g-5">
            <Col lg={7}>
              <div className="eyebrow">A SHORT INTRODUCTION</div>
              <h2 className="section-title">I teach with curiosity, clarity and purpose.</h2>
              <p className="section-lead">
                I enjoy creating classrooms where students can connect biological concepts with practical observation,
                laboratory work and real-world applications. I combine structured lesson planning with interactive
                activities, regular assessment and individual academic support.
              </p>
            </Col>
            <Col lg={5}>
              <div className="profile-note">
                <span>CURRENT FOCUS</span>
                <h3>Teaching · Life Sciences · Research</h3>
                <p>My academic interests sit at the intersection of Biology, Biotechnology and science education.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}

export default Home;
