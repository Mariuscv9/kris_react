"use client"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={"/moonk.png"} width={200} height={120} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto navbar-nav">
              <Nav.Link className="nav-item" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" href="#anchor1">
                Despre mine
              </Nav.Link>
              <Nav.Link className="nav-item" href="#anchor2">
                Servicii
              </Nav.Link>
              <Nav.Link className="nav-item" href="#anchor3">
                Lista preturi
              </Nav.Link>
              <Nav.Link className="nav-item" href="#anchor4">
                Reguli si informatii
              </Nav.Link>
              <Nav.Link className="nav-item" href="#anchor5">
                Lucrari recente
              </Nav.Link>
              <Link className="nav-item nav-link" href="/gallery">
                Galerie
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Col lg={2} className="align-self-center pb-4">
            <ul className="socialbtn position-relative">
              <li className="wabtn">
                <a href="https://www.instagram.com/ck.manicure/"></a>
              </li>
              <li className="fbbtn">
                <a href="https://www.facebook.com/ck.manicure/"></a>
              </li>
              
            </ul>
          </Col>
        </Container>
      </Navbar>
    </header>
  );
}
