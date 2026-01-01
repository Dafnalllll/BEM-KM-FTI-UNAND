import React from "react";

const data = [
  {
    title: "WISUDA FTI & BAK",
    desc: "Menyusun dan melaksanakan acara wisuda FTI yang terstruktur dan melakukan pendataan BAK FTI.",
  },
  {
    title: "SINERGI MUDA",
    desc: "Memperkenalkan pola kerja BEM kepada anggota Sinergi Muda sebagai media pencari generasi penerus selanjutnya.",
  },
  {
    title: "LKMM-TD FTI",
    desc: "Kegiatan untuk memberikan pembekalan dalam memahami prinsip-prinsip berorganisasi dan kepemimpinan, serta terampil dalam menyelenggarakan kegiatan kemahasiswaan secara sistematis kepada para mahasiswa.",
  },
  {
    title: "SKENA (Sekolah Edukatif dan bermakna)",
    desc: "Memberikan pelatihan ataupun materi yang diberikan oleh instruktur untuk menambah wawasan ataupun meningkatkatkan kemampuan mahasiswa dalam berbagai aspek.",
  },
  {
    title: "Tech STAR (Technology Student Achievement Record)",
    desc: "Melakukan pendataan prestasi mahasiswa aktif FTI setiap bulan selama kepengurusan.",
  },
  {
    title: "IKARLA (Info Karir dan Lomba)",
    desc: "Melakukan penyebaran informasi terkait pengembangan karir TI dan informasi lomba TI yang bisa diikuti oleh KM FTI.",
  },
];

const PsdmProkerGrid = () => (
  <div className="w-full px-4 py-8 mt-12">
    <div className="flex flex-col items-center mb-8">
      <div
        className="text-[#b57a2a] font-bold text-2xl mb-2 text-center tracking-wide"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        PROGRAM KERJA
      </div>
      <div
        className="flex md:justify-center justify-center"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="relative w-38 h-1.5 bg-[#b57a2a] rounded flex items-center gap-2">
          <span className="absolute top-2/2 left-0 w-3 h-1.5 bg-[#e0a100] rounded-full -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate" />
          <div className="w-12 h-1 bg-[#b57a2a] rounded" />
          <div className="w-8 h-1 bg-[#b57a2a] rounded" />
        </div>
      </div>
    </div>
    {/* Baris 1: 3 data */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
      {data.slice(0, 3).map((item, idx) => (
        <div
          key={idx}
          data-aos="fade-up"
          data-aos-delay={idx * 80}
          className="h-full"
        >
          <div className="relative h-full bg-gradient-to-br from-[#fffbe6] via-[#f6e6b2] to-[#f9e0c7] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border border-[#e0a100] group transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e0a100] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-4 border-white text-lg group-hover:scale-110 transition">
              {idx + 1}
            </div>
            <div className="mt-6 text-xl font-bold text-[#223614] mb-2 text-center group-hover:text-[#e0a100] transition">
              {item.title}
            </div>
            <div className="text-[#263A29] text-center text-sm font-medium mb-2">
              {item.desc}
            </div>
            <div className="w-12 h-1 bg-[#e0a100] rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
          </div>
        </div>
      ))}
    </div>
    {/* Baris 2: 3 data */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {data.slice(3, 6).map((item, idx) => (
        <div
          key={idx + 3}
          data-aos="fade-up"
          data-aos-delay={(idx + 3) * 80}
          className="h-full"
        >
          <div className="relative h-full bg-gradient-to-br from-[#fffbe6] via-[#f6e6b2] to-[#f9e0c7] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border border-[#e0a100] group transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e0a100] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-4 border-white text-lg group-hover:scale-110 transition">
              {idx + 4}
            </div>
            <div className="mt-6 text-xl font-bold text-[#223614] mb-2 text-center group-hover:text-[#e0a100] transition">
              {item.title}
            </div>
            <div className="text-[#263A29] text-center text-sm font-medium mb-2">
              {item.desc}
            </div>
            <div className="w-12 h-1 bg-[#e0a100] rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PsdmProkerGrid;
