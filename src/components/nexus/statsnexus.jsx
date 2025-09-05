import React from "react";
import { Users, Award } from "lucide-react";
import CountUp from "react-countup"; // Tambahkan ini

const stats = [
  {
    title: "Total Pengurus",
    value: 79,
    icon: <Users size={32} color="#FFD700" />,
    bg: "bg-[#243A1A]",
    text: "text-white",
    titleColor: "text-[#FFD700]",
  },
  {
    title: "Jumlah Proker",
    value: 75,
    icon: <Award size={32} color="#FFD700" />,
    bg: "bg-[#1E2A38]",
    text: "text-white",
    titleColor: "text-[#FFD700]",
  },
];

const StatsNexus = () => (
  <div
    className="w-full flex justify-center py-8 bg-transparent"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className="flex flex-row w-[95vw] max-w-6xl gap-0 shadow-lg rounded-xl overflow-hidden">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`flex-1 flex flex-col items-center justify-center py-10 ${stat.bg}`}
        >
          <div className="mb-4 bg-white bg-opacity-90 rounded-md p-4">
            {stat.icon}
          </div>
          <div
            className={`text-xl font-semibold mb-2 ${
              stat.titleColor || "text-white"
            }`}
          >
            {stat.title}
          </div>
          <div className={`text-5xl font-bold ${stat.text}`}>
            <CountUp end={stat.value} duration={3} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsNexus;
