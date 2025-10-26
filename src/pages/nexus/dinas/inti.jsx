import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import INTI from "../../../assets/dinas nexus/press release/inti/inti.webp";
import IntiGrid from "../../../components/nexus/grid/intigrid";
import IntiGaleri from "../../../components/nexus/galeri/intigaleri";
import Nexus from "../../../assets/kabinet/nexusinspirasi.webp";

const Inti = () => {
  useEffect(() => {
    document.title = " Inti || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap persis seperti semula (tidak diubah) */}
      <div className="hidden md:relative md:z-10 md:flex md:flex-col md:min-h-screen">
        <img src={INTI} alt="INTI" className="w-full h-auto" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={Nexus}
            alt="Nexus"
            className="w-1/6 object-contain ml-[18rem]"
          />
          <div
            className="ml-8 max-w-xl text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Poros manajerial dan eksekutif yang menjamin keberlangsungan fungsi
            organisasi secara administratif, finansial, dan strategis, serta
            memastikan seluruh kebijakan dan program kerja BEM berjalan sesuai
            visi-misi yang telah ditetapkan.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 pointer-events-none z-0"></div>
      </div>

      {/* MOBILE: terpisah, tidak mengubah desktop */}
      <div className="md:hidden relative z-10 flex flex-col">
        {/* Background image ukuran lebih kecil agar responsif */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={INTI}
            alt="INTI"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-6 bg-gray-200 flex flex-col items-center gap-4">
          <img
            src={Nexus}
            alt="Nexus"
            className="w-28 h-auto object-contain mb-2"
            data-aos="zoom-in"
            data-aos-duration="900"
            draggable={false}
          />

          <div
            className="text-center text-white text-sm font-semibold font-[Montserrat] drop-shadow-md max-w-md"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Poros manajerial dan eksekutif yang menjamin keberlangsungan fungsi
            organisasi secara administratif, finansial, dan strategis, serta
            memastikan seluruh kebijakan dan program kerja BEM berjalan sesuai
            visi-misi yang telah ditetapkan.
          </div>
        </div>
      </div>

      {/* Section IntiGrid di bawah background */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white py-12">
        <IntiGrid />
      </div>

      <IntiGaleri />
      <FooterNexus />
    </div>
  );
};

export default Inti;
