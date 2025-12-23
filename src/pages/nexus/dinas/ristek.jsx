import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import RISTEK from "../../../assets/dinasnexus/press release/ristek/rizztek.webp";
import RistekLogo from "../../../assets/dinasnexus/logo/ristek.webp";
import RistekGrid from "../../../components/nexus/grid/ristekgrid";
import Risgrid from "../../../components/nexus/proker/risgrid";
import NexmudRistekGrid from "../../../components/nexus/grid/nexmudristekgrid";
import RistekGaleri from "../../../components/nexus/galeri/ristekgaleri";

const Ristek = () => {
  useEffect(() => {
    document.title = "Ristek || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap persis seperti semula (tidak diubah) */}
      <div className="hidden md:relative md:z-10 md:flex md:flex-col md:min-h-screen">
        <img src={RISTEK} alt="RISTEK" />
        {/* Gambar Ristek di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={RistekLogo}
            alt="RistekLogo"
            className="w-1/4 object-contain ml-[12rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[1rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Motor penggerak dalam penelitian dan pengembangan di lingkungan
            Fakultas Teknologi Informasi Universitas Andalas, mengkaji berbagai
            permasalahan strategis serta fenomena unik yang terjadi di internal
            FTI UNAND, sekaligus menjadi wadah bagi mahasiswa yang memiliki
            potensi dalam menciptakan inovasi dan solusi berbasis teknologi,
            memperkuat basis data, memperdalam wacana seputar isu-isu terkini,
            serta mendorong pengembangan potensi mahasiswa di bidang teknologi
            informasi.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[758px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>

      {/* MOBILE: terpisah, tidak mengubah desktop */}
      <div className="md:hidden relative z-10 flex flex-col">
        {/* Background image ukuran lebih kecil agar responsif */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={RISTEK}
            alt="RISTEK"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-4 bg-gray-200 flex flex-col items-center gap-3">
          <img
            src={RistekLogo}
            alt="Ristek Logo"
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
            Motor penggerak dalam penelitian dan pengembangan di lingkungan
            Fakultas Teknologi Informasi Universitas Andalas, mengkaji berbagai
            permasalahan strategis serta fenomena unik yang terjadi di internal
            FTI UNAND, sekaligus menjadi wadah bagi mahasiswa yang memiliki
            potensi dalam menciptakan inovasi dan solusi berbasis teknologi,
            memperkuat basis data, memperdalam wacana seputar isu-isu terkini,
            serta mendorong pengembangan potensi mahasiswa di bidang teknologi
            informasi.
          </div>
        </div>
      </div>

      {/* Konten grid & proker tetap di bawah background untuk kedua viewport */}
      <RistekGrid />
      <NexmudRistekGrid />
      <Risgrid />
      <RistekGaleri />
      <FooterNexus />
    </div>
  );
};

export default Ristek;
