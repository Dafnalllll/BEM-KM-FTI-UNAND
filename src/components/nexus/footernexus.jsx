import React, { useEffect, useState } from "react";
import StatsNexus from "../../components/nexus/statsnexus";
import { useLocation } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import Instagram from "../../assets/socialmedia/instagram.webp";
import Tiktok from "../../assets/socialmedia/tiktok.webp";
import X from "../../assets/socialmedia/x.webp";
import Youtube from "../../assets/socialmedia/youtube.webp";
import Nexus from "../../assets/kabinet/nexusinspirasi.webp";
import Ristek from "../../assets/dinasnexus/logo/ristek.webp";

const quickLinks = [
  { label: "Beranda", section: "beranda" },
  { label: "Tentang", section: "tentangnexus" },
  { label: "Dinas", section: "dinasnexus" },
  { label: "Program Kerja", section: "programkerjanexus" },
  { label: "Galeri", section: "galerinexus" },
];

export const FooterNexus = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Tambahkan state untuk tombol scroll to top
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100); // tampil jika scroll > 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="w-full bg-[#243a1a] text-white pt-8 pb-2 mt-4">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">
          {/* Info BEM */}
          <div className="flex flex-col items-center sm:items-start p-4 mb-2 sm:mb-0 ">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={Nexus}
                alt="Logo BEM KM FTI"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <h2 className="font-bold text-lg sm:text-xl font-[Carena]">
                  BEM KM FTI
                </h2>
                <p
                  className="text-gray-300 text-base sm:text-xl"
                  style={{ fontFamily: "'Great Vibes,cursive'" }}
                >
                  Nexus Inspirasi
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-2 text-sm sm:text-sm text-center sm:text-left">
              Wadah kreativitas dan pengembangan diri mahasiswa Fakultas
              Teknologi Informasi.
            </p>
            <div className="text-gray-300 mt-1 text-xs sm:text-xs space-y-1 w-full flex flex-col items-center sm:items-start">
              <p className="select-all flex items-center gap-2">
                <Mail size={16} className="inline" />
                bemkmfti@gmail.com
              </p>
              <p className="select-all flex items-center gap-2">
                <Phone size={16} className="inline" />
                +62 82284367174
              </p>
            </div>
          </div>
          {/* Navigasi Cepat */}
          <div className="flex flex-col items-center sm:items-start p-4 mb-2 sm:mb-0 ">
            <h3 className="font-bold text-base sm:text-lg mb-2 border-b border-[#3b5c2b] pb-1 w-full text-center sm:text-center">
              Quick Links
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm sm:text-sm w-full flex flex-col items-center sm:items-start">
              {quickLinks.map((item) => (
                <li key={item.section} className="group">
                  <button
                    onClick={() => {
                      const section = document.getElementById(item.section);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="hover:text-white bg-transparent text-inherit text-left sm:text-center w-full cursor-pointer transition-transform duration-300 group-hover:translate-x-2"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Program Unggulan */}
          <div className="flex flex-col items-center sm:items-start p-4 mb-2 sm:mb-0 ">
            <h3 className="font-bold text-base sm:text-lg mb-2 border-b border-[#3b5c2b] pb-1 w-full text-center sm:text-center">
              Program Unggulan
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm sm:text-sm w-full flex flex-col items-center sm:items-start">
              <li>SEKAWAN</li>
              <li>Technofest</li>
              <li>Hackathon</li>
              <li>FTI Bina Desa</li>
              <li>Nexus Muda</li>
            </ul>
          </div>
          {/* Sosial Media */}
          <div className="flex flex-col items-center sm:items-center p-4 ">
            <h3 className="font-bold text-base sm:text-lg mb-2 border-b border-[#3b5c2b] pb-1 w-full text-center sm:text-center">
              Sosial Media
            </h3>
            <div className="flex gap-3 text-lg sm:text-xl mb-2">
              <a
                href="https://www.instagram.com/bemkmftiunand/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Instagram} alt="Instagram" className="w-8 h-8" />
              </a>
              <a
                href="https://www.tiktok.com/@bemkmftiunand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Tiktok} alt="TikTok" className="w-7 h-7" />
              </a>
              <a
                href="https://twitter.com/bemkmftiunand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={X} alt="X" className="w-7 h-7" />
              </a>
              <a
                href="https://www.youtube.com/@bemkmftiunand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Youtube} alt="Youtube" className="w-9 h-7" />
              </a>
            </div>
          </div>
        </div>
        <StatsNexus />
        <div className="text-center mt-4 text-xs sm:text-xs">
          Universitas Andalas, Limau Manis, Padang, Sumatra Barat, Indonesia
          <br />
        </div>
        <hr className="my-4 " />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-2">
          <img
            src={Ristek}
            alt="Dinas Ristek"
            className="h-10 sm:h-14 max-w-full object-contain mb-1 sm:mb-0"
          />
          <p className="text-xs sm:text-xs text-white whitespace-nowrap text-center">
            © 2025 Dinas Ristek BEM KM FTI UNAND. All Rights Reserved
          </p>
        </div>
        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            className="fixed bottom-8 right-8 bg-[#e0a100] text-white p-3 rounded transition z-50 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
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
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
};

export default FooterNexus;
