import React from "react";
import Instagram from "../../../assets/socialmedia/instagram.png";
import LinkedIn from "../../../assets/socialmedia/linkedln.png";
import Kadin from "../../../assets/dinas nexus/press release/eksternal/ijon.png";
import Sekdin from "../../../assets/dinas nexus/press release/eksternal/kiya.png";
import Eksternal from "../../../assets/dinas nexus/logo/eksternal.png";

const gridData = [
  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Zakiya Aulia",
    desc: "Sistem Informasi 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/zakiyaaaulia/",
    linkedin: "https://www.linkedin.com/in/zakiya-aulia-498245288/",
  },
  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Ervizon Fariz",
    desc: "Sistem Informasi  2023",
    border: "border-green-800",
    instagram: "https://www.instagram.com/ervizonf/",
    linkedin: "https://www.linkedin.com/in/ervizon-fariz-106477288/",
  },
];

export const EksternalGrid = () => {
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
                backgroundImage: `url(${Eksternal})`,
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

export default EksternalGrid;
