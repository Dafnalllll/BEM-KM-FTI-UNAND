import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import PSDM from "../../../assets/dinasnexus/press release/psdm/psdm.webp";
import PsdmLogo from "../../../assets/dinasnexus/logo/psdm.webp";
import PsdmGrid from "../../../components/nexus/grid/psdmgrid";
import PsdGrid from "../../../components/nexus/proker/psdgrid";
import PsdmGaleri from "../../../components/nexus/galeri/psdmgaleri";

export const Psdm = () => {
  useEffect(() => {
    document.title = "Psdm || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap seperti semula (tidak diubah) */}
      <div className="hidden md:relative md:z-10 md:flex md:flex-col md:min-h-screen">
        <img src={PSDM} alt="Psdm" className="w-full h-full object-cover" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={PsdmLogo}
            alt="PsdmLogo"
            className="w-1/4 object-contain ml-[10rem] mb-[6rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[4rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Mengembangkan potensi mahasiswa, merancang, melaksanakan, dan
            mengevaluasi program-program yang bertujuan untuk meningkatkan
            kapasitas mahasiswa, baik dari aspek akademik maupun non-akademik,
            mulai dari hardskill hingga softskill, menciptakan lingkungan yang
            kondusif bagi mahasiswa untuk mengembangkan diri dan berkontribusi
            lebih luas.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[773px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>

      {/* MOBILE: terpisah, tidak mengubah desktop */}
      <div className="md:hidden relative z-10 flex flex-col">
        {/* Background image ukuran lebih kecil agar responsif */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={PSDM}
            alt="Psdm"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-4 bg-gray-200 flex flex-col items-center gap-3">
          <img
            src={PsdmLogo}
            alt="Psdm Logo"
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
            Mengembangkan potensi mahasiswa, merancang, melaksanakan, dan
            mengevaluasi program-program yang bertujuan untuk meningkatkan
            kapasitas mahasiswa, baik dari aspek akademik maupun non-akademik,
            mulai dari hardskill hingga softskill, menciptakan lingkungan yang
            kondusif bagi mahasiswa untuk mengembangkan diri dan berkontribusi
            lebih luas.
          </div>
        </div>
      </div>

      <PsdmGrid />
      <PsdGrid />
      <PsdmGaleri />
      <FooterNexus />
    </div>
  );
};

export default Psdm;
