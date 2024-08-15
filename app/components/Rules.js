"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion"; // Import Accordion component
import Image from "next/image";
import wapp from "/public/wappbtn.png";
import insta from "/public/instagrambtn.png";

export default function Rules() {
  return (
    <Container className="reguli mb-5">
      <span id="anchor4" className="anchor"></span>
      <Row>
        <Col md={6}>
          <h3 className="fw-light text-center mt-5 mb-4">REGULI</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Timpul meu de lucru</Accordion.Header>
              <Accordion.Body>
                Timpul meu de lucru este de +/- 2 ore, în funcție de complexitate.
                Am rugămintea să aveți răbdarea necesară pentru a vă putea oferi
                manichiuri corecte din punct de vedere tehnic dar și cu un aspect
                impecabil.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Respectați termenul pentru întreținere</Accordion.Header>
              <Accordion.Body>
                Vă rog să respectați termenul pentru întreținere de 3, maxim 4
                săptămâni astfel încât unghiile voastre să rămână sănătoase în
                continuare. Se aplică și la pedichiură!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Nu întârziați și nu veniți mai repede la programare!</Accordion.Header>
              <Accordion.Body>
                Vă rog să nu întârziați și nu veniți mai repede la programare!
                Dacă avem programare la ora 10, de exemplu, vă rog să veniți la ora
                stabilită. Pauzele, chiar și de 10 minute, sunt importante pentru
                mine. În cazul în care întârziați, din păcate, va trebui să eliminăm
                anumite elemente din manichiură (design, culoare). La întârzierile
                mai mari de 30 de minute, programarea va fi anulată.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Anulări</Accordion.Header>
              <Accordion.Body>
                Programările se anulează cu cel puțin 24 ore înainte. La 2 anulări
                consecutive, colaborarea noastră se va încheia.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Anulări în aceeași zi</Accordion.Header>
              <Accordion.Body>
                Dacă anulați în aceeași zi, la următoarea voastră programare, veți
                plăti și jumătate din serviciul anulat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Modelul dorit</Accordion.Header>
              <Accordion.Body>
                Vă rog să încercați să veniți cât de cât hotărâte în privința
                modelului, culorii etc.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>NU execut tehnici incorecte</Accordion.Header>
              <Accordion.Body>
                NU execut tehnici / forme incorecte sau necompatibile cu patul
                vostru unghial! Nu accept insistențe pe acest aspect.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Veniți neînsoțite</Accordion.Header>
              <Accordion.Body>
                Având în vedere că salonul este micuț, am rugămintea să veniți
                neînsoțite.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Programările se fac din timp</Accordion.Header>
              <Accordion.Body>
                Programările se fac din timp, minim o lună înainte!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>Designul unghiilor</Accordion.Header>
              <Accordion.Body>
                Dacă doriți design neapărat, vă rog să mă anunțați atunci când vă
                faceți programare pentru a vă putea aloca mai mult timp în
                programator.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col md={6}>
          <h3 className="fw-light text-center mt-5 mb-4">INFORMATII</h3>
          <Accordion defaultActiveKey="6">
          <Accordion.Item eventKey="6">
              <Accordion.Header>Detalii pentru programare</Accordion.Header>
              <Accordion.Body>
                <h5 className="fw-bold">
                  <span className="exclamare">!</span> Când doriți o programare, vă rog, să îmi lăsați următoarele detalii:
                </h5>
                <ul>
                  <li>Numele complet;</li>
                  <li>Data și ora la care vreți programare;</li>
                  <li>Ce fel de serviciu vă doriți;</li>
                  <li>O poză cu unghiile voastre actuale (în cazul în care veniți pentru prima oară)</li>
                </ul>
                <h5>
                  <span className="exclamare">‼</span> Clientele noi plătesc un avans de 50% din valoarea serviciului
                  programat. Avansul nu este returnabil decât în cazul anulării cu
                  minim 24 de ore înainte.
                </h5>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Confirmarea programării</Accordion.Header>
              <Accordion.Body>
                Cu o zi înainte de programare, veți primi un mesaj de confirmare
                până la ora 21. Am rugămintea să răspundeți la acest mesaj
                confirmând sau infirmând programarea; dacă nu primesc răspuns la
                acest mesaj, programarea va fi automat anulată.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Unghii lipsă</Accordion.Header>
              <Accordion.Body>
                Dacă aveți unghii lipsă, vă rog să mă anunțați.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Programări și nelămuriri</Accordion.Header>
              <Accordion.Body>
                Pentru programări sau alte nelămuriri răspund doar la mesaje. Nu
                pot vorbi la telefon în timp ce lucrez.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Construcții lungi</Accordion.Header>
              <Accordion.Body>
                Nu fac construcții lungi (balerina, migdala rusească etc.), doar
                unghii mini și medii.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Construcții pe unghii roase</Accordion.Header>
              <Accordion.Body>
                NU fac construcții pe unghii roase, doar protezare pentru a
                reface patul unghial.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Programări prin Instagram</Accordion.Header>
              <Accordion.Body>
                Atunci când doriți să vă faceți programare sau să cereți detalii,
                o puteți face prin DM pe Instagram accesând butonul:
                <div className="info-socials mt-4">
            <a
              className="nav-link"
              href="https://www.instagram.com/ck.manicure/"
            >
              <Image src={insta} alt="instagram" />
            </a>
          </div>
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
          {/* <div className="info-socials mt-4">
            <a
              className="nav-link"
              href="https://www.instagram.com/ck.manicure/"
            >
              <Image src={insta} alt="instagram" />
            </a>
          </div> */}
        </Col>
      </Row>
    </Container>
  );
}
