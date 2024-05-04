"use client";
import data from "app/modules/listapreturi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Preturi from "app/components/Preturi";
import hourglass from "/public/hourglass.gif";
import important from "/public/important.png";

export default function listaPreturi() {
  return (
    <Container fluid="md" className="mt-5 mb-3">
      <span id="anchor3" className="anchor"></span>
      <div className="wrap-preturi">
        {" "}
        {data.map((data) => {
          return <Preturi key={data.id} {...data} />;
        })}
      </div>
      <Row className="text-center">
        <Col lg={6}>
         <div className="colextra">
         <h4>Extra manichiură</h4>
          <div className="aliniere">
          <h3>French Glass &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +80 Lei</h3>
          <h3>Incrustatie Cristale +50 Lei</h3></div>
         </div>
        </Col>
        <Col lg={6}>
          <div className="colextra">
          <h4>Extra pedichiură</h4>
          <h3>Curatare Onicoliza +50/70 Lei(per unghie)</h3>
          <p>Serviciile de pedichiura includ: curatarea bataturilor subunghiale, curatarea talpilor, aplicare crema hidratanta, profesionala si masaj al talpilor la sfarsitul</p>
          </div>
         
        </Col>
      </Row>
      <h3 className="text-center mt-4">MENTIUNI</h3>
      <Row className="mt-4">
        <Col lg={4}>
          <Row className="text-start">
            <Col xs={2} className="img-mentiuni-wrapper">
              <Image
                className="img-mentiuni"
                src={hourglass}
                width={50}
                alt="animated hourglass"
              />
            </Col>
            <Col xs={10}>
              <h5>
                Timpul pentru constructie sau intretinere gel poate varia intre
                2 si 5 ore in functie de complexitate.
              </h5>
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <h5>
            Modelul este inclus in pret si se realizeaza in limita timpului
            alocat.
          </h5>
          <h5 className="mt-3">
            Intretinerea gel include si corectia unghiilor daca este cazul.
          </h5>
        </Col>
        <Col lg={4}>
          <Row>
            <Col xs={10}>
              <h5>
                Daca aveti mai mult de 4 unghii rupte se considera a fi
                constructie.
              </h5>
            </Col>
            <Col xs={2} className="img-mentiuni-wrapper">
              <Image
                className="img-mentiuni"
                src={important}
                width={50}
                alt="exclamation mark"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
