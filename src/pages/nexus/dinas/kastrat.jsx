import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import KASTRAT from "../../../assets/dinas nexus/press release/kastrat/kastrat.webp";
import KastartLogo from "../../../assets/dinas nexus/logo/kastrat.webp";
import KastratGrid from "../../../components/nexus/grid/kastratgrid";
import KasGrid from "../../../components/nexus/proker/kasgrid";

export const Kastrat = () => {
  useEffect(() => {
    document.title = "Kastrat || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap persis seperti semula (tidak diubah) */}
      <div className="hidden md:relative md:z-10 md:flex md:flex-col md:min-h-screen">
        <img src={KASTRAT} alt="Kastrat" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={KastartLogo}
            alt="KastartLogo"
            className="w-1/4 object-contain ml-[14rem] mb-[6rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[3rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Bertanggung jawab sebagai motor penggerak kajian intelektual dan
            aksi strategis mahasiswa, bergerak di bidang analisis isu,
            pemberdayaan mahasiswa dan perempuan, serta pengorganisasian aksi
            dalam rangka menyuarakan aspirasi, berperan dalam mengkaji isu-isu
            strategis kampus, regional, maupun nasional, mengorganisir aksi
            damai, serta mengedukasi mahasiswa melalui diskusi publik dan
            kampanye digital.
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
            src={KASTRAT}
            alt="Kastrat"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-4 bg-gray-200 flex flex-col items-center gap-3">
          <img
            src={KastartLogo}
            alt="Kastrat Logo"
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
            Bertanggung jawab sebagai motor penggerak kajian intelektual dan
            aksi strategis mahasiswa, bergerak di bidang analisis isu,
            pemberdayaan mahasiswa dan perempuan, serta pengorganisasian aksi
            dalam rangka menyuarakan aspirasi, berperan dalam mengkaji isu-isu
            strategis kampus, regional, maupun nasional, mengorganisir aksi
            damai, serta mengedukasi mahasiswa melalui diskusi publik dan
            kampanye digital.
          </div>
        </div>
      </div>

      {/* Konten grid & proker tetap di bawah background untuk kedua viewport */}
      <KastratGrid />
      <KasGrid />
      <FooterNexus />
    </div>
  );
};

export default Kastrat;
