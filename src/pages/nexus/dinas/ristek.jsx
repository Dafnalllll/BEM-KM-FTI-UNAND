import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import RISTEK from "../../../assets/dinas nexus/press release/ristek/rizztek.png";
import RistekLogo from "../../../assets/dinas nexus/logo/ristek.png";
const Ristek = () => {
  useEffect(() => {
    document.title = "Ristek || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
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
      <FooterNexus />
    </div>
  );
};

export default Ristek;
