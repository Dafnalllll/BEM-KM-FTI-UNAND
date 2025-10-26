import React, { useEffect, useState } from "react";
import Dump from "../../../assets/dinas nexus/nexus dump/adkesma/dump.webp";
import Dump1 from "../../../assets/dinas nexus/nexus dump/adkesma/dump1.webp";
import Dump2 from "../../../assets/dinas nexus/nexus dump/adkesma/dump2.webp";
import Dump3 from "../../../assets/dinas nexus/nexus dump/adkesma/dump3.webp";

const images = [Dump, Dump1, Dump2, Dump3];
const IMAGE_WIDTH = 900; // px

const AdkesmaGaleri = () => {
  const [index, setIndex] = useState(1);
  const [showArrows, setShowArrows] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      className="relative overflow-hidden w-[900px] max-w-full mx-auto h-[70vh] mt-12"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <div
        className={`flex h-full ${
          isTransitioning ? "transition-transform duration-700" : ""
        }`}
        style={{ transform: `translateX(-${index * IMAGE_WIDTH}px)` }}
      >
        {extendedImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Audkes Galeri ${idx}`}
            className="w-[900px] h-full object-cover flex-shrink-0 rounded-xl "
            draggable={false}
          />
        ))}
      </div>
      {/* Panah kiri */}
      <button
        onClick={() => handleScroll(-1)}
        className={`absolute top-1/2 left-6 -translate-y-1/2 bg-gray-400 hover:bg-gray-500 text-white rounded-full p-3 transition-opacity duration-300 z-10 flex items-center justify-center cursor-pointer ${
          showArrows ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Sebelumnya"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
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
        className={`absolute top-1/2 right-6 -translate-y-1/2 bg-gray-400 hover:bg-gray-500 text-white rounded-full p-3 transition-opacity duration-300 z-10 flex items-center justify-center cursor-pointer ${
          showArrows ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Selanjutnya"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
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

export default AdkesmaGaleri;
