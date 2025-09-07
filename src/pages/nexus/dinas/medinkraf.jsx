import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import MEDINKRAF from "../../../assets/dinas nexus/press release/medinkraf/medin.png";
import MedinkrafLogo from "../../../assets/dinas nexus/logo/medin.png";
export const Medinkraf = () => {
  useEffect(() => {
    document.title = "Medinkraf || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={MEDINKRAF} alt="MEDINKRAF" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={MedinkrafLogo}
            alt="MedinkrafLogo"
            className="w-1/4 object-contain ml-[13rem] mb-[10rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[9rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Mengelola seluruh aspek komunikasi visual dan digital serta
            menyediakan platform untuk publikasi informasi seputar kegiatan BEM
            KM FTI Universitas Andalas, kepada seluruh civitas akademika di
            dalam dan diluar lingkungan Fakultas Teknologi Informasi, menyajikan
            konten yang menarik, kreatif, dan inspiratif untuk civitas akademika
            FTI melalui media sosial.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50 pointer-events-none z-0"></div>
      </div>

      <FooterNexus />
    </div>
  );
};
export default Medinkraf;
