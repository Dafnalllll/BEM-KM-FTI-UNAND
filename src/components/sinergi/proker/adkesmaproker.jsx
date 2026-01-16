import React from "react";

const data = [
  {
    title: "Database Adkesma",
    desc: "Media layanan dalam menampung data (permasalahan UKT, KIP-K dan beasiswa ) mahasiswa FTI.",
  },
  {
    title: "SEKAWAN (Seminar Kemahasiswaan)",
    desc: "Kegiatan seminar yang dilakukan untuk mahasiswa FTI terkait persiapan mengikuti program beasiswa dan seminar terkait prospek kerja lulusan FTI serta menyebar informasi seminar seputar kemahasiswaan.",
  },
  {
    title: "Public Hearing",
    desc: "Menyampaikan aspirasinya secara langsung kepada pihak dekanat.",
  },
  {
    title: "InterScholar",
    desc: "Membagikan dan mensosialisasikan Info-info terkait beasiswa dan magang, baik dari dalam maupun luar universitas negeri ataupun swasta. Serta mendata mahasiswa FTI yang mengikuti program terkait.",
  },
  {
    title: "IPK+",
    desc: "Sarana penyimpanan soal-soal ujian, e-book, cheatsheet, dan materi untuk membantu mahasiswa FTI dalam perkuliahan.",
  },
  {
    title: "Sahabat FTI",
    desc: "Layanan untuk mahasiswa FTI bisa menyampaikan permasalahan atau keluh kesah yang menghambat perkuliahan.",
  },
  {
    title: "Maba Care",
    desc: "Media layanan dengan melakukan pendataan mahasiswa baru, dan memberikan bantuan serta edukasi mengenai hal-hal yang berkaitan dengan Fakultas Teknologi Informasi kepada Mahasiswa Baru.",
  },
  {
    title: "Advotalk",
    desc: "Sarana advokasi permasalahan mahasiswa dan audiensi terkait informasi-informasi akademik yang akan disampaikan kepada mahasiswa Teknologi Informasi.",
  },
];

const AdkesmaProkerGrid = () => (
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 cursor-pointer">
      {data.map((item, idx) => (
        <div
          key={idx}
          data-aos="fade-up"
          data-aos-delay={idx * 80}
          className="h-full"
        >
          <div className="relative h-full bg-gradient-to-br from-[#fffbe6] via-[#f6e6b2] to-[#f9e0c7] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border border-[#e0a100] group transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Badge nomor */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e0a100] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-4 border-white text-lg group-hover:scale-110 transition">
              {idx + 1}
            </div>
            <div className="mt-6 text-xl font-bold text-[#223614] mb-2 text-center group-hover:text-[#e0a100] transition">
              {item.title}
            </div>
            <div className="text-[#263A29] text-center text-sm font-medium mb-2">
              {item.desc}
            </div>
            {/* Garis animasi bawah judul */}
            <div className="w-12 h-1 bg-[#e0a100] rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AdkesmaProkerGrid;
