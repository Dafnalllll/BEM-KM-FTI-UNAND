import React from "react";
import Instagram from "../../../assets/socialmedia/instagram.png";
import LinkedIn from "../../../assets/socialmedia/linkedln.png";
import Kadin from "../../../assets/dinas nexus/press release/bistech/vira.png";
import Sekdin from "../../../assets/dinas nexus/press release/bistech/manda.png";
import Bendin from "../../../assets/dinas nexus/staff release/bistech/nayla.png";
import Fuad from "../../../assets/dinas nexus/staff release/bistech/fuad.png";
import Ghezy from "../../../assets/dinas nexus/staff release/bistech/ghezy.png";
import Ochi from "../../../assets/dinas nexus/staff release/bistech/ochi.png";
import Kevin from "../../../assets/dinas nexus/staff release/bistech/kevin.png";
import Bistech from "../../../assets/dinas nexus/logo/bistech.png";

const gridData = [
  {
    img: Bendin,
    title: "Bendahara Dinas",
    nama: "Nayla Nurul Afifah",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/naylaa.na/",
    linkedin: "https://www.linkedin.com/in/naylanurulafifah/",
  },
  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Amanda Fitri Abdillah",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/amandabdlh/",
    linkedin: "https://www.linkedin.com/in/amanda-fitri-abdillah-b02116288/",
  },
  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Mashia Zavira Septyana",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/zvirsapphire/",
    linkedin: "https://www.linkedin.com/in/mashia-zavira-septyana-8106ba287/",
  },
  {
    img: Fuad,
    title: "Staff Dinas",
    nama: "Fuadi Dhiyaulhaq",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/fuadi.dhylhq/",
    linkedin: "https://www.linkedin.com/in/fuadi-dhiyaulhaq/",
  },
  {
    img: Ghezy,
    title: "Staff Dinas",
    nama: "Ghezy Pramudinata B",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/ghezy_pramudinata.b/",
    linkedin: "https://www.linkedin.com/in/ghezypb/",
  },
  {
    img: Ochi,
    title: "Staff Dinas",
    nama: "Ochi Diza Inanta",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/ochy.yy/",
    linkedin: "https://www.linkedin.com/in/ochi-diza-inanta-175b291a7/",
  },
  {
    img: Kevin,
    title: "Staff Dinas",
    nama: "Kevin Rahmat Illahi",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/kevinnrahmat/",
    linkedin: "https://www.linkedin.com/in/kevin-rahmat-illahi-13a092288/",
  },
];

export const BistechGrid = () => {
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
                  backgroundImage: `url(${Bistech})`,
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

export default BistechGrid;
