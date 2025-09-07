import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import EKSTERNAL from "../../../assets/dinas nexus/press release/eksternal/eksternal.png";
import EksternalLogo from "../../../assets/dinas nexus/logo/eksternal.png";
export const Eksternal = () => {
  useEffect(() => {
    document.title = "Eksternal || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={EKSTERNAL} alt="EKSTERNAL" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={EksternalLogo}
            alt="EksternalLogo"
            className="w-1/4 object-contain ml-[10rem] mb-[8rem]"
          />
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[725px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};

export default Eksternal;
