import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import INTERNAL from "../../../assets/dinas nexus/press release/internal/internal.webp";
import InternalLogo from "../../../assets/dinas nexus/logo/internal.webp";
import InternalGrid from "../../../components/nexus/grid/internalgrid";
import IntGrid from "../../../components/nexus/proker/intgrid";
import InternalGaleri from "../../../components/nexus/galeri/internalgaleri";
export const Internal = () => {
  useEffect(() => {
    document.title = "Internal || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap persis seperti semula (tidak diubah) */}
      <div className="hidden md:relative md:z-10 md:flex md:flex-col md:min-h-screen">
        <img
          src={INTERNAL}
          alt="Internal"
          className="w-full h-full object-cover"
        />
        {/* Gambar Internal di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={InternalLogo}
            alt="InternalLogo"
            className="w-1/4 object-contain ml-[10rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[1rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Bergerak di bidang sosial dengan fokus utama pada masyarakat
            Fakultas Teknologi Informasi Universitas Andalas, meningkatkan jiwa
            sosial mahasiswa FTI agar mampu membangun komunikasi yang baik, baik
            di antara sesama mahasiswa, lembaga di FTI, maupun pihak dekanat.
            Dengan pendekatan yang inklusif dan berorientasi pada kebersamaan
            untuk mengupayakan terciptanya lingkungan yang harmonis dan penuh
            solidaritas di dalam komunitas FTI.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[757px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>

      {/* MOBILE: terpisah, tidak mengubah desktop */}
      <div className="md:hidden relative z-10 flex flex-col">
        {/* Background image ukuran lebih kecil agar responsif */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={INTERNAL}
            alt="Internal"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-4 bg-gray-200 flex flex-col items-center gap-3">
          <img
            src={InternalLogo}
            alt="Internal Logo"
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
            Bergerak di bidang sosial dengan fokus utama pada masyarakat
            Fakultas Teknologi Informasi Universitas Andalas, meningkatkan jiwa
            sosial mahasiswa FTI agar mampu membangun komunikasi yang baik, baik
            di antara sesama mahasiswa, lembaga di FTI, maupun pihak dekanat.
            Dengan pendekatan yang inklusif dan berorientasi pada kebersamaan
            untuk mengupayakan terciptanya lingkungan yang harmonis dan penuh
            solidaritas di dalam komunitas FTI.
          </div>
        </div>
      </div>

      {/* Konten grid & proker tetap di bawah background untuk kedua viewport */}
      <InternalGrid />
      <IntGrid />
      <InternalGaleri />
      <FooterNexus />
    </div>
  );
};

export default Internal;
