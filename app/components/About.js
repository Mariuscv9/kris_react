"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import profilebw2 from "/public/profilebw2.jpg";
export default function About() {
  return (
    <Container fluid="md" className="about mt-5 mb-5" >
      <span id="anchor1" className="anchor"></span>
      <Row>
        <Col lg={9}>
          {" "}
          <h2 className="h1">CSIKI KRISZTINA</h2>
          <h3>Nail Technician</h3>
          <p>
            Eu sunt Csiki Krisztina, am 26 de ani și sunt tehnician de unghii.
          </p>
          <p>
            Activez in acest frumos domeniu de 4 ani iar dorința mea a fost să
            creez un spațiu unde clienții mei sunt serviți exact asa cum mi-as
            fi dorit eu sa fiu servita iar serviciile sa fie de calitate, corect
            realizate și, bineînțeles, estetice.
          </p>
          <p>
            În munca mea de tehnician ador sa realizez manichiura slim deoarece
            oferă o finete si feminitate aparte dar imi place să fac și
            schimbări de arhitectura deoarece, de multe ori, acestea sunt
            adevăratele provocări. Cel mai mult ma definesc design-urile
            minimaliste dar si sa realizez french-ul mult iubit.
          </p>
        </Col>
        <Col lg={3}>
          <Image className="portret" src={profilebw2} alt="picture of me"/>
        </Col>
      </Row>
    </Container>
  );
}
