import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import Instagram from "../../assets/socialmedia/instagram.webp";
import Tiktok from "../../assets/socialmedia/tiktok.webp";
import X from "../../assets/socialmedia/x.webp";
import Youtube from "../../assets/socialmedia/youtube.webp";
import Nexus from "../../assets/kabinet/nexusinspirasi.webp";
import Ristek from "../../assets/dinas nexus/logo/ristek.webp";


const quickLinks = [
  { label: "Beranda", section: "beranda" },
  { label: "Tentang", section: "tentangnexus" },
  { label: "Dinas", section: "dinasnexus" },
  { label: "Program Kerja", section: "programkerja" },
  { label: "Galeri", section: "galeri" },
];

export const Footer = () => {
  const location = useLocation();

  useEffect(() => {

    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <footer className="w-full bg-[#243a1a] text-white pt-10 pb-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info BEM */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img
                src={Nexus}
                alt="Logo BEM KM FTI"
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
              />
              <div>
                <h2 className="font-bold text-xl sm:text-2xl font-[Carena]">
                  BEM KM FTI
                </h2>
                <p
                  className="text-gray-300 text-2xl sm:text-3xl"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  Nexus Inspirasi
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Wadah kreativitas dan pengembangan diri mahasiswa Fakultas
              Teknologi Informasi.
            </p>
            <div className="flex gap-3 text-xl sm:text-2xl mb-2">
              <a
                href="https://www.instagram.com/bemkmftiunand/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@bemkmftiunand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Tiktok} alt="TikTok" className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/bemkmftiunand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={X} alt="X" className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@bemkmftiunand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img src={Youtube} alt="Youtube" className="w-8 h-6" />
              </a>
            </div>
            <div className="text-gray-300 mt-2 text-xs sm:text-sm space-y-1">
              <p className="select-all flex items-center gap-2">
                <Mail size={16} className="inline" />
                bemkmfti@gmail.com
              </p>
              <p className="select-all flex items-center gap-2">
                <Phone size={16} className="inline" />
                +62 812-3456-7890
              </p>
            </div>
          </div>
          {/* Navigasi Cepat */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
              {quickLinks.map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => {
                      const section = document.getElementById(item.section);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="hover:text-white bg-transparent text-inherit text-left w-full cursor-pointer hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Program Unggulan */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">
              Program Unggulan
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
              <li>SEKAWAN</li>
              <li>Technofest</li>
              <li>Hackathon</li>
              <li>FTI Bina Desa</li>
              <li>Nexus Muda</li>
            </ul>
          </div>
          {/* Berita Terbaru */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">
              Berita Terbaru
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <span className="font-semibold text-white">
                  FTI Hackathon 2023 Telah Dibuka!
                </span>
                <br />
                <span className="text-xs sm:text-sm">15 Oktober 2023</span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Hasil Leadership Seminar Minggu Lalu
                </span>
                <br />
                <span className="text-xs sm:text-sm">8 Oktober 2023</span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Kegiatan FTI Peduli di Desa Sekitar
                </span>
                <br />
                <span className="text-xs sm:text-sm">1 Oktober 2023</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-xs sm:text-base">
          Universitas Andalas, Limau Manis, Padang, Sumatra Barat, Indonesia
          <br />
        </div>
        <hr className="my-8 border-gray-500" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
          <img
            src={Ristek}
            alt="Dinas Ristek"
            className="h-16 sm:h-20 max-w-full object-contain mb-2 sm:mb-0"
          />
          <p className="text-xs sm:text-sm text-white whitespace-nowrap text-center">
            © 2025 Dinas Ristek BEM KM FTI UNAND. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
