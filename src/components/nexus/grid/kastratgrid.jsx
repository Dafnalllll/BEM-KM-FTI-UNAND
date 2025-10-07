import React from "react";
import Kadin from "../../../assets/dinas nexus/press release/kastrat/okta.webp";
import Sekdin from "../../../assets/dinas nexus/press release/kastrat/anggun.webp";
import Bendin from "../../../assets/dinas nexus/staff release/kastrat/afelia.webp";
import Wahid from "../../../assets/dinas nexus/staff release/kastrat/wahid.webp";
import Ahmad from "../../../assets/dinas nexus/staff release/kastrat/ahmad.webp";
import Bayu from "../../../assets/dinas nexus/staff release/kastrat/bayu.webp";
import Faiz from "../../../assets/dinas nexus/staff release/kastrat/faiz.webp";
import Kastrat from "../../../assets/dinas nexus/logo/kastrat.webp";
import Social from "../../social"; // Import Social component

const gridData = [
  {
    img: Bendin,
    title: "Bendahara Dinas",
    nama: "Afelia Nasyifa",
    desc: "Teknik Komputer 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/afelianasf/",
    linkedin: "https://www.linkedin.com/in/afelia-nasyifa-a12b8831a/",
  },
  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Anggun Weldiana Putri",
    desc: "Sistem Informasi 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/anggunnwp14/",
    linkedin: "https://www.linkedin.com/in/anggun-weldiana-putri-658730288/",
  },
  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Oktavia Ramadani",
    desc: "Informatika 2023",
    border: "border-green-800",
    instagram: "https://www.instagram.com/rmdn_okt/",
    linkedin: "https://www.linkedin.com/in/oktavia-ramadani-277aa9287/",
  },
  {
    img: Wahid,
    title: "Staff Dinas",
    nama: "Wahid Dio Saputra",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/whiid._/",
    linkedin: "https://www.linkedin.com/in/wahid-dio-saputra-8a3010288/",
  },
  {
    img: Ahmad,
    title: "Staff Dinas",
    nama: "Ahmad Saidi",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/ahmdsaidi_/",
    linkedin: "https://www.linkedin.com/in/ahmdsaidi/",
  },
  {
    img: Bayu,
    title: "Staff Dinas",
    nama: "Bayu Mutawakkil",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/just._.bayu/",
    linkedin: "https://www.linkedin.com/in/bayu-mutawakkil-386373283/",
  },
  {
    img: Faiz,
    title: "Staff Dinas",
    nama: "Faiz Ramadhan Suhanda",
    desc: "Teknik Komputer 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/faizramadhans/",
    linkedin: "https://www.linkedin.com/in/faiz-ramadhan-suhanda/",
  },
];

const KastratGrid = () => {
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
                  backgroundImage: `url(${Kastrat})`,
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
export default KastratGrid;
