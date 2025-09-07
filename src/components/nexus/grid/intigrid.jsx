import React from "react";
import Gubernur from "../../../assets/dinas nexus/press release/inti/gub.png";
import WakilGubernur from "../../../assets/dinas nexus/press release/inti/wagub.png";
import SekretarisDaerah from "../../../assets/dinas nexus/press release/inti/sekda.png";
import BendaharaDaerah from "../../../assets/dinas nexus/press release/inti/benda.png";

const gridData = [
  {
    img: Gubernur,
    title: "Gubernur",
    nama: "Muhammad Fajri",
    jurusan: "Teknik Komputer",
    angkatan: "2022",
    border: "border-green-800",
  },
  {
    img: WakilGubernur,
    title: "Wakil Gubernur",
    nama: "Umar Abdullah Azzam",
    jurusan: "Sistem Informasi",
    angkatan: "2022",
    border: "border-blue-500",
  },
  {
    img: SekretarisDaerah,
    title: "Sekretaris Daerah",
    nama: "Asyifa Putri Romansha",
    jurusan: "Teknik Komputer",
    angkatan: "2022",
    border: "border-green-500",
  },
  {
    img: BendaharaDaerah,
    title: "Bendahara Daerah",
    nama: "Suci Nurhaliza",
    jurusan: "Sistem Informasi",
    angkatan: "2023",
    border: "border-green-500",
  },
];

const IntiGrid = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer">
        {gridData.map((item, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl shadow-md w-[280px] h-[340px] border-2 ${item.border} overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 "></div>
            {/* Konten di atas glass */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-8">
              <span className="font-semibold text-base text-gray-700 tracking-wide mb-1">
                {item.title}
              </span>
              <span className="font-bold text-lg text-gray-900 mb-1">
                {item.nama}
              </span>
              <span className="text-sm text-gray-500 mb-1">{item.jurusan}</span>
              <span className="text-xs text-gray-400">
                Angkatan {item.angkatan}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntiGrid;
