import React, { useRef, useEffect, useState } from "react";

const images = [
  "/img/galeri1.jpg",
  "/img/galeri2.jpg",
  "/img/galeri3.jpg",
  "/img/galeri4.jpg",
];

const GaleriGrid = () => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const maxOffset = (images.length - 1) * window.innerWidth;
        return prev >= maxOffset ? 0 : prev + window.innerWidth;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    setOffset((prev) =>
      prev <= 0
        ? (images.length - 1) * window.innerWidth
        : prev - window.innerWidth
    );
  };

  const scrollRight = () => {
    setOffset((prev) => {
      const maxOffset = (images.length - 1) * window.innerWidth;
      return prev >= maxOffset ? 0 : prev + window.innerWidth;
    });
  };

  return (
    <div className="overflow-hidden w-full h-full">
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 h-full"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Galeri ${idx + 1}`}
            className="w-screen h-full object-cover flex-shrink-0"
            draggable={false}
          />
        ))}
      </div>
      {/* Panah kiri */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-gray-400 hover:bg-gray-500 text-white rounded-full p-3 transition-transform duration-200 hover:scale-110 z-10 flex items-center justify-center cursor-pointer"
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
        onClick={scrollRight}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-gray-400 hover:bg-gray-500 text-white rounded-full p-3 transition-transform duration-200 hover:scale-110 z-10 flex items-center justify-center cursor-pointer"
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
