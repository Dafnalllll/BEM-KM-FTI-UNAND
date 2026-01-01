import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";

import DPM from "../../assets/ukm/dpm.webp";
import BEM from "../../assets/BEM.webp";
import FSI from "../../assets/ukm/fsi.webp";
import TECTONA from "../../assets/ukm/tectona.webp";
import UKOS from "../../assets/ukm/ukos.webp";

const ukmList = [
  {
    name: "Dewan Perwakilan Mahasiswa",
    desc: "Lembaga Legislatif Negara Bagian Keluarga Mahasiswa Fakultas Teknologi Informasi",
    logo: DPM,
    instagram: "https://www.instagram.com/dpmftiunand/",
  },
  {
    name: "Badan Eksekutif Mahasiswa",
    desc: "Lembaga Eksekutif Negara Bagian Keluarga Mahasiswa Fakultas Teknologi Informasi",
    logo: BEM,
  },
  {
    name: "FSI Al-Fatih",
    desc: "Forum Studi Islam Al-Fatih Fakultas Teknologi Informasi",
    logo: FSI,
    instagram: "https://www.instagram.com/fsialfatih/",
  },
  {
    name: "Mapala Tectona",
    desc: "Unit Kegiatan Mahasiswa Pencinta Alam Fakultas Teknologi Informasi",
    logo: TECTONA,
    instagram: "https://www.instagram.com/mapala_tectona/",
  },
  {
    name: "Unit Kegiatan Olahraga & Seni",
    desc: "Unit Pemberdaya Olahraga dan Seni Mahasiswa Fakultas Teknologi Informasi",
    logo: UKOS,
    instagram: "https://www.instagram.com/ukos_fti/",
  },
];

const UKM = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  // Deteksi mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4 overflow-x-hidden">
      <div className="text-center mb-10">
        <div className="text-[#b57a2a] font-bold text-lg mb-1 tracking-wide">
          BERKENALAN DENGAN
        </div>
        <div className="text-3xl md:text-4xl font-bold text-[#263A29] mb-2 leading-tight">
          Unit Kegiatan Mahasiswa <br />
          Fakultas Teknologi Informasi
        </div>
        {/* Garis dan dot animasi, dot di tengah garis */}
        <div className="flex justify-center mt-2 mb-4">
          <div className="relative flex items-center justify-center w-24 h-5">
            <div className="w-full h-2 bg-[#b57a2a] rounded" />
            <span className="absolute left-1/2 top-1/2 w-3 h-2 bg-[#e0a100] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate mt-1 " />
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 gap-8 items-center md:grid-cols-3 md:gap-12">
        {ukmList.map((ukm, idx) => (
          <div
            key={ukm.name}
            className="flex flex-col items-center text-center mx-auto"
            onClick={() =>
              isMobile && setActiveIdx(activeIdx === idx ? null : idx)
            }
            onMouseEnter={() => !isMobile && setActiveIdx(idx)}
            onMouseLeave={() => !isMobile && setActiveIdx(null)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={ukm.logo}
              alt={ukm.name}
              className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain mb-2 -mt-2 transition-transform duration-300
                ${
                  isMobile
                    ? activeIdx === idx
                      ? "scale-110"
                      : "scale-100"
                    : "hover:scale-105"
                }
              `}
            />
            <div className="text-[#223614] font-bold text-base sm:text-lg mb-1">
              {ukm.name}
            </div>
            <div className="text-[#263A29] text-xs sm:text-sm mb-2">
              {ukm.desc}
            </div>
            {ukm.instagram && (
              <a
                href={ukm.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a06a23] text-white text-xl sm:text-2xl border p-1 rounded btn-fill-center instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UKM;
