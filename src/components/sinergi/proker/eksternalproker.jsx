import React from "react";

const data = [
  {
    title: "TECHNOFEST",
    desc: "Merayakan hari ulang tahun Fakultas Teknologi Informasi dengan mengadakan beberapa lomba seperti olimpiade komputer, cerdas cermat, karya tulis ilmiah dan desain grafis yang mana target pesertanya merupakan siswa/i SLTA se-sederajat.",
  },
  {
    title: "COMPANY TRIP",
    desc: "Melakukan kunjungan ke Perusahaan yang memanfaatkan teknologi informasi untuk menambah relasi, pengalaman dan pengetahuan terkait dunia kerja dengan mengadakan diskusi terkait gambaran mengenai perusahaan, budaya kerja perusahaan, dan rekruitmen karyawan terutama untuk lulusan KM FTI.",
  },
  {
    title: "BEM VISIT",
    desc: "Melakukan kegiatan mengunjungi dan dikunjungi oleh BEM KM FTI ke BEM lain yang ada di kampus maupun luar kampus dan melakukan diskusi untuk memperkenalkan masing-masing fakultas, BEM fakultas dan menjalin silaturahmi untuk mempererat hubungan kedepannya.",
  },
  {
    title: "ALUMNI INSIGHT",
    desc: "Mengadakan temu ramah/forum diskusi bersama alumni. Dengan ditetapkannya sebuah tema dari acara “Alumni Insight” hingga dapat menjalin hubungan baik melalui sebuah forum diskusi dengan mengundang IKA FTI. Dengan sharing session terkait FTI yang sekarang dan yang akan datang.",
  },
  {
    title: "PENDELEGASIAN",
    desc: "Mengirim perwakilan BEM KM FTI melalui Dinas Eksternal untuk Kegiatan-kegiatan yang ada di luar lingkungan FTI. Sehingga KM FTI dan pengurus dapat mengikuti acara - acara yang berada diluar lingkup FTI. Dimana kegiatannya dapat berupa event, konsolidasi maupun acara lainnya berdasarkan undangan yang telah diterima.",
  },
  {
    title: "MEDIA PARTNER",
    desc: "Mempromosikan suatu kegiatan yang diadakan oleh lembaga lain sebagai bentuk kerjasama sesuai dengan kesepakatan yang dibuat. ",
  },
  {
    title: "GOES TO SCHOOL",
    desc: "Memberikan edukasi kepada siswa dan siswi kelas XII terkait tentang pentingnya peran teknologi di masa sekarang dan yang akan datang. Selain itu fokus utama dari kegiatan ini adalah mempromosikan Fakultas Teknologi Informasi dan ketiga jurusan yang ada didalamnya.",
  },
];

const EksternalProkerGrid = () => (
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

export default EksternalProkerGrid;
