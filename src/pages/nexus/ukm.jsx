import React from "react";
import UKMGrid from "../../components/nexus/grid/ukmgrid";

const UKM = () => {
  return (
    <div className="min-h-screen py-12 px-4 ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold font-[Carena] text-center text-black mb-4 drop-shadow-lg tracking-wide"
        data-aos="zoom-in"
        data-aos-duration="1000">
          UKM 
        </h1>
        <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-black font-extralight mb-12 text-lg font-[Montserrat]"
        data-aos="fade-up"
        data-aos-duration="1000">
          Temukan komunitas dan kembangkan potensimu bersama Unit Kegiatan
          Mahasiswa FTI UNAND!
        </p>
        <UKMGrid />
      </div>
    </div>
  );
};

export default UKM;
