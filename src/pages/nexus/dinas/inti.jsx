import React from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import INTI from "../../../assets/dinas nexus/press release/inti/inti.png";
import IntiGrid from "../../../components/nexus/grid/intigrid";
const Inti = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={INTI} alt="INTI" />
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      {/* Section IntiGrid di bawah background */}
      <div className="flex-1 flex items-center justify-center bg-white py-12">
        <IntiGrid />
      </div>
      <FooterNexus />
    </div>
  );
};

export default Inti;
