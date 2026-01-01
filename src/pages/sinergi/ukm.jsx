import React from "react";
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

const UkmCard = ({ ukm }) => (
  <div className="flex flex-col items-center text-center">
    <button
      type="button"
      className="focus:outline-none"
      style={{ background: "none", border: "none", padding: 0 }}
    >
      <img
        src={ukm.logo}
        alt={ukm.name}
        className="w-28 h-28 md:w-32 md:h-32 object-contain mb-2 -mt-2 hover:scale-105 active:scale-110 transition-transform duration-200 cursor-pointer"
      />
    </button>
    <div className="text-[#223614] font-bold text-lg mb-1">{ukm.name}</div>
    <div className="text-[#263A29] text-sm mb-2">{ukm.desc}</div>
    {ukm.instagram && (
      <a
        href={ukm.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#a06a23] text-white text-2xl border p-1 rounded btn-fill-center instagram"
        title="Instagram"
      >
        <FaInstagram />
      </a>
    )}
  </div>
);

const UKM = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-white py-10 overflow-x-hidden"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="text-center mb-10">
        <div className="text-[#b57a2a] font-bold text-lg mb-1 tracking-wide">
          BERKENALAN DENGAN
        </div>
        <div className="text-3xl md:text-4xl font-bold text-[#263A29] mb-2 leading-tight">
          Unit Kegiatan Mahasiswa <br />
          Fakultas Teknologi Informasi
        </div>
        <div className="flex justify-center mt-2 mb-4">
          <div className="relative flex items-center justify-center w-24 h-5">
            <div className="w-full h-2 bg-[#b57a2a] rounded" />
            <span className="absolute left-1/2 top-1/2 w-3 h-2 bg-[#e0a100] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate mt-1 " />
          </div>
        </div>
      </div>

      {/* MOBILE: BEM paling atas */}
      <div className="w-full max-w-5xl grid grid-cols-1 gap-6 md:hidden">
        {/* BEM */}
        <div className="flex flex-col items-center text-center">
          <img
            src={ukmList[1].logo}
            alt={ukmList[1].name}
            className="w-28 h-28 object-contain mb-2 -mt-2 hover:scale-105 active:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </div>
        {/* Lainnya */}
        {ukmList
          .filter((_, idx) => idx !== 1)
          .map((ukm) => (
            <UkmCard ukm={ukm} key={ukm.name} />
          ))}
      </div>

      {/* DESKTOP: urutan asli */}
      <div className="w-full max-w-5xl hidden md:grid grid-cols-3 gap-12 items-center">
        {/* DPM */}
        <div data-aos="fade-right" data-aos-delay="100">
          <UkmCard ukm={ukmList[0]} />
        </div>
        {/* BEM */}
        <div
          className="md:row-span-2 flex flex-col items-center justify-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src={ukmList[1].logo}
            alt={ukmList[1].name}
            className="w-56 h-56 object-contain mb-2 -mt-2 hover:scale-105 active:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </div>
        {/* FSI */}
        <div data-aos="fade-left" data-aos-delay="300">
          <UkmCard ukm={ukmList[2]} />
        </div>
        {/* TECTONA */}
        <div data-aos="fade-up-right" data-aos-delay="400">
          <UkmCard ukm={ukmList[3]} />
        </div>
        {/* UKOS */}
        <div data-aos="fade-up-left" data-aos-delay="500">
          <UkmCard ukm={ukmList[4]} />
        </div>
      </div>
    </div>
  );
};

export default UKM;
