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
    size: "w-44 h-44",
  },
  {
    img: WakilGubernur,
    title: "Wakil Gubernur",
    nama: "Umar Abdullah Azzam",
    jurusan: "Sistem Informasi",
    angkatan: "2022",
    border: "border-blue-500",
    size: "w-44 h-44",
  },
  {
    img: SekretarisDaerah,
    title: "Sekretaris Daerah",
    nama: "Asyifa Putri Romansha",
    jurusan: "Teknik Komputer",
    angkatan: "2022",
    border: "border-green-500",
    size: "w-44 h-44",
  },
  {
    img: BendaharaDaerah,
    title: "Bendahara Daerah",
    nama: "Suci Nurhaliza",
    jurusan: "Sistem Informasi",
    angkatan: "2023",
    border: "border-green-500",
    size: "w-44 h-44",
  },
];

const IntiGrid = () => {
  return (
    <div className="flex flex-col items-center gap-12 p-8">
      {/* Baris 1 */}
      <div className="flex justify-center gap-20">
        {gridData.slice(0, 2).map((item, idx) => (
          <div
            key={idx}
            className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg flex flex-col items-center px-8 py-6 w-[320px] min-h-[380px]"
          >
            <img
              src={item.img}
              alt={item.title}
              className={`${item.size} object-cover rounded-full shadow-lg border-4 ${item.border}`}
            />
            <span className="mt-4 font-bold text-xl text-gray-800">
              {item.title}
            </span>
            <span className="mt-2 font-semibold text-lg text-gray-700">
              {item.nama}
            </span>
            <span className="mt-1 text-base text-gray-600">{item.jurusan}</span>
            <span className="mt-1 text-base text-gray-600">
              {item.angkatan}
            </span>
          </div>
        ))}
      </div>
      {/* Baris 2 */}
      <div className="flex justify-between gap-20 w-full p-8">
        {gridData.slice(2, 4).map((item, idx) => (
          <div
            key={idx}
            className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl shadow-lg flex flex-col items-center px-8 py-6 w-[320px] min-h-[380px]"
          >
            <img
              src={item.img}
              alt={item.title}
              className={`${item.size} object-cover rounded-full shadow-lg border-4 ${item.border}`}
            />
            <span className="mt-4 font-bold text-lg text-gray-800">
              {item.title}
            </span>
            <span className="mt-2 font-semibold text-base text-gray-700">
              {item.nama}
            </span>
            <span className="mt-1 text-sm text-gray-600">{item.jurusan}</span>
            <span className="mt-1 text-sm text-gray-600">{item.angkatan}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntiGrid;
