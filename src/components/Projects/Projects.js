import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiExternalLink, FiFileText } from "react-icons/fi";

function Projects() {
  return (
    <Container fluid className="inner-page research-page">
      <Container>
        <div className="page-intro">
          <div className="eyebrow">RESEARCH & REVIEW PUBLICATION</div>
          <h1 className="page-title">Research & Review Publication</h1>
          <p>My review publication reflects my academic interest in Biotechnology, cancer biology and contemporary life-science research.</p>
        </div>
        <Row className="g-4">
          <Col lg={8}>
            <article className="research-card featured-research">
              <div className="research-year">2024 · REVIEW PAPER</div>
              <h2>Prostate cancer biomarkers: from early diagnosis to precision treatment</h2>
              <p className="journal">Clinical and Translational Oncology</p>
              <p className="research-copy">A review of prostate cancer biomarkers, early diagnosis, PSA and emerging biomarker approaches supporting precision treatment.</p>
              <div className="authors"><span>Authors</span><p>Sanjana Hans · Versha Dhaiya · Ruchi Kumari · Gargi Bagchi</p></div>
              <div className="research-actions">
                <a className="primary-btn" href="/research/prostate-cancer-biomarkers.pdf" target="_blank" rel="noreferrer"><FiFileText /> View review paper</a>
                <a className="secondary-btn" href="https://doi.org/10.1007/s12094-024-03508-2" target="_blank" rel="noreferrer"><FiExternalLink /> DOI</a>
              </div>
            </article>
          </Col>
          <Col lg={4}>
            <div className="research-side">
              <span className="panel-kicker">CONTRIBUTION</span>
              <div className="contribution-stat">02<span>nd author</span></div>
              <p>Sanjana Hans and Ruchi Kumari are noted in the published review paper as having contributed equally to the work.</p>
              <div className="citation-box">Clinical and Translational Oncology<br/><b>2024</b></div>
            </div>
          </Col>
        </Row>
        <div className="research-note">
          <span className="panel-kicker">RESEARCH INTERESTS</span>
          <div className="chips"><span>Biotechnology</span><span>Biomarkers</span><span>Cancer Biology</span><span>Early Diagnosis</span><span>Precision Treatment</span></div>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
