import React from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import INTI from "../../../assets/dinas nexus/press release/inti/inti.png";
const Inti = () => {
  return (
    <div>
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={INTI} alt="INTI" />
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};

export default Inti;
