import React, {useEffect} from "react";
import BEM from "./assets/BEM.png";

export const NotFound = () => {
   useEffect(() => {
     document.title = "Not Found || BEM KM FTI";
   }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <img
        src={BEM}
        alt="Nexus Inspirasi Logo"
        className="w-24 h-24 mb-6"
        data-aos="fade-down"
      />
      <h1
        className="text-4xl font-bold text-white mb-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        404
      </h1>
      <h2
        className="text-2xl font-semibold text-white mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Halaman Tidak Ditemukan
      </h2>
      <p
        className="text-white mb-8 text-center max-w-md"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <a href="/nexus" data-aos="fade-up" data-aos-delay="400" className="group">
        <span className="px-6 py-2 rounded-lg bg-[#A7C7A3] text-white font-semibold transition-all duration-500 group-hover:bg-[#8fb892] group-hover:scale-110 cursor-pointer inline-block">
          Kembali ke Beranda
        </span>
      </a>
    </div>
  );
};

export default NotFound;
