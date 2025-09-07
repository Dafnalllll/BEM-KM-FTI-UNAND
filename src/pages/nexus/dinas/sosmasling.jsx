import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import SOSMASLING from "../../../assets/dinas nexus/press release/sosmasling/sosmasling.png";
import SosmaslingLogo from "../../../assets/dinas nexus/logo/sosmas.png";
export const Sosmasling = () => {
  useEffect(() => {
    document.title = "Sosmasling || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
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
      <FooterNexus />
    </div>
  );
};

export default Sosmasling;
