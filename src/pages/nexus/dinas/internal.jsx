import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import INTERNAL from "../../../assets/dinas nexus/press release/internal/internal.png";
import InternalLogo from "../../../assets/dinas nexus/logo/internal.png";
export const Internal = () => {
  useEffect(() => {
    document.title = "Internal || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={INTERNAL} alt="Internal" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={InternalLogo}
            alt="InternalLogo"
            className="w-1/4 object-contain ml-[10rem] "
          />
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[757px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};
export default Internal;
