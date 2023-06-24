import React from "react";
import {Link} from "react-router-dom";
import NavCSS from "./Components.module.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {HiCode, HiMenuAlt3} from "react-icons/hi";
function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top"
      id={NavCSS.navbar}
    >
      <Container>
        <Navbar.Brand href="#home">
          <h4 className="text-uppercase text-light" id={NavCSS.logotext}>
            <HiCode className={NavCSS.code} />
            Solomon Bonney
          </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span>
            <HiMenuAlt3 className={NavCSS.toggleIcon} />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <div className={NavCSS.btnGroup}>
            <Link
              to="https://wa.me/+233596840018"
              className="btn"
              id={NavCSS.btnSearch}
            >
              Get In Touch
            </Link>
            <Link
              to="https://wa.me/+233596840018"
              className="btn"
              id={NavCSS.registerBtn}
            >
              Join My Community
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
