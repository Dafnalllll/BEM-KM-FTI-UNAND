import React from "react";
import Instagram from "../../../assets/socialmedia/instagram.png";
import LinkedIn from "../../../assets/socialmedia/linkedln.png";
import Sosmasling from "../../../assets/dinas nexus/logo/sosmas.png";
import Kadin from "../../../assets/dinas nexus/press release/sosmasling/nori.png";
import Sekdin from "../../../assets/dinas nexus/press release/sosmasling/sovia.png";
import Bendin from "../../../assets/dinas nexus/staff release/sosmasling/shaza.png";
import Zhafira from "../../../assets/dinas nexus/staff release/sosmasling/zhafira.png";
import Faiz from "../../../assets/dinas nexus/staff release/sosmasling/faiz.png";

const gridData = [
  {
    img: Bendin,
    title: "Bendahara Dinas",
    nama: "Shaza Zulfiani",
    desc: "Teknik Komputer 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/shazazulfianii/",
    linkedin: "https://www.linkedin.com/in/shaza-zulfiani-25a621287/",
  },
  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Sovia Maulana Anugrah",
    desc: "Teknik Komputer 2023",
    border: "border-green-800",
    instagram: "https://www.instagram.com/sovia_ma28/",
    linkedin: "https://www.linkedin.com/in/sovia-maulana-anugrah-375904287/",
  },
  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Nori Dwi Yulianti",
    desc: "Sistem Informasi 2023",
    border: "border-red-500",
    instagram: "https://www.instagram.com/_nori.d.y_/",
    linkedin: "https://www.linkedin.com/in/shaza-nurul-123456789/",
  },
  {
    img: Zhafira,
    title: "Staff Dinas",
    nama: "Zhafira Fatihah Oswiputri",
    desc: "Teknik Komputer 2024",
    border: "border-purple-500",
    instagram: "https://www.instagram.com/zha.pilaaa/",
    linkedin:
      "https://www.linkedin.com/in/zhafira-fatihah-oswiputri-718b8931b/",
  },
  {
    img: Faiz,
    title: "Staff Dinas",
    nama: "Faiz Anargya",
    desc: "Teknik Komputer 2024",
    border: "border-yellow-500",
    instagram: "https://www.instagram.com/paaaaiss_?igsh=cGoyaHhuYTQwbHRr",
    linkedin: "https://www.linkedin.com/in/faiz-anargya-undefined-011330386/",
  },
];

export const SosmaslingGrid = () => {
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
                  backgroundImage: `url(${Sosmasling})`,
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
                {/* Social icons */}
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SosmaslingGrid;
