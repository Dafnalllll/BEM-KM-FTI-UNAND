import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import SOSMASLING from "../../../assets/dinas nexus/press release/sosmasling/sosmasling.webp";
import SosmaslingLogo from "../../../assets/dinas nexus/logo/sosmas.webp";
import SosmaslingGrid from "../../../components/nexus/grid/sosmaslinggrid";
import SosGrid from "../../../components/nexus/proker/sosgrid";
import SosmaslingGaleri from "../../../components/nexus/galeri/sosmaslinggaleri";

export const Sosmasling = () => {
  useEffect(() => {
    document.title = "Sosmasling || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP: tetap seperti semula (tidak diubah) */}
      <div className="hidden md:relative md:z-10 md:flex md:flex-col md:min-h-screen">
        <img src={SOSMASLING} alt="SOSMASLING" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={SosmaslingLogo}
            alt="SosmaslingLogo"
            className="w-1/4 object-contain ml-[9rem] mb-[15rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[14rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Bergerak dalam bidang sosial dan lingkungan dengan sasaran
            masyarakat, bertujuan untuk meningkat jiwa-jiwa sosial KM FTI UNAND
            agar tanggap terhadap fenomena sosial dan lingkungan yang terjadi di
            masyarakat, serta mendukung tujuan pembangunan yang berkelanjutan
            untuk kehidupan masyarakat yang lebih baik.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[994px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>

      {/* MOBILE: terpisah, tidak mengubah desktop */}
      <div className="md:hidden relative z-10 flex flex-col">
        {/* Background image ukuran lebih kecil agar responsif */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={SOSMASLING}
            alt="SOSMASLING"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-4 bg-gray-200 flex flex-col items-center gap-3">
          <img
            src={SosmaslingLogo}
            alt="Sosmasling Logo"
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
            Bergerak dalam bidang sosial dan lingkungan dengan sasaran
            masyarakat, bertujuan untuk meningkat jiwa-jiwa sosial KM FTI UNAND
            agar tanggap terhadap fenomena sosial dan lingkungan yang terjadi di
            masyarakat, serta mendukung tujuan pembangunan yang berkelanjutan
            untuk kehidupan masyarakat yang lebih baik.
          </div>
        </div>
      </div>

      <SosmaslingGrid />
      <SosGrid />
      <SosmaslingGaleri />
      <FooterNexus />
    </div>
  );
};

export default Sosmasling;
