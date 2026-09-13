import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const certificates = [
  { title: "National Service Scheme (NSS)", meta: "Participation Certificate · 2019", img: require("../../Assets/Certificates/01_nss.jpg") },
  { title: "Basic Computer Course", meta: "Nexus Institute of Computer Education · 2023", img: require("../../Assets/Certificates/02_basic_computer.jpg") },
  { title: "Japanese Language Course", meta: "Amity School of Languages · 2023", img: require("../../Assets/Certificates/03_japanese.jpg") },
  { title: "Behavioural Science Course", meta: "Amity Institute of Behavioural & Allied Sciences · 2023", img: require("../../Assets/Certificates/04_behavioral_science.jpg") },
];

function Certs() {
  return (
    <Container fluid className="inner-page certificates-page">
      <Particle />
      <Container>
        <div className="page-intro">
          <div className="eyebrow">CERTIFICATIONS & CREDENTIALS</div>
          <h1 className="page-title">Certificates</h1>
          <p>Selected academic, professional and co-curricular credentials.</p>
        </div>
        <Row className="g-4">
          {certificates.map((cert) => (
            <Col lg={6} key={cert.title}>
              <article className="certificate-card">
                <div className="certificate-heading"><div><span className="panel-kicker">CREDENTIAL</span><h2>{cert.title}</h2><p>{cert.meta}</p></div></div>
                <a href={cert.img} target="_blank" rel="noreferrer" className="certificate-image-wrap">
                  <img src={cert.img} alt={cert.title} />
                </a>
                <p className="certificate-hint">Click the certificate to view it full size.</p>
              </article>
            </Col>
          ))}
        </Row>
        <div className="credential-strip"><span>Also qualified:</span><b>CTET Paper II</b><b>PSTET Paper II</b><b>HTET TGT Science & PGT Biology</b></div>
      </Container>
    </Container>
  );
}

export default Certs;
