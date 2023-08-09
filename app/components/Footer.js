import Container from "react-bootstrap/Container";
export default function Footer() {
  return (
    <footer>
      <Container fluid className="bg-dark footer-container">
        <div className="footer">
        <p className="fw-lighter">
          © CK Nail Studio all rights reserved{" "}
        </p>
        <p className="fw-semibold ms-4">Developed by Marius Enache</p>
        </div>
      </Container>
    </footer>
  );
}
