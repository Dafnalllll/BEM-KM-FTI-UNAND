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

const UKM = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-white py-10"
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
        {/* Garis dan dot animasi, dot di tengah garis */}
        <div className="flex justify-center mt-2 mb-4">
          <div className="relative flex items-center justify-center w-24 h-5">
            <div className="w-full h-2 bg-[#b57a2a] rounded" />
            <span className="absolute left-1/2 top-1/2 w-3 h-2 bg-[#e0a100] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate mt-1 " />
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Baris 1 */}
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <img
            src={ukmList[0].logo}
            alt={ukmList[0].name}
            className="w-32 h-32 object-contain mb-2 -mt-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <div className="text-[#223614] font-bold text-lg mb-1">
            {ukmList[0].name}
          </div>
          <div className="text-[#263A29] text-sm mb-2 ">{ukmList[0].desc}</div>
          {ukmList[0].instagram && (
            <a
              href={ukmList[0].instagram}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-[#a06a23] text-white text-2xl border p-1 rounded btn-fill-center instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          )}
        </div>
        <div
          className="row-span-2 flex flex-col items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <img
            src={ukmList[1].logo}
            alt={ukmList[1].name}
            className="w-56 h-56 object-contain mb-2 -mt-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img
            src={ukmList[2].logo}
            alt={ukmList[2].name}
            className="w-32 h-32 object-contain mb-2 -mt-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <div className="text-[#223614] font-bold text-lg mb-1">
            {ukmList[2].name}
          </div>
          <div className="text-[#263A29] text-sm mb-2">{ukmList[2].desc}</div>
          {ukmList[2].instagram && (
            <a
              href={ukmList[2].instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#a06a23] text-white text-2xl border p-1 rounded btn-fill-center instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          )}
        </div>
        {/* Baris 2 */}
        <div
          className="flex flex-col items-center text-center col-start-1"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <img
            src={ukmList[3].logo}
            alt={ukmList[3].name}
            className="w-32 h-32 object-contain mb-2 -mt-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <div className="text-[#223614] font-bold text-lg mb-1">
            {ukmList[3].name}
          </div>
          <div className="text-[#263A29] text-sm mb-2">{ukmList[3].desc}</div>
          {ukmList[3].instagram && (
            <a
              href={ukmList[3].instagram}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-[#a06a23] text-white text-2xl border p-1 rounded btn-fill-center instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          )}
        </div>
        <div
          className="flex flex-col items-center text-center col-start-3"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img
            src={ukmList[4].logo}
            alt={ukmList[4].name}
            className="w-32 h-32 object-contain mb-2 -mt-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <div className="text-[#223614] font-bold text-lg mb-1">
            {ukmList[4].name}
          </div>
          <div className="text-[#263A29] text-sm mb-2">{ukmList[4].desc}</div>
          {ukmList[4].instagram && (
            <a
              href={ukmList[4].instagram}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-[#a06a23] text-white text-2xl border p-1 rounded btn-fill-center instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default UKM;
