import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBookOpen, FiAward, FiUsers } from "react-icons/fi";

function About() {
  return (
    <Container fluid className="inner-page">
      <Container>
        <div className="page-intro">
          <div className="eyebrow">ABOUT ME</div>
          <h1 className="page-title">Academic Profile</h1>
          <p>I am a Biology educator with postgraduate training in Biotechnology and experience across classroom, laboratory and coaching environments.</p>
        </div>

        <Row className="g-4 profile-grid">
          <Col lg={7}>
            <div className="glass-panel large-panel">
              <span className="panel-kicker">MY APPROACH</span>
              <h2>I believe good teaching makes difficult ideas feel understandable.</h2>
              <p>
                I use interactive explanations, smart-class resources, laboratory experiments, charts, graphs and
                frequent quizzes to help students build confidence in Biology. I also work closely with students who
                need additional support and track their progress over time.
              </p>
              <div className="mini-points">
                <span><FiBookOpen /> Concept-focused teaching</span>
                <span><FiUsers /> Individual student support</span>
                <span><FiAward /> Continuous assessment</span>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="glass-panel fact-panel">
              <span className="panel-kicker">ACADEMIC HIGHLIGHTS</span>
              <div className="fact"><strong>9.75</strong><span>M.Sc. Biotechnology · Amity University Haryana</span></div>
              <div className="fact"><strong>7.8</strong><span>B.Sc. Biotechnology Hons. · GJU</span></div>
              <div className="fact"><strong>73%</strong><span>B.Ed. · Bachelor of Education</span></div>
              <div className="fact"><strong>90.6%</strong><span>XII Science</span></div>
            </div>
          </Col>
        </Row>

        <section className="content-section">
          <div className="eyebrow">EDUCATION</div>
          <h2 className="section-title">Academic Journey</h2>
          <div className="academic-timeline">
            <div className="academic-item"><span>2022–2024</span><div><h3>B.Ed. — Bachelor of Education</h3><p>73%</p></div></div>
            <div className="academic-item"><span>2020–2022</span><div><h3>M.Sc. Biotechnology</h3><p>Amity University Haryana · CGPA 9.75</p></div></div>
            <div className="academic-item"><span>2017–2020</span><div><h3>B.Sc. Biotechnology Hons.</h3><p>Guru Jambheshwar University · CGPA 7.8</p></div></div>
            <div className="academic-item"><span>2014–2016</span><div><h3>XII Science</h3><p>Pioneer Convent School, Fatehabad · 90.6%</p></div></div>
          </div>
        </section>

        <section className="content-section">
          <div className="eyebrow">TEACHING EXPERIENCE</div>
          <h2 className="section-title">Classroom & Academic Experience</h2>
          <div className="experience-list">
            <article><div className="experience-meta">03/2022 — 03/2024</div><div><h3>PGT — Biology</h3><p className="org">Sanskar International School</p><ul><li>Taught +1 and +2 Biology classes across different learning levels.</li><li>Used smart-class technology and interactive activities.</li><li>Delivered practical learning through laboratory experiments, charts and graphs.</li><li>Supported students with challenging topics and monitored progress through weekly quizzes.</li></ul></div></article>
            <article><div className="experience-meta">04/2024 — 03/2025</div><div><h3>PGT — Biology</h3><p className="org">New SunRise Senior Secondary School, Bhuna</p></div></article>
            <article><div className="experience-meta">2 years</div><div><h3>Academic Coaching</h3><p className="org">Shiksha Hub, Bhuna</p><p>Ran a coaching centre, supporting students through focused academic guidance.</p></div></article>
          </div>
        </section>

        <section className="content-section">
          <div className="eyebrow">ACADEMIC ENTREPRENEURSHIP</div>
          <h2 className="section-title">Building learning beyond the classroom.</h2>
          <div className="entrepreneur-card">
            <div><span className="panel-kicker">SHIKSHA HUB · BHUNA</span><h3>Coaching Centre</h3><p>I ran a coaching centre for two years, creating a focused learning environment and providing students with additional academic guidance.</p></div>
            <div className="entrepreneur-badge">2 YEARS</div>
          </div>
        </section>

        <section className="content-section skills-section">
          <div className="eyebrow">SKILLS & CREDENTIALS</div>
          <div className="skill-columns">
            <div><h3>Teaching Skills</h3><div className="chips"><span>Communication</span><span>Planning</span><span>Organization</span><span>Digital Presentation</span><span>Student Support</span><span>Laboratory Teaching</span></div></div>
            <div><h3>Eligibility</h3><div className="chips"><span>HTET — TGT Science & PGT Biology</span><span>CTET Paper II</span><span>PSTET Paper II</span></div></div>
          </div>
        </section>

        <div className="page-cta"><div><span className="panel-kicker">NEXT</span><h3>Explore my research and publications.</h3></div><Link to="/research" className="primary-btn">View Research <FiArrowRight /></Link></div>
      </Container>
    </Container>
  );
}

export default About;
