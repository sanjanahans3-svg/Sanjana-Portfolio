import React from "react";
import { Container } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div><strong>SANJANA HANS</strong><span>Academic Portfolio · Biology · Biotechnology</span></div>
        <div className="footer-links">
          <a href="mailto:sanjanahans3@gmail.com"><MdEmail /> sanjanahans3@gmail.com</a>
          <a href="https://www.linkedin.com/in/sanjana-hans" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
