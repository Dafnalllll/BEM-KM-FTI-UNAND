import React from "react";
import Instagram from "../../../assets/socialmedia/instagram.png";
import LinkedIn from "../../../assets/socialmedia/linkedln.png";
import Kadin from "../../../assets/dinas nexus/press release/internal/haikal.png";
import Sekdin from "../../../assets/dinas nexus/press release/internal/keysa.png";
import Bendin from "../../../assets/dinas nexus/staff release/internal/mariska.png";
import Dawi from "../../../assets/dinas nexus/staff release/internal/dawi.png";
import Aufa from "../../../assets/dinas nexus/staff release/internal/aufa.png";
import Febi from "../../../assets/dinas nexus/staff release/internal/febi.png";
import Quenn from "../../../assets/dinas nexus/staff release/internal/quenn.png";
import Internal from "../../../assets/dinas nexus/logo/internal.png";

const gridData = [
  {
    img: Bendin,
    title: "Bendahara Dinas",
    nama: "Mariska Kurnia Sofitri",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/mrskkrniasftri_/",
    linkedin: "https://www.linkedin.com/in/mariska-kurnia-142bb4288/",
  },

  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Keysa Nayla Putri",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/keysa_naylaputri/",
    linkedin: "https://www.linkedin.com/in/febiola-ramli-a111b821a/",
  },

  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Muhammad Haikal Faiz",
    desc: "Teknik Komputer 2022",
    border: "border-green-500",
    instagram: "https://www.instagram.com/kalfaiz__/",
    linkedin: "https://www.linkedin.com/in/febiola-ramli-a111b821a/",
  },

  {
    img: Febi,
    title: "Staff Dinas",
    nama: "Febiola Ramli",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/febi_.ramli/",
    linkedin: "https://www.linkedin.com/in/febiola-ramli-a111b821a/",
  },
  {
    img: Quenn,
    title: "Staff Dinas",
    nama: "Adinda Quenn Salsabila",
    desc: "Sistem Informasi 2024",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/adindaqueennn/",
    linkedin: "https://www.linkedin.com/in/quennie-putri-ramadhani/",
  },

  {
    img: Aufa,
    title: "Staff Dinas",
    nama: "Ahmad Rasha Radya Aufa Lubis",
    desc: "Sistem Informasi 2023",
    border: "border-green-800",
    instagram: "https://www.instagram.com/aufaalbs/",
    linkedin: "https://www.linkedin.com/in/aufa-rizky-putra-5b724b231/",
  },
  {
    img: Dawi,
    title: "Staff Dinas",
    nama: "Muhammad Dawi Syauqi",
    desc: "Informatika 2023",
    border: "border-green-800",
    instagram: "https://www.instagram.com/dawi.syq/",
    linkedin: "https://www.linkedin.com/in/dawi-syauqi-3556ab287/",
  },
];

export const InternalGrid = () => {
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
                  backgroundImage: `url(${Internal})`,
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
export default InternalGrid;
