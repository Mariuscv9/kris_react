import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src={"/moonk.png"} width={200} height={120} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto navbar-nav">
              <Nav.Link className="nav-item" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" href="#link">
                Despre mine
              </Nav.Link>
              <Nav.Link className="nav-item" href="#link">
                Servicii
              </Nav.Link>
              <Nav.Link className="nav-item" href="#link">
                Lista preturi
              </Nav.Link>
              <Nav.Link className="nav-item" href="#link">
                Regulament
              </Nav.Link>
              <Nav.Link className="nav-item" href="#link">
                Lucrari recente
              </Nav.Link>
              <Nav.Link className="nav-item nav-link" href="#link">
                Galerie
              </Nav.Link>
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
              <li className="instabtn">
                {" "}
                <a href="https://wa.me/40770494715"></a>
              </li>
            </ul>
          </Col>
        </Container>
      </Navbar>
    </header>
  );
}
