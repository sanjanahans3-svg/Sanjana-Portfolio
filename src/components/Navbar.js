import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineExperiment } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const handler = () => updateNavbar(window.scrollY >= 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => updateExpanded(false);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={close} className="d-flex align-items-center">
          <span className="brand-mark">SH</span>
          <span className="brand-text">SANJANA HANS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => updateExpanded(!expand)}>
          <span></span><span></span><span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item><Nav.Link as={Link} to="/" onClick={close}><AiOutlineHome /> Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/about" onClick={close}><AiOutlineUser /> About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/research" onClick={close}><AiOutlineExperiment /> Research</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/certs" onClick={close}><MdSchool /> Certificates</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/resume" onClick={close}><CgFileDocument /> CV</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
