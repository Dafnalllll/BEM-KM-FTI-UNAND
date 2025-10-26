import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import ADKESMA from "../../../assets/dinas nexus/press release/adkesma/ma.webp";
import AdkesmaLogo from "../../../assets/dinas nexus/logo/adkesma.webp";
import Adkesmagrid from "../../../components/nexus/grid/adkesmagrid";
import AdkesGrid from "../../../components/nexus/proker/adkesgrid";
import AdkesmaGaleri from "../../../components/nexus/galeri/adkesmagaleri";

export const Adkesma = () => {
  useEffect(() => {
    document.title = "Adkesma || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap persis seperti semula (tidak diubah) */}
      <div className="hidden md:block relative z-10 flex-col min-h-screen">
        <img
          src={ADKESMA}
          alt="Adkesma"
          className="w-full h-full object-cover"
        />
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

      {/* MOBILE: terpisah, tidak mengubah desktop */}
      <div className="md:hidden relative z-10 flex flex-col">
        {/* Background image ukuran lebih kecil agar responsif */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={ADKESMA}
            alt="Adkesma"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-6 bg-gray-200 flex flex-col items-center gap-4">
          <img
            src={AdkesmaLogo}
            alt="Adkesma Logo"
            className="w-28 h-auto object-contain mb-1"
            data-aos="zoom-in"
            data-aos-duration="900"
            draggable={false}
          />

          <div
            className="text-center text-white text-sm font-semibold font-[Montserrat] drop-shadow-md max-w-md"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Berfokus menampung serta membantu KM FTI yang terkendala
            perkuliahan, menjadi wadah untuk KM FTI yang mengalami kesulitan
            yang akan diaudisikan ke pihak pimpinan fakultas.
          </div>
        </div>
      </div>

      {/* Section Adkesmagrid di bawah background */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white py-12">
        <Adkesmagrid />
      </div>

      <AdkesGrid />
      <AdkesmaGaleri />
      <FooterNexus />
    </div>
  );
};

export default Adkesma;
