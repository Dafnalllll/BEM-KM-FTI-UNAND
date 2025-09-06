import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nexus from "../../assets/kabinet/nexusinspirasi.png";
import Audkes from "../../assets/dinas nexus/logo/audkes.png";
import Adkesma from "../../assets/dinas nexus/logo/adkesma.png";
import Bistech from "../../assets/dinas nexus/logo/bistech.png";
import Eksternal from "../../assets/dinas nexus/logo/eksternal.png";
import Internal from "../../assets/dinas nexus/logo/internal.png";
import Kastrat from "../../assets/dinas nexus/logo/kastrat.png";
import Medinkraf from "../../assets/dinas nexus/logo/medin.png";
import PSDM from "../../assets/dinas nexus/logo/psdm.png";
import Ristek from "../../assets/dinas nexus/logo/ristek.png";
import Sosmas from "../../assets/dinas nexus/logo/sosmas.png";
import NavbarNexus from "../../components/nexus/navbarnexus";
import FooterNexus from "../../components/nexus/footernexus";
// Data galeri
const galleryImages = [
  {
    id: 2,
    src: Audkes,
    alt: "Audkes",
    gridClass: "md:col-start-1 md:row-start-1",
    route: "/dinasnexus/audkes",
  },
  {
    id: 3,
    src: Adkesma,
    alt: "Adkesma",
    gridClass: "md:col-start-2 md:row-start-1",
    route: "/dinasnexus/adkesma",
  },
  {
    id: 4,
    src: Bistech,
    alt: "Bistech",
    gridClass: "md:col-start-3 md:row-start-1",
    route: "/dinasnexus/bistech",
  },
  {
    id: 5,
    src: Eksternal,
    alt: "Eksternal",
    gridClass: "md:col-start-1 md:row-start-2",
    route: "/dinasnexus/eksternal",
  },
  {
    id: 1,
    src: Nexus,
    alt: "Inti",
    gridClass: "md:col-start-2 md:row-start-2 md:row-span-2",
    route: "/dinasnexus/inti",
  },
  {
    id: 6,
    src: Internal,
    alt: "Internal",
    gridClass: "md:col-start-3 md:row-start-2",
    route: "/dinasnexus/internal",
  },
  {
    id: 7,
    src: Kastrat,
    alt: "Kastrat",
    gridClass: "md:col-start-1 md:row-start-3",
    route: "/dinasnexus/kastrat",
  },
  {
    id: 8,
    src: Medinkraf,
    alt: "Medinkraf",
    gridClass: "md:col-start-3 md:row-start-3",
    route: "/dinasnexus/medinkraf",
  },
  {
    id: 9,
    src: PSDM,
    alt: "PSDM",
    gridClass: "md:col-start-1 md:row-start-4",
    route: "/dinasnexus/psdm",
  },
  {
    id: 10,
    src: Ristek,
    alt: "Ristek",
    gridClass: "md:col-start-2 md:row-start-4",
    route: "/dinasnexus/ristek",
  },
  {
    id: 11,
    src: Sosmas,
    alt: "Sosmas",
    gridClass: "md:col-start-3 md:row-start-4",
    route: "/dinasnexus/sosmasling",
  },
];

// SlideshowImage tetap sama
const SlideshowImage = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [hovered, slides.length]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-full"
    >
      <img
        src={slides[index]}
        alt={`slide-${index}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const DinasNexus = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-500 min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="flex-1">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-4 gap-4 max-w-4xl mx-auto py-20 px-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`
              relative overflow-hidden rounded-2xl shadow-xl 
              transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-2xl
              h-[140px] group flex items-center justify-center cursor-pointer bg-white
              ${image.gridClass || ""}
            `}
            >
              <button
                type="button"
                className="w-full h-full flex items-center justify-center bg-transparent border-none outline-none cursor-pointer"
                onClick={() => navigate(image.route)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: "cover",
                    objectPosition:
                      image.alt === "Inti"
                        ? "center 80%"
                        : image.alt === "Audkes"
                        ? "center 65%"
                        : image.alt === "Adkesma"
                        ? "center 70%"
                        : image.alt === "Bistech"
                        ? "center 68%"
                        : image.alt === "Sosmas"
                        ? "center 55%"
                        : image.alt === "PSDM"
                        ? "center 65%"
                        : "center",
                    width: "60%",
                    height: "100%",
                    maxHeight: "140px",
                  }}
                />
              </button>
              <div
                className="
                absolute inset-x-0 bottom-0 w-full p-2 text-center text-[#F6EDDD] font-['Titan_One'] text-ultrabold bg-gray-600/60
                opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300 ease-in-out
              "
              >
                {image.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterNexus className="mt-auto" />
    </div>
  );
};

export default DinasNexus;
