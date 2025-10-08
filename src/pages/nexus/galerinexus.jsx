import React from "react";
import GaleriGrid from "../../components/nexus/grid/galerigrid";
const GaleriNexus = () => {
  return (
    <div className="relative w-full h-[70vh] mx-auto mt-10">
      {/* Title dan Deskripsi */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg text-center">
          Galeri Nexus
        </h1>
        <p className="mt-2 text-base md:text-lg text-white/80 text-center max-w-2xl drop-shadow">
          Kumpulan dokumentasi kegiatan BEM KM FTI yang diabadikan dalam bentuk
          foto-foto terbaik. Scroll otomatis dan navigasi manual tersedia untuk
          melihat seluruh momen inspiratif.
        </p>
        
      </div>
      <GaleriGrid />   
    </div>
  );
};

export default GaleriNexus;
