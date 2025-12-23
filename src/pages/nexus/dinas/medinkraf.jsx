import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import MEDINKRAF from "../../../assets/dinasnexus/press release/medinkraf/medin.webp";
import MedinkrafLogo from "../../../assets/dinasnexus/logo/medin.webp";
import MedinGrid from "../../../components/nexus/grid/medingrid";
import MedGrid from "../../../components/nexus/proker/medgrid";
import MedinkrafGaleri from "../../../components/nexus/galeri/medinkrafgaleri";

export const Medinkraf = () => {
  useEffect(() => {
    document.title = "Medinkraf || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap persis seperti semula (tidak diubah) */}
      <div className="hidden md:relative md:z-10 md:flex md:flex-col md:min-h-screen">
        <img src={MEDINKRAF} alt="MEDINKRAF" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={MedinkrafLogo}
            alt="MedinkrafLogo"
            className="w-1/4 object-contain ml-[13rem] mb-[10rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[9rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Mengelola seluruh aspek komunikasi visual dan digital serta
            menyediakan platform untuk publikasi informasi seputar kegiatan BEM
            KM FTI Universitas Andalas, kepada seluruh civitas akademika di
            dalam dan diluar lingkungan Fakultas Teknologi Informasi, menyajikan
            konten yang menarik, kreatif, dan inspiratif untuk civitas akademika
            FTI melalui media sosial.
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
            src={MEDINKRAF}
            alt="MEDINKRAF"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-4 bg-gray-200 flex flex-col items-center gap-3">
          <img
            src={MedinkrafLogo}
            alt="Medinkraf Logo"
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
            Mengelola seluruh aspek komunikasi visual dan digital serta
            menyediakan platform untuk publikasi informasi seputar kegiatan BEM
            KM FTI Universitas Andalas, kepada seluruh civitas akademika di
            dalam dan diluar lingkungan Fakultas Teknologi Informasi, menyajikan
            konten yang menarik, kreatif, dan inspiratif untuk civitas akademika
            FTI melalui media sosial.
          </div>
        </div>
      </div>

      {/* Konten grid & proker tetap di bawah background untuk kedua viewport */}
      <MedinGrid />
      <MedGrid />
      <MedinkrafGaleri />
      <FooterNexus />
    </div>
  );
};

export default Medinkraf;
