"use client"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Link from "next/link";

export default function GalleryHeader(){
    return(<header>
        
        <Navbar expand="lg" className="bg-body-tertiary navbar">
          <Container fluid>
            <Navbar.Brand href="/">
              <Image src={"/moonk.png"} width={200} height={120} alt="logo" />
            </Navbar.Brand>
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
        
      </header>)
    
}