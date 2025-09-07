import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import INTI from "../../../assets/dinas nexus/press release/inti/inti.png";
import IntiGrid from "../../../components/nexus/grid/intigrid";
import Nexus from "../../../assets/kabinet/nexusinspirasi.png";
const Inti = () => {
  useEffect(() => {
    document.title = " Inti || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={INTI} alt="INTI" className="w-full h-auto" />
        {/* Gambar Nexus di tengah */}
        <div className="absolute inset-0 flex items-center justify-start z-10"
        data-aos="zoom-in"
        data-aos-duration="1000"
        >
          <img src={Nexus} alt="Nexus" className="w-1/6 object-contain ml-[18rem]"/>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      {/* Section IntiGrid di bawah background */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white py-12">
        <IntiGrid />
      </div>
      <FooterNexus />
    </div>
  );
};

export default Inti;
