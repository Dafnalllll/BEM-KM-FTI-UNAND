import React, { useEffect, useState, useRef } from "react";
import Dump from "../../../assets/dinasnexus/nexus dump/medinkraf/dump.webp";
import Dump1 from "../../../assets/dinasnexus/nexus dump/medinkraf/dump1.webp";
import Dump2 from "../../../assets/dinasnexus/nexus dump/medinkraf/dump2.webp";
import Dump3 from "../../../assets/dinasnexus/nexus dump/medinkraf/dump3.webp";

const images = [Dump, Dump1, Dump2, Dump3];

const MedinkrafGaleri = () => {
  const [index, setIndex] = useState(1);
  const [showArrows, setShowArrows] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageWidth, setImageWidth] = useState(900);
  const galeriRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (galeriRef.current) {
        setImageWidth(galeriRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => prev + direction);
  };

  useEffect(() => {
    if (!isTransitioning) return;
    let timeout = setTimeout(() => {
      setIsTransitioning(false);
      if (index === 0) {
        setIndex(images.length);
      } else if (index === images.length + 1) {
        setIndex(1);
      }
    }, 700);
    return () => clearTimeout(timeout);
  }, [index, isTransitioning]);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  return (
    <div
      ref={galeriRef}
      className="relative overflow-hidden w-full max-w-[900px] mx-auto h-56 sm:h-72 md:h-[70vh] mt-12"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <div
        className={`flex h-full ${
          isTransitioning ? "transition-transform duration-700" : ""
        }`}
        style={{ transform: `translateX(-${index * imageWidth}px)` }}
      >
        {extendedImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Medinkraf Galeri ${idx}`}
            className="w-full h-full object-cover flex-shrink-0 rounded-xl"
            style={{ minWidth: imageWidth, maxWidth: imageWidth }}
            draggable={false}
          />
        ))}
      </div>
      {/* Panah kiri */}
      <button
        onClick={() => handleScroll(-1)}
        className={`absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 bg-gray-400 hover:bg-gray-500 text-white rounded-full p-2 sm:p-3 transition-opacity duration-300 z-10 flex items-center justify-center cursor-pointer ${
          showArrows ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Sebelumnya"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 19l-7-7 7-7"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Panah kanan */}
      <button
        onClick={() => handleScroll(1)}
        className={`absolute top-1/2 right-2 sm:right-6 -translate-y-1/2 bg-gray-400 hover:bg-gray-500 text-white rounded-full p-2 sm:p-3 transition-opacity duration-300 z-10 flex items-center justify-center cursor-pointer ${
          showArrows ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Selanjutnya"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 5l7 7-7 7"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MedinkrafGaleri;
