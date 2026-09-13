import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Me.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // <-- Import Email Icon

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I developed a strong passion for programming and have acquired a solid foundation through continuous learning and hands-on experience... 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, R and Python. </b>
              </i>
              <br />
              <br />
              My field of Interests are&nbsp;
              <i>
                <b className="purple">Data Science, Machine Learning </b> and
                also in areas related to{" "}
                <b className="purple">Web Development.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing projects
              with <b className="purple">Python</b> and
              <i>
                <b className="purple"> it's modules</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> TensorFlow and Scikit-learn</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid circular-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AayushHans"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/AayushHans"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aayush-hans/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="hansaayush123@gmail.com" // <-- Replace with your email
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail /> {/* <-- Email Icon */}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
