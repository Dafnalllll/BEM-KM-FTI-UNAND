import React, { useEffect } from "react";
import FooterNexus from "../../../components/nexus/footernexus";
import AUDKES from "../../../assets/dinas nexus/press release/audkes/audkes.png";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import AudkesLogo from "../../../assets/dinas nexus/logo/audkes.png";
export const Audkes = () => {
  useEffect(() => {
    document.title = "Audkes || Nexus Inspirasi";
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />
      <div className="relative z-10 flex flex-col min-h-screen">
        <img src={AUDKES} alt="AUDKES" />
        {/* Gambar Audkes di tengah */}
        <div
          className="absolute inset-0 flex items-center justify-start z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src={AudkesLogo}
            alt="Nexus"
            className="w-1/4 object-contain ml-[13rem] mb-[6rem]"
          />
          <div
            className="ml-8 max-w-xl text-white text-center text-lg font-bold font-[Montserrat] drop-shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Mengelola administrasi kelembagaan, menjaga kedisiplinan pengurus,
            serta mempererat hubungan internal organisasi, menjaga keharmonisan
            antar anggota serta mengatur kebijakan demi terciptanya kedisiplinan
            dalam kepengurusan,pengarsipan dokumen, pengelolaan surat-menyurat,
            dan memastikan sekretariat tetap nyaman dan tertata.
          </div>
        </div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 w-full h-[739px] bg-black opacity-50 pointer-events-none z-0"></div>
      </div>
      <FooterNexus />
    </div>
  );
};

export default Audkes;
