import React from "react";
import Instagram from "../../../assets/socialmedia/instagram.png";
import LinkedIn from "../../../assets/socialmedia/linkedln.png";
import Kadin from "../../../assets/dinas nexus/press release/ristek/dafa.png";
import Sekdin from "../../../assets/dinas nexus/press release/ristek/fella.png";
import Bendin from "../../../assets/dinas nexus/staff release/ristek/nisa.png";
import Farid from "../../../assets/dinas nexus/staff release/ristek/farid.png";
import Zikri from "../../../assets/dinas nexus/staff release/ristek/zikri.png";
import Hafid from "../../../assets/dinas nexus/staff release/ristek/hafid.png";
import Arib from "../../../assets/dinas nexus/staff release/ristek/arib.png";
import Ristek from "../../../assets/dinas nexus/logo/ristek.png";

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
    github: "https://github.com/faridhatul", 
  },

  {
    img: Zikri,
    title: "Staff Dinas",
    nama: "Alfi Zikri",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/zikrialfi/",
    linkedin: "https://www.linkedin.com/in/alfizikri/",
  },

  {
    img: Hafid,
    title: "Staff Dinas",
    nama: "Hafid Fitrah Ramadhan",
    desc: "Teknik Komputer 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/hafidfitrahramadhan/",
    linkedin: "https://www.linkedin.com/in/hafid-fitrah-ramadhan-682834315/",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {gridData.map((item, idx) => (
          // Wrapper untuk AOS
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={idx * 100}
          >
            {/* Card untuk hover effect */}
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
                {/* Foto bulat */}
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
                {/* Social icons dengan GitHub SVG bawaan */}
                <div className="flex gap-4">
                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className="w-6 h-6 transition-transform duration-200 hover:scale-125"
                      style={{
                        filter:
                          "invert(46%) sepia(94%) saturate(748%) hue-rotate(314deg) brightness(97%) contrast(101%)",
                      }}
                    />
                  </a>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={LinkedIn}
                      alt="LinkedIn"
                      className="w-6 h-6 transition-transform duration-200 hover:scale-125"
                      style={{
                        filter:
                          "invert(34%) sepia(99%) saturate(1867%) hue-rotate(181deg) brightness(94%) contrast(101%)",
                      }}
                    />
                  </a>

                  {/* GitHub SVG icon bawaan */}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-6 h-6 transition-transform duration-200 hover:scale-125 fill-gray-700 hover:fill-black"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RistekGrid;
