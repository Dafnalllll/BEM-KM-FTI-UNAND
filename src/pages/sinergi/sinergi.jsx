import React, { useEffect, useState } from "react";
import NavbarSinergi from "../../components/navbarsinergi";
import kegiatan from "../../assets/dinassinergi/kegiatan/pelantikan.webp";
import kegiatan2 from "../../assets/dinassinergi/kegiatan/pelantikan2.webp";

const backgrounds = [kegiatan, kegiatan2];

export const Sinergi = () => {
  useEffect(() => {
    document.title = "Sinergi || BEM KM FTI UNAND";
  }, []);

  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Fungsi tombol panah dengan efek fade
  const changeBg = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setBgIndex(newIndex);
      setFade(false);
    }, 400); // durasi fade (ms)
  };

  const prevBg = () =>
    changeBg((bgIndex - 1 + backgrounds.length) % backgrounds.length);
  const nextBg = () => changeBg((bgIndex + 1) % backgrounds.length);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background dengan transisi fade */}
      <div
        className={`absolute inset-0 transition-opacity duration-400 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-gray-900/80 z-0 pointer-events-none" />
      {/* Konten utama */}
      <div className="relative z-10">
        <NavbarSinergi />
        <div className="h-screen flex flex-col items-center justify-center -mt-10 text-center">
          <h2 className="text-3xl md:text-2xl font-semibold font-[Carena] text-white mb-6 tracking-wide">
            SELAMAT DATANG DI
          </h2>
          <h1 className="text-6xl md:text-6xl font-extrabold text-white font-[Carena] mb-4 leading-tight font-montserrat">
            BEM KM FTI
          </h1>
          <h1 className="text-5xl md:text-4xl font-extrabold text-white mb-8 font-[Carena] leading-tight font-montserrat">
            Kabinet Sinergi
          </h1>
          <a
            href="#about"
            className="mt-4 px-8 py-3 border-2 border-yellow-400 rounded-lg text-2xl font-bold text-yellow-300 bg-transparent hover:bg-yellow-400 hover:text-blue-900 transition"
          >
            About Us
          </a>
        </div>
      </div>
      {/* Arrow Controls */}
      <button
        onClick={prevBg}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-blue-900/60 hover:bg-blue-900/80 text-yellow-400 rounded-full p-2"
        aria-label="Previous Background"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextBg}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-blue-900/60 hover:bg-blue-900/80 text-yellow-400 rounded-full p-2"
        aria-label="Next Background"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Sinergi;
