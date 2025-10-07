import React, { useEffect } from "react";
import DinasGrid from "../../components/nexus/grid/dinasgrid";

const DinasNexus = () => {
  useEffect(() => {
    document.title = "Dinas || Nexus Inspirasi";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto pt-10 pb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black drop-shadow-lg tracking-wide font-[Carena]">
            Dinas & Biro
          </h1>
          <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-black font-extralight mt-4 text-lg font-[Montserrat]">
            Temukan profil, program kerja, dan karya dari setiap Dinas & Biro.
          </p>
        </div>
        <DinasGrid />
      </div>
    </div>
  );
};

export default DinasNexus;
