import Container from "react-bootstrap/Container";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Navbar
        className="navBG"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/src/components/Home.jsx">
            <HighlightIcon /> TransientC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Examples">
                Examples
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/Documentation">
                Documentation
              </Nav.Link>
              <Nav.Link as={Link} to="#source">
                Source
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </header>
  );
}

export default NavBar;
