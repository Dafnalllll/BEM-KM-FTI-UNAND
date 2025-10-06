import React from "react";
import Kadin from "../../../assets/dinas nexus/press release/psdm/rhodes.webp";
import Sekdin from "../../../assets/dinas nexus/press release/psdm/bunga.webp";
import Bendin from "../../../assets/dinas nexus/staff release/psdm/khalda.webp";
import Alfat from "../../../assets/dinas nexus/staff release/psdm/alfat.webp";
import Nabila from "../../../assets/dinas nexus/staff release/psdm/nabila.webp";
import Diva from "../../../assets/dinas nexus/staff release/psdm/diva.webp";
import Rizky from "../../../assets/dinas nexus/staff release/psdm/rizky.webp";
import Psdm from "../../../assets/dinas nexus/logo/psdm.png";
import Social from "../../social"; // Import Social component

const gridData = [
  {
    img: Bendin,
    title: "Bendahara Dinas",
    nama: "Khalda Rahadatul Azima",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/khaldarhdtll/",
    linkedin: "https://www.linkedin.com/in/sundarpichai/",
  },
  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Bunga Jacinda",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/zero_mpty/",
    linkedin: "https://www.linkedin.com/in/bunga-jacinda-a9092b287/",
  },
  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Zelfitrio Rodeski",
    desc: "Sistem Informasi 2022",
    border: "border-green-500",
    instagram: "https://www.instagram.com/zelfitriorodeski_/",
    linkedin: "https://www.linkedin.com/in/zelfitrio-rodeski/",
  },
  {
    img: Alfat,
    title: "Staff Dinas",
    nama: "Muhammad Al Fath",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/bunshinalpat/",
    linkedin: "https://www.linkedin.com/in/cooktim/",
  },
  {
    img: Nabila,
    title: "Staff Dinas",
    nama: "Nabila Tri Hapnesari Aresta",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/nbl_trii20/",
    linkedin: "https://www.linkedin.com/in/nabilatriha052005/",
  },
  {
    img: Diva,
    title: "Staff Dinas",
    nama: "Putri Diva Riyanti",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/divavela_/",
    linkedin: "https://www.linkedin.com/in/pdivar/",
  },
  {
    img: Rizky,
    title: "Staff Dinas",
    nama: "Muhammad Rizky",
    desc: "Teknik Komputer 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/mhmd_rizk19/",
    linkedin: "https://www.linkedin.com/in/muhamadrizky19/",
  },
];

export const PsdmGrid = () => {
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
                  backgroundImage: `url(${Psdm})`,
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
export default PsdmGrid;
