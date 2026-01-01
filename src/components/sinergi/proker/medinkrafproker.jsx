import React from "react";

const data = [
  {
    title: "FTI LENS",
    desc: "Mendokumentasikan  kegiatan yang dilaksanakan fakultas atau BEM KM FTI yang sudah terkoordinasi dengan Dinas Medinkraf baik acara formal maupun non formal berupa foto dan video.",
  },
  {
    title: "FTI THINGS",
    desc: "Mempublikasikan informasi yang berasal dari dinas BEM KM FTI berupa foto/video, serta membuat video  perkenalan BEM KM FTI yang ditujukan untuk kalangan internal dan eksternal melalui sosial.",
  },
  {
    title: "SINERGI DESIGN CORNER",
    desc: "Membuat desain sebagai sarana komunikasi dan penyebaran informasi kegiatan BEM KM FTI dan membuat desain lain yang  berhubungan dengan kebutuhan BEM KM FTI selama periode kepengurusan.",
  },
  {
    title: "ADMIN SINERGI",
    desc: "Mengelola media informasi (Instagram, Twitter, Youtube) yang dimiliki BEM KM FTI serta menjadikannya sebagai pusat informasi bagi KM FTI dan seluruh lembaga yang ada di dalam FTI.",
  },
  {
    title: "SINERGI CREATIVE UPGRADING",
    desc: "Mengadakan pelatihan dalam bidang kreatif sebagai wadah untuk sharing ilmu dan menambah wawasan pengurus anggota Dinas Medinkraf.",
  },
  {
    title: "JEJAK SINERGI",
    desc: "Membuat konten rangkuman kegiatan-kegiatan BEM KM FTI dalam bentuk foto yang di unggah setiap 4 bulan sekali selama kepengurusan untuk evaluasi dan kenang-kenangan bagi pengurus BEM KM FTI kabinet Sinergi.",
  },
  {
    title: "SINERGI MEDIA VISIT",
    desc: "Melakukan kunjungan ke berbagai media lokal/nasional seperti TV,Surat kabar, radio dan media online baik di dalam dan diluar UNAND untuk menambah dan memperluas link dari BEM KM FTI agar informasi yang ada tersebut secara optimal dan berkesinambungan.",
  },
];

const MedinkrafProkerGrid = () => (
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
    {/* Baris 1: 4 data */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8" >
      {data.slice(0, 4).map((item, idx) => (
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
      {data.slice(4, 7).map((item, idx) => (
        <div
          key={idx + 4}
          data-aos="fade-up"
          data-aos-delay={(idx + 4) * 80}
          className="h-full"
        >
          <div className="relative h-full bg-gradient-to-br from-[#fffbe6] via-[#f6e6b2] to-[#f9e0c7] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border border-[#e0a100] group transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e0a100] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-4 border-white text-lg group-hover:scale-110 transition">
              {idx + 5}
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

export default MedinkrafProkerGrid;
