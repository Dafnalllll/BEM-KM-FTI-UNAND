import React from "react";
import Kabir from "../../../assets/dinas nexus/press release/audkes/ajo.webp";
import Sekbir from "../../../assets/dinas nexus/press release/audkes/miftah.webp";
import Benbir from "../../../assets/dinas nexus/staff release/audkes/alya.webp";
import Ferdian from "../../../assets/dinas nexus/staff release/audkes/ferdian.webp";
import Shyra from "../../../assets/dinas nexus/staff release/audkes/shyra.webp";
import Fadhi from "../../../assets/dinas nexus/staff release/audkes/fadhi.webp";
import Farhan from "../../../assets/dinas nexus/staff release/audkes/farhan.webp";
import Sasya from "../../../assets/dinas nexus/staff release/audkes/sasya.webp";
import Audkes from "../../../assets/dinas nexus/logo/audkes.webp";
import Social from "../../social"; // Import Social component

const gridData = [
  {
    img: Benbir,
    title: "Bendahara Biro",
    nama: "Alya Ananta Taufik",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/alyantfk/",
    linkedin: "https://www.linkedin.com/in/alya-ananta-taufik-a65336288/",
  },
  {
    img: Sekbir,
    title: "Sekretaris Biro",
    nama: "Miftahul Jannah",
    desc: "Sistem Informasi 2022",
    border: "border-green-500",
    instagram: "https://www.instagram.com/mifth.mip/",
    linkedin: "https://www.linkedin.com/in/miftahuljanah19/",
  },
  {
    img: Kabir,
    title: "Kepala Biro",
    nama: "Farid Junaidi",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/_friiddd/",
    linkedin: "https://www.linkedin.com/in/williamhgates/",
    github: "https://github.com/Ambaturidd123",
  },
  {
    img: Ferdian,
    title: "Staff Biro",
    nama: "Ferdian Rahman",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/ferdianr._/",
    linkedin: "https://www.linkedin.com/in/ferdian-rahman/",
  },
  {
    img: Shyra,
    title: "Shyra",
    nama: "Ashyra Prasiwi",
    desc: "Sistem Informasi 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/_.ashyra/",
    linkedin: "https://www.linkedin.com/in/ashyra-prasiwi-61989531b/",
  },
  {
    img: Fadhi,
    title: "Staff Biro",
    nama: "Fadhilla Firma",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/fadhillafirma",
    linkedin: "https://www.linkedin.com/in/fadhilla-firma-b08632271/",
  },
  {
    img: Farhan,
    title: "Staff Biro",
    nama: "Farhan Fitrahadi",
    desc: "Sistem Informasi 2023",
    border: "border-green-500",
    instagram: "https://www.instagram.com/frhnnhdi_",
    linkedin: "https://www.linkedin.com/in/farhan-fitrahadi-932146288/",
  },
  {
    img: Sasya,
    title: "Staff Biro",
    nama: "Sasya Zamora",
    desc: "Informatika 2024",
    border: "border-green-500",
    instagram: "https://www.instagram.com/sasyaaazmr/",
    linkedin: "https://www.linkedin.com/in/sasya-zamora-123612321/",
  },
];

const AudkesGrid = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <h2
        className="text-3xl font-bold text-[#25364a] mb-4 text-center font-[Carena]"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        The People Behind Audkes
      </h2>
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
                  backgroundImage: `url(${Audkes})`,
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
export default AudkesGrid;
