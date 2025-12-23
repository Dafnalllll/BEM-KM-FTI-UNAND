import React, { useState, useEffect } from "react";
import BinaDesa from "../../../assets/dinasnexus/kegiatan/sosmasling/binadesa.webp";
import EdukasiMuda from "../../../assets/dinasnexus/kegiatan/sosmasling/edukasimuda.webp";
import FtiAksiPeduli from "../../../assets/dinasnexus/kegiatan/sosmasling/aksipeduli.webp";
import RamdahanBerkah from "../../../assets/dinasnexus/kegiatan/sosmasling/ramadhanberkah.webp";
import CiptaDunia from "../../../assets/dinasnexus/kegiatan/sosmasling/ciptadunia.webp";
import CiptaDunia1 from "../../../assets/dinasnexus/kegiatan/sosmasling/ciptadunia1.webp";
import CiptaDunia2 from "../../../assets/dinasnexus/kegiatan/sosmasling/ciptadunia2.webp";
import SosmasConnect from "../../../assets/dinasnexus/kegiatan/sosmasling/connect.webp";
import SosmasConnect1 from "../../../assets/dinasnexus/kegiatan/sosmasling/connect1.webp";
import HijauBersamaFti from "../../../assets/dinasnexus/kegiatan/sosmasling/hijaubersamafti.webp";

const prokerList = [
  {
    title: "FTI AKSI PEDULI",
    desc: "Program ini dilakukan dengan cara pengumpulan dana sumbangan dari KM FTI, open donasi dari masyarakat umum dan Sosmasling sebagai perpanjangan tangan dari orang baik yang selanjutnya disalurkan kepada orang yang membutuhkan.",
    img: FtiAksiPeduli,
  },
  {
    title: "FTI CIPTA DUNIA",
    desc: "Program ini dibuat untuk memperingati hari besar sosial dengan postingan di Instagram ",
    img: [CiptaDunia, CiptaDunia1, CiptaDunia2],
  },
  {
    title: "RAMADHAN BERKAH ",
    desc: "Program ini berupa kegiatan berbagi takjil atau makanan yang diberikan kepada masyarakat umum sebelum berbuka puasa.",
    img: RamdahanBerkah,
  },
  {
    title: "FTI EDUKASI MUDA",
    desc: "Program ini berfokus untuk memberikan motivasi dan edukasi yang menyenangkan kepada anak-anak. Program ini dilakukan 3-4 pertemuan untuk meperdalam ilmu edukasi yang diberikan dan di review pada setiap pertemuannya.",
    img: EdukasiMuda,
  },
  {
    title: "HIJAU BERSAMA FTI ",
    desc: "Program ini berupa kegiatan yang bertujuan untuk meningkatkan kesadaran dan partisipasi dalam menjaga lingkungan sekitar.",
    img: HijauBersamaFti,
  },
  {
    title: "SOSMASLING CONNECT",
    desc: "Sosmasling Connect adalah program yang berfokus pada pengembangan jaringan relasi Dinas Sosmasling BEM KM FTI UNAND. Program ini terbuka dan bertujuan untuk kolaborasi dan kerja sama antar lembaga.",
    img: [SosmasConnect, SosmasConnect1],
  },
  {
    title: "FTI BINA DESA ",
    desc: "Program ini direncanakan sebagai salah satu perwujudan Tri Dharma perguruan tinggi, yaitu pengabdian kepada masyarakat. Program ini akan berfokus pada bidang TI, pendidikan, dan pemberdayaan masyarakat.",
    img: BinaDesa,
  },
];

const SosGrid = () => {
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
    // autoplay saat hover untuk item dengan minimal 2 gambar
    let timer;
    if (hovered !== null) {
      const item = prokerList[hovered];
      const imgs = Array.isArray(item?.img)
        ? item.img
        : item?.img
        ? [item.img]
        : [];
      if (imgs.length >= 2) {
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
        Proker Sosmasling
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {prokerList.map((proker, idx) => {
          const isArray = Array.isArray(proker.img);
          const images = isArray ? proker.img : proker.img ? [proker.img] : [];
          const currentIdx = slideIdx[idx] || 0;
          const isAnimating = animating[idx];
          const canSlide = images.length >= 2;

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
                    src={images[currentIdx] || ""}
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

                  {canSlide && (
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

export default SosGrid;
