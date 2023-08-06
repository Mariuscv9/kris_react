"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

export default function Preturi({ imgData, pret, serviciu }) {
  return (
    <Col md={6} className="wrap-preturi mb-4">
      <Row>
        <Col xs={3} md={2}>
          <Image
            className="img-preturi"
            src={imgData.src}
            width={imgData.width}
            height={imgData.height}
            alt={imgData.alt}
          />
        </Col>
        <Col xs={9} md={10}>
          <Row className="text-pret">
            <Col>{serviciu}</Col>
            <Col className="dotdiv"></Col>
            <Col>{pret} Ron</Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
