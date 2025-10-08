import React from "react";
import UKOS from "../../../assets/ukm/ukos.webp";
import DPM from "../../../assets/ukm/dpm.webp";
import FSI from "../../../assets/ukm/fsi.webp";
import TECTONA from "../../../assets/ukm/tectona.webp";
import Instagram from "../../../assets/socialmedia/instagram.webp";
const ukmList = [
  {
    nama: "UKOS",
    deskripsi:
      "Unit yang menampung minat dan bakat mahasiswa di bidang olahraga dan seni",
    logo: UKOS,
    instagram: "https://www.instagram.com/ukos_fti/",
  },
  {
    nama: "DPM",
    deskripsi:
      "Tempat berkumpulnya mahasiswa pecinta musik dan seni pertunjukan.",
    logo: DPM,
    instagram: "https://www.instagram.com/dpmftiunand/",
  },
  {
    nama: "FSI AL-FATIH",
    deskripsi:
      "Mendukung mahasiswa dalam kegiatan olahraga dan kompetisi antar fakultas.",
    logo: FSI,
    instagram: "https://www.instagram.com/fsialfatih/",
  },
  {
    nama: "MAPALA TECTONA",
    deskripsi:
      "Unit Kegiatan Mahasiswa yang bergerak di bidang sosial kemanusiaan dan kesehatan.",
    logo: TECTONA,
    instagram: "https://www.instagram.com/mapala_tectona/",
  },
];

const UKMGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {ukmList.map((ukm, idx) => (
      <div
        key={idx}
        className={`
          aspect-square bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-7 flex flex-col justify-center items-center
          hover:scale-105 hover:shadow-2xl transition-all duration-300 group
          animate-fade-in-up cursor-pointer
        `}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 0 0 4px rgba(0,0,0,0.02)`,
          animationDelay: `${idx * 80}ms`,
          animationFillMode: "both",
          minHeight: "220px",
        }}
      >
        {/* Logo UKM besar di atas */}
        <img
          src={ukm.logo}
          alt={ukm.nama}
          className="w-24 h-24 mb-6 object-contain drop-shadow-lg"
          draggable={false}
        />
        <h2 className="text-xl font-bold text-black mb-2 text-center font-[Montserrat] tracking-wide drop-shadow-sm">
          {ukm.nama}
        </h2>
        <p className="text-gray-700 text-sm text-center mb-5 font-[Poppins]">
          {ukm.deskripsi}
        </p>
        {ukm.instagram && (
          <a
            href={ukm.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="
      flex items-center justify-center mx-auto mt-2 w-11 h-11 rounded-full
      bg-gray-800
      shadow-lg ring-2 ring-transparent
      hover:scale-110 hover:shadow-xl
      transition-all duration-300
      group
    "
            title="Instagram"
            style={{ minWidth: "44px", minHeight: "44px" }}
          >
            <img
              src={Instagram}
              alt="Instagram"
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
              draggable={false}
              style={{ minWidth: "24px", minHeight: "24px" }}
            />
          </a>
        )}
      </div>
    ))}
    {/* Animasi fade-in-up */}
    <style>
      {`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(.39,.575,.565,1) both;
        }
      `}
    </style>
  </div>
);

export default UKMGrid;
