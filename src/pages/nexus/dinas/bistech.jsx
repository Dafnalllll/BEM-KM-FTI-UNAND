import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import BISTECH from "../../../assets/dinas nexus/press release/bistech/bistech.png";
import BistechLogo from "../../../assets/dinas nexus/logo/bistech.png";
export const Bistech = () => {
  useEffect(() => {
    document.title = "Bistech || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={BISTECH} alt="Bistech" />
        {/* Gambar Nexus di tengah */}
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
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[888px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};

export default Bistech;
