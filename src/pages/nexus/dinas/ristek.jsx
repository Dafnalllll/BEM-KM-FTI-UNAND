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
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[758px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};

export default Ristek;
