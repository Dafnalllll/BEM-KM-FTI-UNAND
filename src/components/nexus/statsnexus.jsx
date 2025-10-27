import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Total Pengurus", value: 79 },
  { label: "Jumlah Proker", value: 75 },
];

const StatsNexus = () => (
  <div className="w-full flex justify-center pt-16">
    <div className="flex items-center gap-4 bg-[#25364a] px-6 py-3 rounded-xl shadow text-white font-[Poppins] text-lg font-semibold">
      <span className="font-bold">Total Pengurus:</span>
      <span className="font-bold">
        <CountUp end={stats[0].value} duration={1} />
      </span>
      <span className="mx-2 text-xl">·</span>
      <span className="font-bold">Jumlah Proker:</span>
      <span className="font-bold">
        <CountUp end={stats[1].value} duration={1} />
      </span>
    </div>
  </div>
);

export default StatsNexus;
