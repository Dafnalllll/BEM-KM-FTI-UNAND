import React, { useState } from "react";
import { FaInstagram, FaGlobe } from "react-icons/fa";

// Ganti path berikut sesuai lokasi file logo kamu
import HMSI from "../../assets/himpunan/hmsi.webp";
import HIMATEKOM from "../../assets/himpunan/himatekom.webp";
import HMIF from "../../assets/himpunan/hmif.webp";

const himpunanList = [
  {
    name: "HMSI",
    desc: "HIMPUNAN MAHASISWA SISTEM INFORMASI",
    logo: HMSI,
    instagram: "https://www.instagram.com/hmsi_unand/",
    website: "https://hmsi.unand.cloud/",
  },
  {
    name: "HIMATEKOM",
    desc: "HIMPUNAN MAHASISWA TEKNIK KOMPUTER",
    logo: HIMATEKOM,
    instagram: "https://www.instagram.com/himatekom_unand/",
    website: "https://www.himatekom.com/",
  },
  {
    name: "HMIF",
    desc: "HIMPUNAN MAHASISWA INFORMATIKA",
    logo: HMIF,
    instagram: "https://www.instagram.com/hmif_unand/",
    website: "https://himaif.lmp.web.id/",
  },
];

const Himpunan = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-10">
      <div className="text-center mb-10" data-aos="fade-down">
        <div className="text-[#b57a2a] font-bold text-lg mb-1 tracking-wide">
          BERKENALAN DENGAN
        </div>
        <div className="text-3xl md:text-4xl font-bold text-[#263A29] mb-2 leading-tight">
          Himpunan Mahasiswa <br />
          Departemen Fakultas <br />
          Teknologi Informasi
        </div>
        <div className="flex justify-center mt-2 mb-4">
          <div className="relative flex items-center justify-center w-24 h-5">
            <div className="w-full h-2 bg-[#b57a2a] rounded" />
            <span className="absolute left-1/2 top-1/2 w-3 h-2 bg-[#e0a100] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate mt-1 " />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
        {himpunanList.map((himp, idx) => (
          <div
            key={himp.name}
            className="flex flex-col items-center w-80"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            data-aos="fade-up"
            data-aos-delay={100 * idx}
          >
            <div className="relative flex justify-center items-center w-60 h-60 bg-white mb-4 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-full overflow-hidden">
              <img
                src={himp.logo}
                alt={himp.name}
                className="w-52 h-52 object-contain"
                draggable={false}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hovered === idx
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div
                  className={`flex flex-row gap-6 transition-all duration-300 ${
                    hovered === idx
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <a
                    href={himp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-[#b57a2a] hover:bg-[#a06a23] p-3 rounded-full transition-all duration-200 btn-fill-center globe"
                    title="Website"
                  >
                    <FaGlobe size={28} />
                  </a>
                  <a
                    href={himp.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-[#b57a2a] hover:bg-[#a06a23] p-3 rounded-full transition-all btn-fill-center instagram duration-200"
                    title="Instagram"
                  >
                    <FaInstagram size={28} />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#F6E6C2] px-8 py-4 rounded-b-lg rounded-t-none w-full text-center shadow">
              <div className="text-[#b57a2a] font-bold text-xl mb-1">
                {himp.name}
              </div>
              <div className="text-[#263A29] text-xs font-medium">
                {himp.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Himpunan;
