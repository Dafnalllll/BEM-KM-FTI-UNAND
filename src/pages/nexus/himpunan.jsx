import React from "react";
import HimpunanGrid from "../../components/nexus/grid/himpunangrid";

export const Himpunan = () => {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-black font-[Carena] mb-4 tracking-wide drop-shadow-lg"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Himpunan Mahasiswa
          </h1>
          <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
          <p
            className="text-lg md:text-xl text-gray-700 font-[Montserrat] font-extralight max-w-2xl mx-auto mt-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Temukan profil, jejaring, dan karya dari setiap Himpunan Mahasiswa
            di Fakultas Teknologi Informasi Universitas Andalas.
          </p>
        </div>
        <HimpunanGrid />
      </div>
    </div>
  );
};

export default Himpunan;
