import React from "react";
import GaleriGrid from "../../components/nexus/grid/galerigrid";

const GaleriNexus = () => {
  return (
    <div className="w-full mx-auto mt-10 max-w-6xl px-4">
      {/* Title dan Deskripsi - sekarang di flow normal, di atas grid */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black drop-shadow-lg font-[Carena]"
        data-aos="zoom-in"
        data-aos-duration="1000">
          Galeri Nexus
        </h1>
        <p className="mt-2 text-base md:text-lg text-black text-center max-w-2xl mx-auto font-[Montserrat]"
        data-aos="fade-up"
        data-aos-duration="1000">
          Kumpulan dokumentasi kegiatan BEM KM FTI yang diabadikan dalam bentuk
          foto-foto terbaik untuk melihat seluruh momen inspiratif.
        </p>
      </div>

      {/* Grid galeri */}
      <div className="relative">
        <GaleriGrid />
      </div>
    </div>
  );
};

export default GaleriNexus;
