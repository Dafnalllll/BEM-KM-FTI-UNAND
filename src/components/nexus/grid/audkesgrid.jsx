import React from "react";
import Instagram from "../../../assets/socialmedia/instagram.png";
import LinkedIn from "../../../assets/socialmedia/linkedln.png";
import Kabir from "../../../assets/dinas nexus/press release/audkes/ajo.png";
import Sekbir from "../../../assets/dinas nexus/press release/audkes/miftah.png";
import Benbir from "../../../assets/dinas nexus/staff release/audkes/alya.png";
import Ferdian from "../../../assets/dinas nexus/staff release/audkes/ferdian.png";
import Shyra from "../../../assets/dinas nexus/staff release/audkes/shyra.png";
import Fadhi from "../../../assets/dinas nexus/staff release/audkes/fadhi.png";
import Farhan from "../../../assets/dinas nexus/staff release/audkes/farhan.png";
import Sasya from "../../../assets/dinas nexus/staff release/audkes/sasya.png";
import Audkes from "../../../assets/dinas nexus/logo/audkes.png";

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

export default AudkesGrid;
