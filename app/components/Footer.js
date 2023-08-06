import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer>
      <Container fluid className="bg-dark footer-container">
        <p className="fw-lighter">
          © CK Nail Studio all rights reserved{" "}
          <span className="fw-semibold ms-4">Developed by Marius Enache</span>
        </p>
      </Container>
    </footer>
  );
}
