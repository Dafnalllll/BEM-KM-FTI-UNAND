import React, { useState } from "react";
import Himatekom from "../../assets/himpunan/himatekom.webp";
import Hmsi from "../../assets/himpunan/hmsi.webp";
import Hmif from "../../assets/himpunan/hmif.webp";
import Instagram from "../../assets/socialmedia/instagram.webp";
import LinkedIn from "../../assets/socialmedia/linkedln.webp";
import Web from "../../assets/socialmedia/web.webp";

export const Himpunan = () => {
  const [activeCard, setActiveCard] = useState(null);

  const himpunanData = [
    {
      id: 1,
      logo: Hmsi,
      nama: "HMSI",
      fullName: "Himpunan Mahasiswa Sistem Informasi",
      color: "orange",
      instagram: "https://www.instagram.com/hmsi_unand/",
      linkedin: "https://www.linkedin.com/company/hmsi-unand/",
    },
    {
      id: 2,
      logo: Himatekom,
      nama: "HIMATEKOM",
      fullName: "Himpunan Mahasiswa Teknik Komputer",
      color: "green",
      instagram: "https://www.instagram.com/himatekom_unand/",
      linkedin: "https://www.linkedin.com/company/himatekom/",
      website: "https://www.himatekom.com/",
    },
    {
      id: 3,
      logo: Hmif,
      nama: "HMIF",
      fullName: "Himpunan Mahasiswa Informatika",
      color: "blue",
      instagram: "https://www.instagram.com/hmif_unand/",
      linkedin: "https://www.linkedin.com/company/hmif-fti/",
      website: "https://himaif.lmp.web.id/",
    },
  ];

  const getColorClasses = (color, type) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-gray-100",
        text: "text-blue-600",
        hover: "hover:border-blue-400",
        accent: "bg-blue-500",
        shadow: "shadow-blue-500/30",
      },
      green: {
        bg: "bg-green-50",
        border: "border-gray-100",
        text: "text-green-600",
        hover: "hover:border-green-400",
        accent: "bg-green-500",
        shadow: "shadow-green-500/30",
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-gray-100",
        text: "text-orange-600",
        hover: "hover:border-orange-400",
        accent: "bg-orange-500",
        shadow: "shadow-orange-500/30",
      },
    };
    return colors[color][type];
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-black font-[Carena] mb-4 tracking-wide drop-shadow-lg">
            Himpunan Mahasiswa
          </h1>
          <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-700 font-[Montserrat] font-extralight max-w-2xl mx-auto mt-2">
            Temukan profil, jejaring, dan karya dari setiap Himpunan Mahasiswa
            di Fakultas Teknologi Informasi Universitas Andalas.
          </p>
        </div>

        {/* Logo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {himpunanData.map((item) => (
            <div key={item.id} className="group text-center">
              {/* Logo Card */}
              <div
                className={`relative bg-white border-3 rounded-3xl p-12 transition-all duration-500 cursor-pointer mx-auto mb-6
                  ${getColorClasses(item.color, "border")} 
                  ${getColorClasses(item.color, "hover")}
                  hover:shadow-xl ${
                    activeCard === item.id
                      ? `${getColorClasses(
                          item.color,
                          "shadow"
                        )} shadow-2xl scale-105`
                      : "hover:-translate-y-2"
                  }`}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Background Pattern */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-all duration-500 opacity-0 group-hover:opacity-100
                    ${getColorClasses(item.color, "bg")}`}
                ></div>

                {/* Logo */}
                <div className="relative z-10 w-32 h-32 mx-auto transition-all duration-500 group-hover:scale-110">
                  <img
                    src={item.logo}
                    alt={item.nama}
                    className="w-full h-full object-contain drop-shadow-lg "
                  />
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300
                    ${
                      activeCard === item.id
                        ? getColorClasses(item.color, "accent")
                        : "bg-gray-200"
                    }`}
                ></div>
              </div>

              {/* Text Content */}
              <div>
                <h2
                  className={`text-3xl font-semibold mb-3 transition-colors duration-300
                  ${
                    activeCard === item.id
                      ? getColorClasses(item.color, "text")
                      : "text-gray-800"
                  }`}
                >
                  {item.nama}
                </h2>

                {/* Social Media Icons - di bawah nama */}
                <div className="flex justify-center gap-4 mb-4">
                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center justify-center  hover:scale-110  transition-all duration-200 "
                  >
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className="w-8 h-8"
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
                    className=" flex items-center justify-center hover:scale-110  transition-all duration-200 "
                  >
                    <img
                      src={LinkedIn}
                      alt="LinkedIn"
                      className="w-8 h-8"
                      style={{
                        filter:
                          "invert(34%) sepia(99%) saturate(1867%) hue-rotate(181deg) brightness(94%) contrast(101%)",
                      }}
                    />
                  </a>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center justify-center hover:scale-110  transition-all duration-200 "
                  >
                    <img
                      src={Web}
                      alt="Website"
                      className="w-8 h-8"
                      style={{
                        filter:
                          "invert(34%) sepia(99%) saturate(1867%) hue-rotate(181deg) brightness(94%) contrast(101%)",
                      }}
                    />
                  </a>
                </div>

                <p className="text-base text-gray-600 font-medium leading-relaxed max-w-sm mx-auto">
                  {item.fullName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Himpunan;
