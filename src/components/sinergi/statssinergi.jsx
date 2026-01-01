import React from "react";
import { FaUsers, FaCheck, FaAward } from "react-icons/fa";

const stats = [
  {
    label: "Total Mahasiswa FTI",
    value: "1037",
    icon: <FaUsers className="text-[#b57a2a] text-2xl" />,
    bg: "bg-[#b57a2a]",
    text: "text-white",
    iconBg: "bg-white",
    valueColor: "text-white",
  },
  {
    label: "Total Pengurus",
    value: "92",
    icon: <FaCheck className="text-[#b57a2a] text-2xl" />,
    bg: "bg-[#fef6d8]",
    text: "text-[#b57a2a]",
    iconBg: "bg-white",
    valueColor: "text-[#223614]",
  },
  {
    label: "Jumlah Proker",
    value: "72",
    icon: <FaAward className="text-[#b57a2a] text-2xl" />,
    bg: "bg-[#b57a2a]",
    text: "text-white",
    iconBg: "bg-white",
    valueColor: "text-white",
  },
];

const StatsSinergi = () => (
  <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-stretch py-6 px-2 md:px-6 mt-24 md:mt-0">
    {stats.map((stat, idx) => (
      <div
        key={stat.label}
        className={`flex-1 flex flex-row items-center justify-start ${stat.bg} rounded-none py-8 shadow-sm`}
        style={idx === 1 ? { boxShadow: "0 0 24px 0 #fef6d8" } : {}}
        data-aos="fade-up"
        data-aos-delay={idx * 150}
      >
        {/* Icon di kiri */}
        <div
          className={`ml-8 mr-14 p-4 rounded ${stat.iconBg} flex items-center justify-center`}
        >
          {stat.icon}
        </div>
        {/* Teks dan angka di kanan, sekarang dipisah */}
        <div className="flex flex-col items-start">
          <div
            className={`font-extrabold text-xl mb-2 ${stat.text}`}
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {stat.label}
          </div>
          <div
            className={`font-medium text-4xl mt-2 ${stat.valueColor}`}
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {stat.value}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default StatsSinergi;
