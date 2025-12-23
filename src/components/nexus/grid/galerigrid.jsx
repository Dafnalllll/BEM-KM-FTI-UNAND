import React, { useEffect, useState } from "react";
import Studio1 from "../../../assets/dinasnexus/kegiatan/studio1.webp";
import Funtime1 from "../../../assets/dinasnexus/kegiatan/audkes/funtime1.webp";
import Bakti from "../../../assets/dinasnexus/nexus dump/bakti.webp";
import Nexgo from "../../../assets/dinasnexus/nexus dump/nexgo.webp";
import SP from "../../../assets/dinasnexus/nexus dump/sp.webp";
import SP2 from "../../../assets/dinasnexus/nexus dump/sp2.webp";
import LKMM from "../../../assets/dinasnexus/nexus dump/lkmm.webp";
import Bakti1 from "../../../assets/dinasnexus/nexus dump/bakti1.webp";
import LKMM1 from "../../../assets/dinasnexus/nexus dump/lkmm1.webp";
import Himatekom from "../../../assets/dinasnexus/nexus dump/himatekom.webp";
import Zyrex from "../../../assets/dinasnexus/kegiatan/adkesma/sekawan.webp";
import Bakti2 from "../../../assets/dinasnexus/nexus dump/bakti2.webp";
import Sosmas from "../../../assets/dinasnexus/nexus dump/sosmas.webp";
import BemVisit from "../../../assets/dinasnexus/kegiatan/eksternal/bemvisit.webp";
import Parade from "../../../assets/dinasnexus/nexus dump/internal.webp";

const images = [
  Studio1,
  Funtime1,
  BemVisit,
  Zyrex,
  Sosmas,
  Bakti,
  LKMM,
  Parade,
  Himatekom,
  Nexgo,
  SP,
  SP2,
  Bakti1,
  LKMM1,
  Bakti2,
];

const IMAGE_WIDTH = 900; // px

const GaleriGrid = () => {
  const [index, setIndex] = useState(1);
  const [showArrows, setShowArrows] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Otomatis scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Fungsi scroll dengan looping
  const handleScroll = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => prev + direction);
  };

  // Reset posisi jika di duplikat
  useEffect(() => {
    if (!isTransitioning) return;
    let timeout = setTimeout(() => {
      setIsTransitioning(false);
      if (index === 0) {
        setIndex(images.length);
      } else if (index === images.length + 1) {
        setIndex(1);
      }
    }, 700); // durasi animasi
    return () => clearTimeout(timeout);
  }, [index, isTransitioning]);

  // Extended images untuk infinite loop
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  return (
    <div
      className="relative overflow-hidden w-[900px] max-w-full mx-auto h-[70vh]"
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
            alt={`Galeri ${idx}`}
            className="w-[900px] h-full object-cover flex-shrink-0 rounded-xl shadow-lg"
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

export default GaleriGrid;
