import React from "react";

const ukmList = [
  {
    nama: "UKOS",
    deskripsi:
      "Wadah pengembangan minat dan bakat mahasiswa di bidang robotika dan teknologi.",
    logo: "https://img.icons8.com/ios-filled/50/robot-2.png",
    instagram: "https://instagram.com/ukmrobotik",
    color: "from-cyan-400 to-blue-400 border-cyan-400",
  },
  {
    nama: "DPM",
    deskripsi:
      "Tempat berkumpulnya mahasiswa pecinta musik dan seni pertunjukan.",
    logo: "https://img.icons8.com/ios-filled/50/musical-notes.png",
    instagram: "https://instagram.com/ukmmusik",
    color: "from-pink-400 to-fuchsia-400 border-pink-400",
  },
  {
    nama: "FSI AL-FATIH",
    deskripsi:
      "Mendukung mahasiswa dalam kegiatan olahraga dan kompetisi antar fakultas.",
    logo: "https://img.icons8.com/ios-filled/50/basketball.png",
    instagram: "https://instagram.com/ukmolahraga",
    color: "from-amber-400 to-orange-400 border-amber-400",
  },
  {
    nama: "MAPALA TECTONA",
    deskripsi:
      "Unit Kegiatan Mahasiswa yang bergerak di bidang sosial kemanusiaan dan kesehatan.",
    logo: "https://img.icons8.com/ios-filled/50/first-aid-kit.png",
    instagram: "https://instagram.com/ukmsosial",
    color: "from-red-400 to-rose-400 border-red-400",
  },
];

const UKMGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {ukmList.map((ukm, idx) => (
      <div
        key={idx}
        className={`
          aspect-square bg-white/70 backdrop-blur-lg border-2 shadow-xl rounded-2xl p-7 flex flex-col justify-center items-center
          hover:scale-105 hover:shadow-2xl hover:border-t-4 transition-all duration-300 group
          border-white/60 ${ukm.color}
          animate-fade-in-up
        `}
        style={{
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 0 0 4px rgba(0,0,0,0.02)`,
          animationDelay: `${idx * 80}ms`,
          animationFillMode: "both",
          minHeight: "220px",
        }}
      >
        <div
          className={`bg-gradient-to-tr ${ukm.color} rounded-full p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <img
            src={ukm.logo}
            alt={ukm.nama}
            className="w-14 h-14"
            draggable={false}
          />
        </div>
        <h2 className="text-xl font-bold text-green-900 mb-2 text-center font-[Montserrat] tracking-wide drop-shadow-sm">
          {ukm.nama}
        </h2>
        <p className="text-gray-700 text-sm text-center mb-5 font-[Poppins]">
          {ukm.deskripsi}
        </p>
        {ukm.instagram && (
          <a
            href={ukm.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 text-white font-semibold shadow hover:from-pink-600 hover:to-orange-500 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            Instagram
          </a>
        )}
      </div>
    ))}
    {/* Animasi fade-in-up */}
    <style>
      {`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(.39,.575,.565,1) both;
        }
      `}
    </style>
  </div>
);

export default UKMGrid;
