import React, { useEffect, useState } from "react";
import KatakataGub from "../../components/sinergi/katakatagub";
import NavbarSinergi from "../../components/sinergi/navbarsinergi";
import FooterSinergi from "../../components/sinergi/footersinergi";
import StatsSinergi from "../../components/sinergi/statssinergi";
import kegiatan from "../../assets/dinassinergi/kegiatan/pelantikan.webp";
import kegiatan2 from "../../assets/dinassinergi/kegiatan/pelantikan2.webp";

const backgrounds = [kegiatan, kegiatan2];

export const Sinergi = () => {
  useEffect(() => {
    document.title = "Sinergi || BEM KM FTI UNAND";
  }, []);

  const [bgIndex, setBgIndex] = useState(0);
  const [prevBgIndex, setPrevBgIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeBg = (newIndex) => {
    setPrevBgIndex(bgIndex);
    setBgIndex(newIndex); // Langsung ganti background baru
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      setPrevBgIndex(null);
      setTimeout(() => {
        if (window.AOS && typeof window.AOS.refreshHard === "function") {
          window.AOS.refreshHard();
        }
      }, 50);
    }, 500); // durasi crossfade (ms)
  };

  const prevBg = () =>
    changeBg((bgIndex - 1 + backgrounds.length) % backgrounds.length);
  const nextBg = () => changeBg((bgIndex + 1) % backgrounds.length);

  return (
    <>
      {/* Section 1: Hero/Background */}
      <div className="relative min-h-screen w-full overflow-hidden pb-56">
        {/* Background baru */}
        <div
          className={`absolute inset-0 transition-transform duration-500`}
          style={{
            backgroundImage: `url(${backgrounds[bgIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: isTransitioning ? "scale(1.1)" : "scale(1)",
            zIndex: 1,
          }}
        />
        {/* Background lama (hanya saat transisi) */}
        {isTransitioning && prevBgIndex !== null && (
          <div
            className="absolute inset-0 transition-transform duration-500"
            style={{
              backgroundImage: `url(${backgrounds[prevBgIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: isTransitioning ? "scale(1)" : "scale(0.9)",
              zIndex: 2,
            }}
          />
        )}
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-gray-900/80 z-10 pointer-events-none" />
        {/* Konten utama */}
        <div className="relative z-20">
          <NavbarSinergi />
          <div
            key={bgIndex}
            className="h-screen flex flex-col items-center justify-center -mt-24 text-center"
          >
            <h2
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-3xl md:text-2xl font-normal text-white mb-6 tracking-wide"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              SELAMAT DATANG DI
            </h2>
            <h1
              data-aos="zoom-in"
              data-aos-duration="800"
              className="text-6xl md:text-6xl font-medium text-white mb-4 leading-tight"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              BEM KM FTI
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="800"
              className="text-5xl md:text-4xl font-medium text-white mb-8 leading-tight"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Kabinet Sinergi
            </h1>
            <a
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="800"
              href="#about"
              className="btn-fill-center mt-4 px-14 py-5 border border-yellow-200 text-sm font-bold text-yellow-200 bg-transparent transition-all duration-300 ease-in-out hover:text-black"
            >
              About Us
            </a>
          </div>
        </div>
        {/* Arrow Controls */}
        <button
          onClick={prevBg}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-gray-300 rounded-full p-10 cursor-pointer"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-gray-300 rounded-full p-10 cursor-pointer"
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

      {/* StatsSinergi mengambang di antara section */}
      <div
        className="relative z-10 flex justify-center"
        style={{ marginTop: "-100px" }}
      >
        <div className="w-full max-w-7xl">
          <StatsSinergi />
        </div>
      </div>

      <KatakataGub />

      {/* Section 2: Konten berikutnya */}
      <section className="relative z-10">
        {/* ...konten berikutnya... */}
      </section>

      <FooterSinergi />
    </>
  );
};

export default Sinergi;
