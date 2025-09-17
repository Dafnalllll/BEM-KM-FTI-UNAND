import React from "react";
import Instagram from "../../../assets/socialmedia/instagram.png";
import LinkedIn from "../../../assets/socialmedia/linkedln.png";
import Gubernur from "../../../assets/dinas nexus/press release/inti/gub.png";
import WakilGubernur from "../../../assets/dinas nexus/press release/inti/wagub.png";
import SekretarisDaerah from "../../../assets/dinas nexus/press release/inti/sekda.png";
import BendaharaDaerah from "../../../assets/dinas nexus/press release/inti/benda.png";
import Nexus from "../../../assets/kabinet/nexusinspirasi.png"; // tambahkan gambar background header

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
    <div className="flex flex-col items-center gap-10 p-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {gridData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center  rounded-2xl shadow-lg w-[300px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            {/* Header background */}
            <div
              className="w-55 h-28 relative"
              style={{
                backgroundImage: `url(${Nexus})`,
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
            {/* Konten dibungkus div khusus untuk AOS */}
            <div
              className="pt-12 pb-4 px-4 flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
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
        ))}
      </div>
    </div>
  );
};

export default IntiGrid;
