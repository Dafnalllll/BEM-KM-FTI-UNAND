import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import BISTECH from "../../../assets/dinasnexus/press release/bistech/bistech.webp";
import BistechLogo from "../../../assets/dinasnexus/logo/bistech.webp";
import BistechGrid from "../../../components/nexus/grid/bistechgrid";
import BisGrid from "../../../components/nexus/proker/bisgrid";
import BistechGaleri from "../../../components/nexus/galeri/bistechgaleri";

export const Bistech = () => {
  useEffect(() => {
    document.title = "Bistech || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap persis seperti semula (tidak diubah) */}
      <div className="hidden md:relative md:z-10 md:flex md:flex-col md:min-h-screen">
        <img
          src={BISTECH}
          alt="Bistech"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={BistechLogo}
            alt="BistechLogo"
            className="w-1/5 object-contain ml-[12rem] mb-[10rem]"
          />
          <div
            className="ml-[6rem] max-w-xl mb-[10rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Berfokus pada pengelolaan kewirausahaan dan penggalangan dana
            mandiri,mendukung mahasiswa serta membangun kemandirian organisasi
            dengan menciptakan peluang bisnis yang inovatif,membantu mahasiswa
            menjadi kreatif, mandiri, dan berdaya saing di era digital.
          </div>
        </div>
        <div className="absolute inset-0 w-full h-[888px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>

      {/* MOBILE: terpisah, tidak mengubah desktop */}
      <div className="md:hidden relative z-10 flex flex-col">
        {/* Background image ukuran lebih kecil agar responsif */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={BISTECH}
            alt="Bistech"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-4 bg-gray-200 flex flex-col items-center">
          <img
            src={BistechLogo}
            alt="Bistech Logo"
            className="w-28 h-auto object-contain mb-3"
            data-aos="zoom-in"
            data-aos-duration="900"
            draggable={false}
          />

          <div
            className="text-center text-white text-sm font-semibold font-[Montserrat] drop-shadow-md max-w-md"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Berfokus pada pengelolaan kewirausahaan dan penggalangan dana
            mandiri, mendukung mahasiswa serta membangun kemandirian organisasi
            dengan menciptakan peluang bisnis yang inovatif, membantu mahasiswa
            menjadi kreatif, mandiri, dan berdaya saing di era digital.
          </div>
        </div>
      </div>

      {/* Konten grid & proker tetap di bawah background untuk kedua viewport */}
      <BistechGrid />
      <BisGrid />
      <BistechGaleri />
      <FooterNexus />
    </div>
  );
};

export default Bistech;
