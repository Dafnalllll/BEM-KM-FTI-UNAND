import React from "react";
import UKMGrid from "../../components/nexus/grid/ukmgrid";

const UKM = () => {
  return (
    <div className="min-h-screen py-12 px-4 ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold font-[Carena] text-center text-black mb-4 drop-shadow-lg tracking-wide">
          UKM FTI UNAND
        </h1>
        <p className="text-center text-black font-extralight mb-12 text-lg font-[Montserrat]">
          Temukan komunitas dan kembangkan potensimu bersama Unit Kegiatan
          Mahasiswa FTI UNAND!
        </p>
        <UKMGrid />
      </div>
    </div>
  );
};

export default UKM;
