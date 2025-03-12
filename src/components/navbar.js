import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Resume from "../pages/resumeNickGarza.pdf";
export default function Navigation() {
  return (
    <Navbar sticky="top" expand="lg">
      <Container>
        <Navbar.Brand class="brandName" href="/">
          Nick Garza
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <Nav>
            {/* <Nav.Link href="/about"> ABOUT</Nav.Link> */}
            <Nav.Link href={Resume}> RESUME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
