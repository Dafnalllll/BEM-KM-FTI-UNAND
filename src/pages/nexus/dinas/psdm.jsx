import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import PSDM from "../../../assets/dinas nexus/press release/psdm/psdm.png";
import PsdmLogo from "../../../assets/dinas nexus/logo/psdm.png";
export const Psdm = () => {
  useEffect(() => {
    document.title = "Psdm || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={PSDM} alt="Psdm" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={PsdmLogo}
            alt="PsdmLogo"
            className="w-1/4 object-contain ml-[10rem] mb-[6rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[4rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Mengembangkan potensi mahasiswa, merancang, melaksanakan, dan
            mengevaluasi program-program yang bertujuan untuk meningkatkan
            kapasitas mahasiswa, baik dari aspek akademik maupun non-akademik,
            mulai dari hardskill hingga softskill, menciptakan lingkungan yang
            kondusif bagi mahasiswa untuk mengembangkan diri dan berkontribusi
            lebih luas.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[773px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};

export default Psdm;
