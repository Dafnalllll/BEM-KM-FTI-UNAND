import React, { useState, useEffect } from "react";
import FtiParade from "../../../assets/dinas nexus/kegiatan/internal/FTI Parade.webp";
import Bakti from "../../../assets/dinas nexus/kegiatan/internal/bakti.webp";
import JelajahLembaga from "../../../assets/dinas nexus/kegiatan/internal/jelajahlembaga.webp";
import TemuKoordinasi from "../../../assets/dinas nexus/kegiatan/internal/temukoordinasi.webp";
import Techtonic from "../../../assets/dinas nexus/kegiatan/ristek/techtonic.webp";
import Techtonic1 from "../../../assets/dinas nexus/kegiatan/ristek/techtonic1.webp";
import NexGO from "../../../assets/dinas nexus/kegiatan/internal/nexgo.webp";
import NexGo1 from "../../../assets/dinas nexus/kegiatan/internal/nexgo1.webp";

const prokerList = [
  {
    title: "TEMU KOORDINASI",
    desc: "Forum diskusi antara BEM KM FTI dan lembaga di FTI mengenai topik yang terkait dengan FTI. Dengan tujuan untuk menjalin komunikasi dan koordinasi antar lembaga FTI, serta sebagai sumber informasi untuk komunikasi antar lembaga FTI.",
    img: TemuKoordinasi,
  },
  {
    title: "JELAJAH LEMBAGA",
    desc: "Kegiatan ini berupa kegiatan kunjungan dan pengenalan struktur organisasi serta program kerja HIMA dan UKMF yang ada di Lingkungan FTI.",
    img: JelajahLembaga,
  },
  {
    title: "NEXGO",
    desc: "Kegiatan ini berupa kegiatan membersihkan PKM secara gotong royong yang dilakukan oleh seluruh anggota BEM KM FTI dan lembaga atau ukmf yang ada di FTI, yang juga untuk meningkatkan koordinasi dan menjaga kebersamaan.",
    img: [NexGO, NexGo1],
  },
  {
    title: "BAKTI FTI",
    desc: "Kegiatan BAKTI FTI bertujuan untuk mengembangkan mahasiswa serta pembekalan kepada mahasiswa baru terkait perkuliahan, fakultas, serta pengembangan diri.",
    img: Bakti,
  },
  {
    title: "FTI PARADE",
    desc: "Kegiatan mengantarkan wisudawan dari Ruang Audit menuju Seminar F oleh warga FTI, kegiatan ini bertujuan untuk sarana silaturahmi antara warga FTI dan juga wisudawan yang akan dilepas.",
    img: FtiParade,
  },
  {
    title: "INTIME FTI",
    desc: "Membuat sebuah kegiatan bersama yang diikuti oleh lembaga lembaga yang ada di FTI yang bertujuan untuk menjalin komunikasi dan koordinasi, serta sebagai sumber informasi untuk komunikasi antar lembaga FTI.",
    img: [Techtonic, Techtonic1],
  },
];

const IntGrid = () => {
  const [slideIdx, setSlideIdx] = useState({});
  const [animating, setAnimating] = useState({});
  const [hovered, setHovered] = useState(null);

  const handleSlide = (prokerIdx, dir, imgArrLength) => {
    setAnimating((prev) => ({ ...prev, [prokerIdx]: true }));
    setTimeout(() => {
      setSlideIdx((prev) => {
        const current = prev[prokerIdx] || 0;
        let next;
        if (dir === "prev") {
          next = current === 0 ? imgArrLength - 1 : current - 1;
        } else {
          next = current === imgArrLength - 1 ? 0 : current + 1;
        }
        return { ...prev, [prokerIdx]: next };
      });
      setAnimating((prev) => ({ ...prev, [prokerIdx]: false }));
    }, 250);
  };

  useEffect(() => {
    // autoplay saat hover untuk item dengan multiple images
    let timer;
    if (hovered !== null) {
      const item = prokerList[hovered];
      const imgs = Array.isArray(item.img) ? item.img : [item.img];
      if (imgs.length > 1) {
        timer = setInterval(
          () => handleSlide(hovered, "next", imgs.length),
          3200
        );
      }
    }
    return () => clearInterval(timer);
  }, [hovered]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-12">
      <h1
        className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center bg-clip-text font-[Carena] "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Proker Internal
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {prokerList.map((proker, idx) => {
          const isArray = Array.isArray(proker.img);
          const images = isArray ? proker.img : [proker.img];
          const currentIdx = slideIdx[idx] || 0;
          const isAnimating = animating[idx];
          const hasMultiple = images.length > 1;

          return (
            // AOS wrapper + full height so grid cells match
            <div
              key={`${proker.title}-${idx}`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={idx * 100}
              className="aos-wrapper h-full"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Inner card: full height and flex column so content stretches evenly */}
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] relative cursor-pointer h-full flex flex-col">
                <div className="relative w-full h-44 md:h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={images[currentIdx]}
                    alt={proker.title}
                    className={`w-full h-full object-cover transition-all duration-400 transform ${
                      isAnimating
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                    }`}
                    style={{ willChange: "opacity, transform" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute left-4 bottom-3 text-white">
                    <h3 className="text-lg font-semibold drop-shadow-md">
                      {proker.title}
                    </h3>
                  </div>

                  {hasMultiple && (
                    <>
                      <button
                        onClick={() => handleSlide(idx, "prev", images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                        aria-label="Sebelumnya"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15 19l-7-7 7-7"
                            stroke="white"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleSlide(idx, "next", images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                        aria-label="Selanjutnya"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            stroke="white"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2 z-20">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              setSlideIdx((prev) => ({ ...prev, [idx]: i }))
                            }
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              i === currentIdx
                                ? "bg-white scale-110"
                                : "bg-white/60"
                            }`}
                            aria-label={`Slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mt-1 hidden md:block">
                      {proker.desc}
                    </p>
                    <p className="text-sm text-gray-600 md:hidden">
                      {proker.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntGrid;
