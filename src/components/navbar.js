import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Resume from "../pages/resume_thuyvynguyen.pdf";
export default function Navigation() {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      }}
    >
      <Container>
        <Navbar.Brand
          class="brandName"
          style={{
            color: "#ffc9b9",
            fontFamily: "Lobster",
          }}
          href="/"
        >
          Thuy-Vy Nguyen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <Nav>
            <Nav.Link href="/about"> about</Nav.Link>
            <Nav.Link href="/projects">projects</Nav.Link>
            <Nav.Link href={Resume}> experience </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
