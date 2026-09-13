import React from "react";
import { Container } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

function ResumeNew() {
  return (
    <Container fluid className="inner-page cv-page">
      <Container>
        <div className="page-intro">
          <div className="eyebrow">CURRICULUM VITAE</div>
          <h1 className="page-title">My CV</h1>
          <p>A concise overview of my academic qualifications and professional experience.</p>
        </div>
        <div className="cv-actions"><a className="primary-btn" href="/sanjana-cv.pdf" target="_blank" rel="noreferrer"><FiDownload /> Download CV</a></div>
        <div className="cv-frame"><iframe title="Sanjana Hans CV" src="/sanjana-cv.pdf" /></div>
      </Container>
    </Container>
  );
}
export default ResumeNew;
