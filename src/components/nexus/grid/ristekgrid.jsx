import React from "react";
import Kadin from "../../../assets/dinas nexus/press release/ristek/dafa.webp";
import Sekdin from "../../../assets/dinas nexus/press release/ristek/fella.webp";
import Bendin from "../../../assets/dinas nexus/staff release/ristek/nisa.webp";
import Farid from "../../../assets/dinas nexus/staff release/ristek/farid.webp";
import Zikri from "../../../assets/dinas nexus/staff release/ristek/zikri.webp";
import Hafid from "../../../assets/dinas nexus/staff release/ristek/hafid.webp";
import Arib from "../../../assets/dinas nexus/staff release/ristek/arib.webp";
import Ristek from "../../../assets/dinas nexus/logo/ristek.webp";
import Social from "../../social";

const gridData = [
  {
    img: Bendin,
    title: "Bendahara Dinas",
    nama: "Annisa Fitratul Haq",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/nisa.haq_/",
    linkedin: "https://www.linkedin.com/in/annisa-fitratul-haq-7a1199288/",
  },
  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Fella Widya Osrilla",
    desc: "Teknik Komputer 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/fell_widyaosrilla/",
    linkedin: "https://www.linkedin.com/in/fella-widya-osrilla-423919287/",
  },
  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Rizki Dafa Naldi",
    desc: "Teknik Komputer 2023",
    border: "border-green-800",
    instagram: "https://www.instagram.com/daf_nal/",
    linkedin: "https://www.linkedin.com/in/daffa-naldi-935b55341/",
    github: "https://github.com/Dafnalllll",
  },
  {
    img: Farid,
    title: "Staff Dinas",
    nama: "Faridhatul Azhari",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/faridhatul29/",
    linkedin: "https://www.linkedin.com/in/faridhatul-azhari-9749b6287/",
    github: "https://github.com/Ridhhhs",
  },
  {
    img: Zikri,
    title: "Staff Dinas",
    nama: "Alfi Zikri",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/zikrialfi/",
    linkedin: "https://www.linkedin.com/in/alfizikri/",
    github: "https://github.com/kugo-x",
  },
  {
    img: Hafid,
    title: "Staff Dinas",
    nama: "Hafid Fitrah Ramadhan",
    desc: "Teknik Komputer 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/hafidfitrahramadhan/",
    linkedin: "https://www.linkedin.com/in/hafid-fitrah-ramadhan-682834315/",
    github: "https://github.com/hafidfr0",
  },
  {
    img: Arib,
    title: "Staff Dinas",
    nama: "Arib Jilham",
    desc: "Teknik Komputer 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/arib_jill/",
    linkedin: "https://www.linkedin.com/in/arib-jilham-baa216316/",
  },
];

export const RistekGrid = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <h2 className="text-3xl font-bold text-[#25364a] mb-4 text-center font-[Carena]"
      data-aos="zoom-in"
      data-aos-duration="1000">
        The People Behind Ristek
      </h2>
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
                  backgroundImage: `url(${Ristek})`,
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

export default RistekGrid;
