"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import pedi from "/public/pedi.jpg";
import unghii from "public/unghiimarmura.jpg";
import instrumentar from "public/instrumentar2.jpg";
import { motion } from "framer-motion";
export default function Servicii() {
  return (
    <Container fluid="md" className="container-servicii mt-5 mb-5">
      <span id="anchor2" className="anchor"></span>
      <Row>
        <Col md={4}>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            viewport={{ once: true }}
            variants={{
              hide: {
                opacity: 0,
                transition: "all 0.7s ease-out",
              },
              show: {
                opacity: 1,
                transition: {
                  duration: 1.5,
                },
              },
            }}
          >
            <Image src={unghii} alt="picture of nails" />
            <h2 className="mt-3">MANICHIURA </h2>
            <p>
              Servicii de manichiura tehnica cu o selectie de peste 100 de
              nuante si o mare varitate de nail art
            </p>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            viewport={{ once: true }}
            variants={{
              hide: {
                opacity: 0,
                transition: "all 0.7s ease-out",
              },
              show: {
                opacity: 1,
                transition: {
                  duration: 1.5,
                },
              },
            }}
          >
            <Image src={pedi} alt="picture of nails" />
            <h2 className="mt-3">PEDICHIURA</h2>
            <p>
              Servicii de pedichiura dry cu ajutorul celor mai noi tehnici de
              curatare si estetica
            </p>
          </motion.div>
        </Col>
        <Col md={4}>
          {" "}
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            viewport={{ once: true }}
            variants={{
              hide: {
                opacity: 0,
                transition: "all 0.7s ease-out",
              },
              show: {
                opacity: 1,
                transition: {
                  duration: 1.5,
                },
              },
            }}
          >
            {" "}
            <Image src={instrumentar} alt="picture of utensils" />
            <h2 className="mt-3">STERILIZARE</h2>
            <p>
              Sterilizare si dezinfectare la nivel de cabinet medical realizate
              cu ajutorul autoclavului si a solutiilor dezinfectante avizate de
              Ministerul Sanatatii{" "}
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
