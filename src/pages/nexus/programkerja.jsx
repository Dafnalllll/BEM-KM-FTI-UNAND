import React from "react";
import ProkerGrid from "../../components/nexus/grid/prokergrid";

export const ProgramKerja = () => {
  return (
    <div className="container min-h-screen mx-auto p-6">
      <div className="max-w-3xl mx-auto pt-8 pb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black drop-shadow-lg tracking-wide font-[Carena]">
          Program Kerja
        </h1>
        <p className="text-center font-extralight text-black mt-4 text-lg font-[Montserrat]">
          Jelajahi berbagai program kerja inovatif, inspiratif, dan kolaboratif.
        </p>
      </div>
      <ProkerGrid />
    </div>
  );
};

export default ProgramKerja;
