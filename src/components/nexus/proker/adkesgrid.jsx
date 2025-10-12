import React, { useState, useEffect } from "react";
import Sekawan from "../../../assets/dinas nexus/kegiatan/adkesma/sekawan.webp";
import Sekawan1 from "../../../assets/dinas nexus/kegiatan/adkesma/sekawan1.webp";
import Advotalk from "../../../assets/dinas nexus/kegiatan/adkesma/advotalk.webp";
import SahabatFTI from "../../../assets/dinas nexus/kegiatan/adkesma/sahabatfti.webp";
import PublicHearing from "../../../assets/dinas nexus/kegiatan/adkesma/publichearing.webp";
import NexCare from "../../../assets/dinas nexus/kegiatan/adkesma/nexcare.webp";
import InterScholar from "../../../assets/dinas nexus/kegiatan/adkesma/interscholar.webp";
import InterScholar1 from "../../../assets/dinas nexus/kegiatan/adkesma/interscholar1.webp";
import Ipkplus from "../../../assets/dinas nexus/kegiatan/adkesma/ipkplus.webp";
import Database from "../../../assets/dinas nexus/kegiatan/adkesma/database.webp";
import MabaCare from "../../../assets/dinas nexus/kegiatan/adkesma/mabacare.webp";
import Spotify from "../../../assets/socialmedia/spotify.webp";
import Gdrive from "../../../assets/socialmedia/gdrive.webp";

const prokerList = [
  {
    title: "SEKAWAN",
    desc: "Kegiatan seminar yang dilakukan untuk mahasiswa FTI terkait persiapan mengikuti program beasiswa dan seminar terkait prospek kerja lulusan FTI serta menyebar informasi seminar seputar kemahasiswaan",
    img: [Sekawan, Sekawan1],
  },
  {
    title: "PUBLIC HEARING",
    desc: "Duduk Bersama dengan dekanat dan para KM FTI untuk mendiskusikan lebih lanjut terkait permasalahan di lingkugan KM FTI.",
    img: PublicHearing,
  },
  {
    title: "INTERSCHOLAR",
    desc: "Membagikan dan mensosialisasikan Info-info terkait beasiswa dan magang baik dari dalam maupun luar universitas, negeri maupun swasta.",
    img: [InterScholar, InterScholar1],
  },
  {
    title: "IPK+",
    desc: "Sebagai sarana penyimpanan soal-soal ujian, e-book, cheatsheet dan materi untuk membantu mahasiswa FTI dalam perkuliahan.",
    img: Ipkplus,
    googledrive:
      "https://drive.google.com/drive/folders/1FdQJ24sDkgFUn4-kvtZlXxX8KtPPyAQq",
  },
  {
    title: "SAHABAT FTI",
    desc: "Sebagai layanan untuk mahasiswa FTI bisa menyampaikan permasalahan atau keluh kesah yang menghambat perkuliahan. ",
    img: SahabatFTI,
  },
  {
    title: "MABA CARE",
    desc: "Sebagai media layanan dengan melakukan pendataan mahasiswa baru dan memberikan bantuan serta edukasi mengenai hal-hal yang berkaitan dengan Fakultas Teknologi Informasi kepada mahasiswa baru.",
    img: MabaCare ,
  },

  {
    title: "NEX CARE",
    desc: "Sebagai sarana untuk menyalurkan sumbangan untuk mahasiswa yang terkendala UKT.",
    img: NexCare,
  },
  {
    title: "ADVOTALK",
    desc: "Sarana advokasi permasalahan mahasiswa dan audiensi terkait informasi-informasi akademik yang akan disampaikan kepada mahasiswa Teknologi Informasi.",
    img: Advotalk,
  },
  {
    title: "DATABASE",
    desc: "Sebagai media layanan dalam menampung data (permasalahan UKT, KIP-K, Magang dan beasiswa ) mahasiswa FTI.",
    img: Database,
  },
];

const AdkesGrid = () => {
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
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center bg-clip-text font-[Carena] "
      data-aos="zoom-in"
      data-aos-duration="1000">
        Proker Adkesma
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

                  {/* logo di bawah deskripsi */}
                  <div className="flex items-center gap-3 mt-3">
                    {proker.spotify && (
                      <a
                        href={proker.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md hover:scale-105 transition-transform"
                        title="Listen on Spotify"
                      >
                        <img
                          src={Spotify}
                          alt="Spotify"
                          className="w-17 h-12 object-contain"
                        />
                      </a>
                    )}
                    {proker.googledrive && (
                      <a
                        href={proker.googledrive}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md hover:scale-105 transition-transform"
                        title="Open Google Drive"
                      >
                        <img
                          src={Gdrive}
                          alt="Google Drive"
                          className="w-7 h-7 object-contain"
                        />
                      </a>
                    )}
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

export default AdkesGrid;
