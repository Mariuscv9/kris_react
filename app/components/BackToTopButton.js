"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"
import arrow from "public/arrow.svg"
import styles from "app/modules/BackToTopButton.module.css"; // CSS module for styling

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the user has scrolled down enough to show the button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.backToTopButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <Image src={arrow}
      alt="back to top arrow"
      width={50}
      height={50}
      />
    </div>
  );
};

export default BackToTopButton;
