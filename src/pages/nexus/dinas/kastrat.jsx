import React, { useEffect } from "react";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import FooterNexus from "../../../components/nexus/footernexus";
import KASTRAT from "../../../assets/dinas nexus/press release/kastrat/kastrat.png";
import KastartLogo from "../../../assets/dinas nexus/logo/kastrat.png";
export const Kastrat = () => {
  useEffect(() => {
    document.title = "Kastrat || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={KASTRAT} alt="Kastrat" />
        {/* Gambar Nexus di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={KastartLogo}
            alt="KastartLogo"
            className="w-1/4 object-contain ml-[14rem] mb-[6rem]"
          />
          <div
            className="ml-[5rem] max-w-xl mb-[3rem] text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Bertanggung jawab sebagai motor penggerak kajian intelektual dan
            aksi strategis mahasiswa, bergerak di bidang analisis isu,
            pemberdayaan mahasiswa dan perempuan, serta pengorganisasian aksi
            dalam rangka menyuarakan aspirasi, berperan dalam mengkaji isu-isu
            strategis kampus, regional, maupun nasional, mengorganisir aksi
            damai, serta mengedukasi mahasiswa melalui diskusi publik dan
            kampanye digital.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[966px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};

export default Kastrat;
