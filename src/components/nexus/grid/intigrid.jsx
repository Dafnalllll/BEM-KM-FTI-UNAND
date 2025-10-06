import React from "react";
import Gubernur from "../../../assets/dinas nexus/press release/inti/gub.webp";
import WakilGubernur from "../../../assets/dinas nexus/press release/inti/wagub.webp";
import SekretarisDaerah from "../../../assets/dinas nexus/press release/inti/sekda.webp";
import BendaharaDaerah from "../../../assets/dinas nexus/press release/inti/benda.webp";
import Nexus from "../../../assets/kabinet/nexusinspirasi.png";
import Social from "../../social"; // import Social component

const gridData = [
  {
    img: SekretarisDaerah,
    title: "Sekretaris Daerah",
    nama: "Asyifa Putri Romansha",
    desc: "Teknik Komputer 2022",
    border: "border-green-500",
    instagram: "https://www.instagram.com/asyifaputrrii/",
    linkedin: "https://www.linkedin.com/in/asyifa-putri-300001301/",
  },
  {
    img: WakilGubernur,
    title: "Wakil Gubernur",
    nama: "Umar Abdullah Azzam",
    desc: "Sistem Informasi 2022",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/umarazzam10/",
    linkedin: "https://www.linkedin.com/in/umar-abdullah-azzam-2b1a8b204/",
    github: "https://github.com/umarazzam10",
  },
  {
    img: Gubernur,
    title: "Gubernur",
    nama: "Muhammad Fajri",
    desc: "Teknik Komputer 2022",
    border: "border-green-800",
    instagram: "https://www.instagram.com/mhd_fajriii16/",
    linkedin: "https://www.linkedin.com/in/muhammad-fajri-a50a51258/",
  },
  {
    img: BendaharaDaerah,
    title: "Bendahara Daerah",
    nama: "Suci Nurhaliza",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/suci_nrhlz/",
    linkedin: "https://www.linkedin.com/in/suci-nurhaliza-725000288/",
  },
];

const IntiGrid = () => {
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
                  backgroundImage: `url(${Nexus})`,
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
export default IntiGrid;
