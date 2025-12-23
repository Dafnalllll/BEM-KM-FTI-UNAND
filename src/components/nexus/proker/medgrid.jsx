import React, { useState, useEffect } from "react";
import DigitalContent from "../../../assets/dinasnexus/kegiatan/medin/digitalcontent.webp";
import MediaConnect from "../../../assets/dinasnexus/kegiatan/medin/mediaconnect.webp";
import NexusHighlight from "../../../assets/dinasnexus/kegiatan/medin/nexushighlight.webp";
import ActiveMedia from "../../../assets/dinasnexus/kegiatan/medin/activemedia.webp";
import CreativeStudio from "../../../assets/dinasnexus/kegiatan/medin/creativestudio.webp";
import JendelaFTI from "../../../assets/dinasnexus/kegiatan/medin/jendelafti.webp";
import Spotlight from "../../../assets/dinasnexus/kegiatan/medin/spotlight.webp";
import BemVisit from "../../../assets/dinasnexus/kegiatan/eksternal/bemvisit.webp";
import FunTime from "../../../assets/dinasnexus/kegiatan/audkes/funtime.webp";
import Instagram from "../../../assets/socialmedia/instagram.webp";
import Tiktok from "../../../assets/socialmedia/tiktok.webp";
import X from "../../../assets/socialmedia/x.webp";
import Youtube from "../../../assets/socialmedia/youtube.webp";

const prokerList = [
  {
    title: "FTI SPOTLIGHT",
    desc: "Mendokumentasikan seluruh kegiatan Fakultas Teknologi Informasi yang telah terkoordinasi dengan Dinas Medinkraf, baik acara formal maupun nonformal, dalam bentuk foto dan video, yang kemudian diunggah pada media sosial BEM KM FTI.",
    img: [Spotlight, BemVisit, FunTime],
  },
  {
    title: "JENDELA FTI",
    desc: "Mempublikasikan informasi terkait kegiatan atau program dari BEM KM FTI melalui konten kreatif seperti foto, video, dan video perkenalan untuk menjangkau audiens internal maupun eksternal.",
    img: JendelaFTI,
    instagram: "https://www.instagram.com/bemkmftiunand/",
  },
  {
    title: "NEXUS CREATIVE STUDIO",
    desc: "Membuat desain visual sebagai sarana komunikasi dan penyebaran informasi kegiatan BEM KM FTI, serta mendukung kebutuhan desain kabinet Nexus Inspirasi selama periode kepengurusan.",
    img: CreativeStudio,
  },
  {
    title: "FTI ACTIVE MEDIA",
    desc: "Mengelola platform media informasi (Instagram, Tiktok, YouTube, Twitter) milik BEM KM FTI agar dapat menjadi pusat informasi yang interaktif, terstruktur, dan relevan bagi KM FTI serta lembaga internal fakultas.",
    img: ActiveMedia,
    instagram: "https://www.instagram.com/bemkmftiunand/",
    tiktok: "https://www.tiktok.com/@bemkmftiunand",
    youtube: "https://www.youtube.com/@bemkmftiunand",
    twitter: "https://twitter.com/bemkmftiunand",
  },

  {
    title: "FTI DIGITAL CONTENT WORKSHOP",
    desc: "Mengadakan workshop berkala yang fokus pada pembuatan konten digital, seperti fotografi, videografi, desain grafis, dan penulisan kreatif, untuk meningkatkan keterampilan anggota BEM KM FTI dan mahasiswa FTI secara umum.",
    img: DigitalContent,
  },
  {
    title: "NEXUS HIGHLIGHT",
    desc: "Menyajikan rangkuman kegiatan BEM KM FTI dalam bentuk konten kreatif berupa unggahan foto setiap 3 bulan sekali, yang menjadi evaluasi, dokumentasi, serta kenang-kenangan kepengurusan. Pembuatan Buku Tahunan.",
    img: NexusHighlight,
  },
  {
    title: "FTI MEDIA CONNECT",
    desc: "Melakukan kunjungan dan kolaborasi dengan berbagai media lokal/nasional (seperti TV, surat kabar, radio, dan media online) untuk memperluas jejaring informasi, serta memaksimalkan penyebaran berita dari BEM KM FTI.",
    img: MediaConnect,
  },
];

const MedGrid = () => {
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
        Proker Medinkraf
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
                    {/* unified colorful background + white icon for all social buttons */}
                    {proker.instagram && (
                      <a
                        href={proker.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                        title="Instagram"
                        style={{
                          background:
                            "linear-gradient(135deg,#6366F1 0%, #EC4899 100%)",
                        }}
                      >
                        <img
                          src={Instagram}
                          alt="Instagram"
                          className="w-5 h-5 object-contain filter brightness-0 invert"
                          draggable={false}
                        />
                      </a>
                    )}
                    {proker.tiktok && (
                      <a
                        href={proker.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                        title="TikTok"
                        style={{
                          background:
                            "linear-gradient(135deg,#6366F1 0%, #EC4899 100%)",
                        }}
                      >
                        <img
                          src={Tiktok}
                          alt="TikTok"
                          className="w-5 h-5 object-contain filter brightness-0 invert"
                          draggable={false}
                        />
                      </a>
                    )}

                    {/* X (Twitter) icon */}
                    {(proker.twitter || proker.x) && (
                      <a
                        href={proker.twitter || proker.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                        title="X"
                        style={{
                          background:
                            "linear-gradient(135deg,#6366F1 0%, #EC4899 100%)",
                        }}
                      >
                        <img
                          src={X}
                          alt="X"
                          className="w-5 h-5 object-contain filter brightness-0 invert"
                          draggable={false}
                        />
                      </a>
                    )}

                    {proker.youtube && (
                      <a
                        href={proker.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                        title="YouTube"
                        style={{
                          background:
                            "linear-gradient(135deg,#6366F1 0%, #EC4899 100%)",
                        }}
                      >
                        <img
                          src={Youtube}
                          alt="YouTube"
                          className="w-5 h-5 object-contain filter brightness-0 invert"
                          draggable={false}
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

export default MedGrid;
