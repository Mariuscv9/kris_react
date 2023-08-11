"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

export default function Preturi({ imgData, pret, serviciu }) {
  return (
    
      <div className="row-preturi">
        
          <Image
            className="img-preturi"
            src={imgData.src}
            width={imgData.width}
            height={imgData.height}
            alt={imgData.alt}
          />
        
        <div className="text-preturi">
          <h2>{serviciu}</h2>
          <p>{pret} Ron</p>
        </div>
      </div>
  
  );
}
