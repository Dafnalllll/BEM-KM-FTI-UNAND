import React from "react";
import Kadin from "../../../assets/dinas nexus/press release/bistech/vira.webp";
import Sekdin from "../../../assets/dinas nexus/press release/bistech/manda.webp";
import Bendin from "../../../assets/dinas nexus/staff release/bistech/nayla.webp";
import Fuad from "../../../assets/dinas nexus/staff release/bistech/fuad.webp";
import Ghezy from "../../../assets/dinas nexus/staff release/bistech/ghezy.webp";
import Ochi from "../../../assets/dinas nexus/staff release/bistech/ochi.webp";
import Kevin from "../../../assets/dinas nexus/staff release/bistech/kevin.webp";
import Bistech from "../../../assets/dinas nexus/logo/bistech.webp";
import Social from "../../social"; // Import Social component

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
    github: "https://github.com/Mashia0",
  },
  {
    img: Fuad,
    title: "Staff Dinas",
    nama: "Fuadi Dhiyaulhaq",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/fuadi.dhylhq/",
    linkedin: "https://www.linkedin.com/in/fuadi-dhiyaulhaq/",
    github: "https://github.com/accfd",
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
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/kevinnrahmat/",
    linkedin: "https://www.linkedin.com/in/kevin-rahmat-illahi-13a092288/",
    github: "https://github.com/END0310",
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

export default BistechGrid;
