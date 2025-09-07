import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import ADKESMA from "../../../assets/dinas nexus/press release/adkesma/ma.png";
import AdkesmaLogo from "../../../assets/dinas nexus/logo/adkesma.png";
export const Adkesma = () => {
  useEffect(() => {
    document.title = "Adkesma || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={ADKESMA} alt="Adkesma" />
        {/* Gambar Adkesma di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={AdkesmaLogo}
            alt="Adkesma"
            className="w-1/4 object-contain ml-[12rem] mb-[12rem]"
          />
          <div
            className="ml-8 max-w-xl mb-[12rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Berfokus menampung serta membantu KM FTI yang terkendala
            perkuliahan,menjadi wadah untuk KM FTI yang mengalami kesulitan yang
            akan di audisikan ke pihak pimpinan fakultas.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[966px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};

export default Adkesma;
