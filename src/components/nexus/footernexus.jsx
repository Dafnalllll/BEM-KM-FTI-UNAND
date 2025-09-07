import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import Instagram from "../../assets/socialmedia/instagram.png";
import Tiktok from "../../assets/socialmedia/tiktok.png";
import X from "../../assets/socialmedia/x.png";
import Youtube from "../../assets/socialmedia/youtube.png";
import Nexus from "../../assets/kabinet/nexusinspirasi.png";
import Ristek from "../../assets/dinas nexus/logo/ristek.png";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#243a1a] text-white pt-10 pb-4 mt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Info BEM */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <img
                src={Nexus}
                alt="Logo BEM KM FTI"
                className="w-[60px] h-[60px] "
              />
              <div>
                <h2 className="font-bold text-2xl font-[Carena]">BEM KM FTI</h2>
                <p
                  className="text-gray-300 text-3xl"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  Nexus Inspirasi
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Wadah kreativitas dan pengembangan diri mahasiswa Fakultas
              Teknologi Informasi.
            </p>
            <div className="flex gap-4 text-2xl">
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
                <img src={Youtube} alt="Youtube" className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-300 mt-2 text-sm select-all flex items-center gap-2">
              <Mail size={16} className="inline" />
              bemkmfti@gmail.com
            </p>
          </div>
          {/* Navigasi Cepat */}
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300">
              <li>
                <button
                  onClick={() => navigate("/nexus")}
                  className="hover:text-white bg-transparent text-inherit text-left w-full cursor-pointer hover:underline"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/nexus")}
                  className="hover:text-white bg-transparent text-inherit text-left w-full cursor-pointer hover:underline"
                >
                  Tentang
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/dinasnexus")}
                  className="hover:text-white bg-transparent text-inherit text-left w-full cursor-pointer hover:underline"
                >
                  Dinas
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/galeri")}
                  className="hover:text-white bg-transparent text-inherit text-left w-full cursor-pointer hover:underline"
                >
                  Galeri
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/kontak")}
                  className="hover:text-white bg-transparent text-inherit text-left w-full cursor-pointer hover:underline"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>
          {/* Program Unggulan */}
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Program Unggulan</h3>
            <ul className="space-y-1 text-gray-300">
              <li>SEKAWAN</li>
              <li>Technofest</li>
              <li>Hackathon</li>
              <li>FTI Bina Desa</li>
              <li>Nexus Muda</li>
            </ul>
          </div>
          {/* Berita Terbaru */}
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2">Berita Terbaru</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-white">
                  FTI Hackathon 2023 Telah Dibuka!
                </span>
                <br />
                <span className="text-sm">15 Oktober 2023</span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Hasil Leadership Seminar Minggu Lalu
                </span>
                <br />
                <span className="text-sm">8 Oktober 2023</span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Kegiatan FTI Peduli di Desa Sekitar
                </span>
                <br />
                <span className="text-sm">1 Oktober 2023</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          Universitas Andalas, Limau Manis, Padang, Sumatra Barat, Indonesia
          <br />
        </div>
        <hr className="my-8 border-gray-500" />
        <div className="flex flex-wrap items-center justify-center gap-3 px-4">
          <img
            src={Ristek}
            alt="Dinas Ristek"
            className="h-20 max-w-full  object-contain "
          />
          <p className="text-sm text-white whitespace-nowrap">
            © 2025 Dinas Ristek BEM KM FTI UNAND. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
