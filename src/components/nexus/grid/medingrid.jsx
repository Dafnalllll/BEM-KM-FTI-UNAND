import React from "react";
import Medinkraf from "../../../assets/dinas nexus/logo/medin.webp";
import Social from "../../social";
import Kadin from "../../../assets/dinas nexus/press release/medinkraf/adli.webp";
import Sekdin from "../../../assets/dinas nexus/press release/medinkraf/abe.webp";
import Bendin from "../../../assets/dinas nexus/staff release/medinkraf/vanes.webp";
import Aldo from "../../../assets/dinas nexus/staff release/medinkraf/aldo.webp";
import Alya from "../../../assets/dinas nexus/staff release/medinkraf/alya.webp";
import King from "../../../assets/dinas nexus/staff release/medinkraf/king.webp";
import Alvin from "../../../assets/dinas nexus/staff release/medinkraf/alvin.webp";
import Asyqor from "../../../assets/dinas nexus/staff release/medinkraf/asyqor.webp";

const gridData = [
  {
    img: Bendin,
    title: "Bendahara Dinas",
    nama: "Vannesa Tania",
    desc: "Sistem Informasi 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/vannstn._/",
    linkedin: "https://www.linkedin.com/in/abrarrayva/",
  },
  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Muhammad Abrar Rayva",
    desc: "Sistem Informasi 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/abrarrayva/",
    linkedin: "https://www.linkedin.com/in/alya-putri-3a3b00280/",
  },
  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Mujahid Adlis Salam",
    desc: "Sistem Informasi 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/adlimujahid_/",
    linkedin: "https://www.linkedin.com/in/muhammad-iqbal-3a3b00280/",
  },
  {
    img: King,
    title: "Staf Dinas",
    nama: "King Haikal Faiz",
    desc: "Sistem Informasi 2024",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/monarch__k/",
    linkedin: "https://www.linkedin.com/in/rizky-pratama-3a3b00280/",
  },
  {
    img: Alvin,
    title: "Staf Dinas",
    nama: "Alvin Wahyudi",
    desc: "Sistem Informasi 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/alvnn.nw_/",
    linkedin: "https://www.linkedin.com/in/alvinwahyudi/",
  },
  {
    img: Asyqor,
    title: "Staf Dinas",
    nama: "Mohammad Dzaky Asyqor",
    desc: "Teknik Komputer 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/_qorrrr/",
    linkedin: "https://www.linkedin.com/in/budi-santoso-3a3b00280/",
  },
  {
    img: Aldo,
    title: "Staf Dinas",
    nama: "Muhammad Aldo Mulyawan",
    desc: "Teknik Komputer 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/aldomlywnn/",
    linkedin: "https://www.linkedin.com/in/muhammad-aldo-mulyawan-259302288/",
  },
  {
    img: Alya,
    title: "Staf Dinas",
    nama: "Alya Salsa Nabila",
    desc: "Sistem Informasi 2024",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/alyaslsnbila/",
    linkedin: "https://www.linkedin.com/in/siti-nurhaliza-3a3b00280/",
  },
];

export const MedinGrid = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {gridData.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={idx * 100}
          >
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg w-[300px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110">
              {/* Header background */}
              <div
                className="w-40 h-28 relative"
                style={{
                  backgroundImage: `url(${Medinkraf})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
                  <img
                    src={item.img}
                    alt={item.nama}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>
              </div>
              {/* Konten */}
              <div className="pt-12 pb-4 px-4 flex flex-col items-center">
                <span className="font-bold font-[Carena] text-xl text-[#25364a] text-center">
                  {item.nama}
                </span>
                <span className="text-sm font-semibold font-[Poppins] text-gray-500 mb-2 text-center">
                  {item.title}
                </span>
                <p className="text-xs font-bold text-gray-600 text-center mb-4">
                  {item.desc}
                </p>
                {/* Social icons */}
                <Social
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                  github={item.github}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedinGrid;
