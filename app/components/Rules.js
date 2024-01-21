"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import wapp from "/public/wappbtn.png";
import insta from "/public/instagrambtn.png";
import Image from "next/image";

export default function Rules() {
  return (
    <Container className="reguli">
      <span id="anchor4" className="anchor"></span>
      <Row>
        <Col md={6}>
          {" "}
          <h3 className="fw-light text-center mt-5 mb-4">REGULI</h3>
          <ul>
            <li>
              Timpul meu de lucru este de +/- 2 ore, în funcție de complexitate.
              Am rugămintea să aveți răbdarea necesară pentru a vă putea oferi
              manichiuri corecte din punct de vedere tehnic dar și cu un aspect
              impecabil.
            </li>
            <li>
              Vă rog să respectați termenul pentru întreținere de 3, maxim 4
              săptămâni astfel încât unghiile voastre să rămână sănătoase în
              continuare. Se aplică și la pedichiură!
            </li>
            <li>
              Vă rog să nu întârziați si nu veniti mai repede la programare!
              Daca avem programare la ora 10 de exemplu, va rog, veniti la ora
              stabilita. Pauzele, chiar si de 10 minute, sunt importante pentru
              mine. În cazul în care se întâmplă sa intarziati, din păcate, va
              trebui să eliminăm anumite elemente din manichiură (design,
              culoare). La întârzierile mai mari de 30 de minute, programarea va
              fi anulată.
            </li>
            <li>
              Programările se anulează cu cel puțin 24 ore înainte. La 2 anulari
              consecutive colaborarea noastra se va incheia.
            </li>
            <li>
              Daca anulati in aceeasi zi, la urmatoarea voastra programare, veti
              plati si jumatate din serviciul anulat.
            </li>
            <li>
              Vă rog să încercați să veniți cât de cât hotărâte în privința
              modelului, culorii etc.
            </li>
            <li>
              {" "}
              NU execut tehnici / forme incorecte sau necompatibile cu patul
              vostru unghial! Nu accept insistențe pe acest aspect.
            </li>
            <li>
              {" "}
              Având în vedere că salonul este micuț, am rugămintea să veniți
              neînsoțite.
            </li>
            <li>Programările se fac din timp, minim o luna inainte!.</li>
            <li>
              Dacă doriți design neapărat, vă rog să mă anunțați atunci cand va
              faceti programare pentru a vă putea aloca mai mult timp în
              programator.
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <h3 className="fw-light text-center mt-5 mb-4">INFORMATII</h3>
          <ul>
            <li>
              Cu o zi inainte de programare veti primi un mesaj de confirmare
              pana la ora 21, am rugamintea sa raspundeti la acest mesaj
              confirmand sau infirmand programarea; daca nu primesc raspuns la
              acest mesaj, programarea va fi automat anulata.
            </li>
            <li>Daca aveti unghii lipsa, va rog sa ma anuntati.</li>
            <li>
              {" "}
              Pentru programari sau alte nelămuriri raspund doar la mesaje, nu
              pot vorbi la telefon in timp ce lucrez.
            </li>
            <li>
              Nu fac constructii lungi (balerina, migdala ruseasca etc), doar
              unghii mini si medii.
            </li>
            <li>
              NU fac constructii pe unghii roase , doar protezare pentru a
              reface patul unghial.
            </li>
            <li>
              Atunci când doriți să vă faceți programare sau să cereți detalii,
              o puteti face prin dm pe instagram accesand
              butonul: 
            </li>
          </ul>
          <div className="info-socials">
            
            <a
              className="nav-link"
              href="https://www.instagram.com/ck.manicure/"
            >
              <Image src={insta} alt="instagram" />
            </a>
          </div>
          <ul className="pt-4">
            <h5 className="fw-bold">
              <span className="exclamare">!</span> Când doriți o programare, vă rog, să îmi lăsați următoarele
              detalii:
            </h5>
            <li>Numele complet;</li>
            <li>Data și ora la care vreți programare;</li>
            <li>Ce fel de serviciu vă doriți;</li>
            <li>
              {" "}
              O poza cu unghiile voastre actuale (în cazul în care veniți pentru
              prima oară)
            </li>
            <h5>
              <span className="exclamare">‼</span> Clientele noi platesc un avans de 50% din valoarea serviciului
              programat. Avansul nu este returnabil decat in cazul anularii cu
              minim 24 de ore inainte.
            </h5>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
