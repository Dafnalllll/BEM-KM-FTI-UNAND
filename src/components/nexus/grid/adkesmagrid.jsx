import React from "react";
import Kadin from "../../../assets/dinas nexus/press release/adkesma/imam.webp";
import Sekdin from "../../../assets/dinas nexus/press release/adkesma/aqila.webp";
import Bendin from "../../../assets/dinas nexus/staff release/adkesma/ael.webp";
import Fariz from "../../../assets/dinas nexus/staff release/adkesma/fariz.webp";
import Alfa from "../../../assets/dinas nexus/staff release/adkesma/alfa.webp";
import Adhit from "../../../assets/dinas nexus/staff release/adkesma/adhit.webp";
import Faiz from "../../../assets/dinas nexus/staff release/adkesma/faiz.webp";
import Zahra from "../../../assets/dinas nexus/staff release/adkesma/zahra.webp";
import Adkesma from "../../../assets/dinas nexus/logo/adkesma.png";
import Social from "../../social"; // Import Social component

const gridData = [
  {
    img: Bendin,
    title: "Bendahara Dinas",
    nama: "Alya Putri Helda",
    desc: "Teknik Komputer 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/ael/",
    linkedin: "https://www.linkedin.com/in/alya-putri-helda-67653b320/",
    github: "https://github.com/staargzing",
  },
  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Aqilla Azzahra Gema Putri",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/aqila/",
    linkedin: "https://share.google/vUu32jdSVL4viFzRJ",
  },
  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Muhammad Imam Syakri",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/imamsyakr_/",
    linkedin: "https://www.linkedin.com/in/muhammad-imam-syakri-08972a287/",
  },
  {
    img: Fariz,
    title: "Staff Dinas",
    nama: "Fariz Arditio Arafat",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/farizarditio_/",
    linkedin: "https://www.linkedin.com/in/fariz-arditio-arafat-508930287/",
  },
  {
    img: Alfa,
    title: "Staff Dinas",
    nama: "Alfa Rino Svedrilio",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/alfarinosvedrilio/",
    linkedin: "https://www.linkedin.com/in/alfa-rino-svedrilio-138481251/",
  },
  {
    img: Adhit,
    title: "Staff Dinas",
    nama: "Adhitya Ibnu Mirhand",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/adhityamirhand/",
    linkedin: "https://www.linkedin.com/in/adhitya-ibnu-mirhand-b2136b288/",
  },
  {
    img: Faiz,
    title: "Staff Dinas",
    nama: "Ahmad Faiz Batubara",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/faizbatubara_/",
    linkedin: "https://www.linkedin.com/in/faiz-batubara-21134733b/",
  },
  {
    img: Zahra,
    title: "Staff Dinas",
    nama: "Zahra Aulia Nasution",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/zhraulia.n/",
    linkedin: "https://www.linkedin.com/in/zahra-aulia-nasution-a8a821320/",
  },
];

export const Adkesmagrid = () => {
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
                  backgroundImage: `url(${Adkesma})`,
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

export default Adkesmagrid;
