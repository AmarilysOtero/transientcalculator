// import React from "react";

// function Header() {
//   return (
//     <header>
//       <h1>TransientC</h1>
//     </header>
//   );
// }
//  <header>
//       <h1>
//         <HighlightIcon />
//         TransientC
//       </h1>
//     </header>
//export default Header;
import Container from "react-bootstrap/Container";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import HighlightIcon from "@material-ui/icons/Highlight";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/transient_logo.png";

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />{" "}
            TransientC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/examples">
                Try it!
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/documentation">
                Documentation
              </Nav.Link>
              <Nav.Link as={Link} to="/source">
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

export default Header;
