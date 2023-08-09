"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import slide1 from "/public/ls1.jpeg";
import slide2 from "/public/ls2.jpeg";
import slide3 from "/public/ls3.jpg";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item className="carousel-item">
        <Image src={slide1} alt="picture of manicure" text="First slide" />
        <Carousel.Caption>
          <h3 className="carouselh3">
            You can't buy happiness but you can buy nail art and that's
            basically the same thing.
          </h3>
          <p className="carouselp">
            Alege culoarea care te face fericita dintr-o gama de peste 200 de
            culori.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Image src={slide2} alt="picture of manicure" text="Second slide" />
        <Carousel.Caption>
          <h3 className="carouselh3">
            Great nails don’t happen by chance, they happen by appointment.
          </h3>
          <p className="carouselp">
            Fa-ti o programare si hai sa iti punem idea pe unghii.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Image src={slide3} alt="picture of manicure" text="Third slide" />
        <Carousel.Caption>
          <h3 className="carouselh3">
            Your nails are a reflection of yourself.
          </h3>
          <p className="carouselp">Ofera un aspect impecabil unghiilor tale.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
