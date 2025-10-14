import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import EKSTERNAL from "../../../assets/dinas nexus/press release/eksternal/eksternal.webp";
import EksternalLogo from "../../../assets/dinas nexus/logo/eksternal.webp";
import EksternalGrid from "../../../components/nexus/grid/eksternalgrid";
import EksGrid from "../../../components/nexus/proker/eksgrid";

export const Eksternal = () => {
  useEffect(() => {
    document.title = "Eksternal || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap persis seperti semula (tidak diubah) */}
      <div className="hidden md:relative md:z-10 md:flex md:flex-col md:min-h-screen">
        <img
          src={EKSTERNAL}
          alt="EKSTERNAL"
          className="w-full h-full object-cover"
        />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={EksternalLogo}
            alt="EksternalLogo"
            className="w-1/4 object-contain ml-[10rem] mb-[8rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[8rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Meningkatkan eksistensi FTI dan membangun relasi dengan pihak luar,
            seperti fakultas yang ada di UNAND, BEM KM UNAND, serta pihak
            eksternal kampus,menjadi jembatan yang memperkuat relasi dan
            kolaborasi BEM KM FTI serta merepresentasikan wajah BEM KM FTI
            dengan profesionalisme dan inovasi.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[725px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>

      {/* MOBILE: terpisah, tidak mengubah desktop */}
      <div className="md:hidden relative z-10 flex flex-col">
        {/* Background image ukuran lebih kecil agar responsif */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={EKSTERNAL}
            alt="EKSTERNAL"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-4 bg-gray-200 flex flex-col items-center gap-3">
          <img
            src={EksternalLogo}
            alt="Eksternal Logo"
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
            Meningkatkan eksistensi FTI dan membangun relasi dengan pihak luar,
            seperti fakultas di UNAND, BEM KM UNAND, serta pihak eksternal
            kampus. Menjadi jembatan yang memperkuat relasi dan kolaborasi BEM
            KM FTI serta merepresentasikan wajah BEM KM FTI dengan
            profesionalisme dan inovasi.
          </div>
        </div>
      </div>

      {/* Konten grid & proker tetap di bawah background untuk kedua viewport */}
      <EksternalGrid />
      <EksGrid />
      <FooterNexus />
    </div>
  );
};

export default Eksternal;
