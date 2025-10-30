import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Total Pengurus", value: 79 },
  { label: "Jumlah Proker", value: 75 },
];

const StatsNexus = () => (
  <div className="w-full flex justify-center pt-6">
    <div className="flex flex-wrap items-center gap-2 sm:gap-4 bg-[#25364a] px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl shadow text-white font-[Poppins] text-xs sm:text-lg font-semibold">
      <span className="font-bold">Total Pengurus:</span>
      <span className="font-bold">
        <CountUp end={stats[0].value} duration={1} />
      </span>
      <span className="mx-1 sm:mx-2 text-base sm:text-xl">·</span>
      <span className="font-bold">Jumlah Proker:</span>
      <span className="font-bold">
        <CountUp end={stats[1].value} duration={1} />
      </span>
    </div>
  </div>
);

export default StatsNexus;
