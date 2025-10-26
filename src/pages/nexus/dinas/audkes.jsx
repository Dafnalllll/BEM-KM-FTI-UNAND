import React, { useEffect } from "react";
import FooterNexus from "../../../components/nexus/footernexus";
import AUDKES from "../../../assets/dinas nexus/press release/audkes/audkes.webp";
import NavbarNexus from "../../../components/nexus/navbarnexus";
import AudkesLogo from "../../../assets/dinas nexus/logo/audkes.webp";
import AudkesGrid from "../../../components/nexus/grid/audkesgrid";
import AudGrid from "../../../components/nexus/proker/audgrid";
import AudkesGaleri from "../../../components/nexus/galeri/audkesgaleri";

export const Audkes = () => {
  useEffect(() => {
    document.title = "Audkes || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarNexus />

      {/* DESKTOP (tetap seperti semula) */}
      <div className="hidden md:flex relative z-10 flex-col min-h-screen">
        <img src={AUDKES} alt="AUDKES" className="w-full h-full object-cover" />
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
        <div className="absolute inset-0 w-full h-[739px] bg-black opacity-50 pointer-events-none z-0" />
      </div>

      {/* MOBILE (terpisah, tidak mengubah desktop) */}
      <div className="md:hidden relative z-10 flex flex-col">
        {/* Background image ukuran lebih kecil agar responsif */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={AUDKES}
            alt="AUDKES"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* overlay & content on top of bg */}
        <div className="absolute inset-x-0 top-0 h-56 bg-black/40 pointer-events-none" />

        <div className="relative z-20 px-6 py-4 bg-gray-200 flex flex-col items-center">
          <img
            src={AudkesLogo}
            alt="Audkes Logo"
            className="w-28 h-auto object-contain mb-3"
            data-aos="zoom-in"
            data-aos-duration="900"
            draggable={false}
          />

          <div
            className="text-center text-white text-sm font-semibold font-[Montserrat] drop-shadow-md max-w-md"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Mengelola administrasi kelembagaan, menjaga kedisiplinan pengurus,
            serta mempererat hubungan internal organisasi, menjaga keharmonisan
            antar anggota serta mengatur kebijakan demi terciptanya kedisiplinan
            dalam kepengurusan, pengarsipan dokumen, pengelolaan surat-menyurat,
            dan memastikan sekretariat tetap nyaman dan tertata.
          </div>
        </div>
      </div>

      {/* Section AudkesGrid di bawah background */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white py-12">
        <AudkesGrid />
      </div>

      <AudGrid />
      <AudkesGaleri />
      <FooterNexus />
    </div>
  );
};

export default Audkes;
