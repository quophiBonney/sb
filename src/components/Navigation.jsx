import React from "react";
import {Link} from "react-router-dom";
import "./Components.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {HiMenuAlt3} from "react-icons/hi";
function Navigation() {
  const handleLinkClick = () => {
    const navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle) {
      navbarToggle.click();
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top navbar">
      <Container>
        <Navbar.Brand href="/">
          <div>
            <p className="text-light logo">Kofi</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          id="navbar-toggle"
          aria-controls="responsive-navbar-nav"
          onFocus={e => e.target.blur()}
          style={{border: "0px", margin: "0px"}}
        >
          <span>
            <HiMenuAlt3
              className="toggleIcon"
              // style={{
              //   width: "1.6em",
              //   height: "1.6em",
              // }}
            />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="#about" onClick={handleLinkClick} className="m-2 navlink">
              About
            </Link>
            <Link
              to="#skills"
              onClick={handleLinkClick}
              className="m-2 navlink"
            >
              Skills
            </Link>
            <Link
              to="#projects"
              onClick={handleLinkClick}
              className="m-2 navlink"
            >
              Projects
            </Link>
            <Link
              to="#clones"
              onClick={handleLinkClick}
              className="m-2 navlink"
            >
              Clones
            </Link>
            <Link
              to="#contact"
              onClick={handleLinkClick}
              className="m-2 navlink"
            >
              Contact
            </Link>
            <Link to="/faqs" onClick={handleLinkClick} className="m-2 navlink">
              Faqs
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
