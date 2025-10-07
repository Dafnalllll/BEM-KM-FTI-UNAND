import React, { useState } from "react";
import FTIPARADE from "../../../assets/dinas nexus/kegiatan/internal/FTI Parade.webp";
import Technofest from "../../../assets/dinas nexus/kegiatan/eksternal/technofest.webp";
import Hackathon from "../../../assets/dinas nexus/kegiatan/ristek/hackathon.webp";
import BinaDesa from "../../../assets/dinas nexus/kegiatan/sosmasling/binadesa.webp";
import Funtime from "../../../assets/dinas nexus/kegiatan/audkes/funtime.webp";
import Nexmud from "../../../assets/dinas nexus/kegiatan/psdm/nexmud.webp";
import Warnex from "../../../assets/dinas nexus/kegiatan/bistech/warnex.webp";
import Sekawan from "../../../assets/dinas nexus/kegiatan/adkesma/sekawan.webp";

const programData = [
  {
    id: 1,
    nama: "TECHNOFEST",
    deskripsi:
      "Merayakan hari ulang tahun Fakultas Teknologi Informasi dengan mengadakan beberapa lomba seperti olimpiade komputer, cerdas cermat, karya tulis ilmiah dan desain grafis yang mana target pesertanya merupakan siswa/i SLTA se-sederajat. ",
    foto: [Technofest],
    kategori: [
      { nama: "Networking", color: "bg-cyan-100 text-cyan-800" },
      { nama: "Creativity", color: "bg-pink-100 text-pink-800" },
      { nama: "Competition", color: "bg-indigo-100 text-indigo-800" },
      { nama: "Teamwork", color: "bg-lime-100 text-lime-800" },
    ],
  },
  {
    id: 2,
    nama: "FTI PARADE",
    deskripsi:
      "Mengantarkan wisudawan dari Ruang Audit menuju Seminar F oleh warga FTI, kegiatan ini bertujuan untuk sarana silaturahmi antara warga FTI dan juga wisudawan yang akan dilepas.",
    foto: [FTIPARADE],
    kategori: [
      { nama: "Graduation", color: "bg-emerald-100 text-emerald-800" },
      { nama: "Celebration", color: "bg-yellow-200 text-yellow-900" },
      { nama: "Togetherness", color: "bg-sky-100 text-sky-800" },
      { nama: "Tradition", color: "bg-fuchsia-100 text-fuchsia-800" },
    ],
  },
  {
    id: 3,
    nama: "FTI BINA DESA",
    deskripsi:
      "Program pengabdian masyarakat dengan berbagai kegiatan sosial untuk membantu masyarakat kurang mampu.",
    foto: [BinaDesa],
    kategori: [
      { nama: "Social", color: "bg-red-100 text-red-800" },
      { nama: "Empowerment", color: "bg-teal-100 text-teal-800" },
    ],
  },
  {
    id: 4,
    nama: "HACKATHON",
    deskripsi:
      "Sebuah acara atau kompetisi yang melibatkan para programmer, pengembang perangkat lunak, desainer, dan individu lain yang memiliki keahlian terkait teknologi untuk bekerja sama dalam tim.",
    foto: [Hackathon],
    kategori: [
      { nama: "Programming", color: "bg-green-200 text-green-900" },
      { nama: "Challenge", color: "bg-orange-200 text-orange-900" },
      { nama: "Innovation", color: "bg-violet-100 text-violet-800" },
    ],
  },
  {
    id: 5,
    nama: "FUN TIME",
    deskripsi:
      "Sarana refreshing untuk memberikan hiburan dan lebih mendekatkan antar sesama pengurus BEM KM FTI UNAND 2025",
    foto: [Funtime],
    kategori: [
      { nama: "Entertainment", color: "bg-rose-100 text-rose-800" },
      { nama: "Togetherness", color: "bg-amber-100 text-amber-800" },
      { nama: "Team Building", color: "bg-blue-200 text-blue-900" },
    ],
  },
  {
    id: 6,
    nama: "NEXMUD",
    deskripsi:
      "Sekolah kepemimpinan untuk mahasiswa baru FTI agar bisa merasakan kehidupan berorganisasi di BEM KM FTI, dimana didalamnya terdapat serangkaian kegiatan yang meliputi: Pemberian materi, Simulasi, FGD serta magang di kedinasan masing-masing dengan SOP yang telah ditetapkan.",
    foto: [Nexmud],
    kategori: [
      { nama: "Leadership", color: "bg-indigo-200 text-indigo-900" },
      { nama: "Training", color: "bg-lime-200 text-lime-900" },
      { nama: "Organization", color: "bg-cyan-200 text-cyan-900" },
      { nama: "Mentoring", color: "bg-pink-200 text-pink-900" },
    ],
  },
  {
    id: 7,
    nama: "WARNEX",
    deskripsi:
      "Kegiatan penjualan kebutuhan KM FTI UNAND secara offline di sekretariatan BEM KM FTI, maupun secara online melalui platform Instagram, serta event-event  FTI dengan tujuan agar KM FTI UNAND mudah mendapatkan apa yang mereka butuhkan.",
    foto: [Warnex],
    kategori: [
      { nama: "Entrepreneurship", color: "bg-orange-300 text-orange-900" },
      { nama: "Service", color: "bg-teal-200 text-teal-900" },
      { nama: "Marketplace", color: "bg-yellow-300 text-yellow-900" },
      { nama: "Innovation", color: "bg-purple-200 text-purple-900" },
    ],
  },
  {
    id: 8,
    nama: "SEKAWAN",
    deskripsi:
      "Kegiatan seminar yang dilakukan untuk mahasiswa FTI terkait persiapan mengikuti program beasiswa dan seminar terkait prospek kerja lulusan FTI serta menyebar informasi seminar seputar kemahasiswaan di FTI UNAND.",
    foto: [Sekawan],
    kategori: [
      { nama: "Scholarship", color: "bg-teal-300 text-teal-900" },
      { nama: "Career", color: "bg-pink-300 text-pink-900" },
      { nama: "Seminar", color: "bg-orange-200 text-orange-900" },
      { nama: "Information", color: "bg-indigo-300 text-indigo-900" },
    ],
  },
  {
    id: 9,
    nama: "medin",
    deskripsi:
      "Kegiatan seminar yang dilakukan untuk mahasiswa FTI terkait persiapan mengikuti program beasiswa dan seminar terkait prospek kerja lulusan FTI serta menyebar informasi seminar seputar kemahasiswaan di FTI UNAND.",
    foto: [],
    kategori: [
      { nama: "Scholarship", color: "bg-teal-300 text-teal-900" },
      { nama: "Career", color: "bg-pink-300 text-pink-900" },
      { nama: "Seminar", color: "bg-orange-200 text-orange-900" },
      { nama: "Information", color: "bg-indigo-300 text-indigo-900" },
    ],
  },
  {
    id: 10,
    nama: "medin",
    deskripsi:
      "Kegiatan seminar yang dilakukan untuk mahasiswa FTI terkait persiapan mengikuti program beasiswa dan seminar terkait prospek kerja lulusan FTI serta menyebar informasi seminar seputar kemahasiswaan di FTI UNAND.",
    foto: [],
    kategori: [
      { nama: "Scholarship", color: "bg-teal-300 text-teal-900" },
      { nama: "Career", color: "bg-pink-300 text-pink-900" },
      { nama: "Seminar", color: "bg-orange-200 text-orange-900" },
      { nama: "Information", color: "bg-indigo-300 text-indigo-900" },
    ],
  },
];

const ProkerGrid = () => {
  const [currentImageIndex] = useState({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programData.map((program) => {
        const currentIndex = currentImageIndex[program.id] || 0;
        const currentImage = program.foto[currentIndex];

        return (
          <div
            key={program.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all hover:scale-102 duration-300"
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
            }}
          >
            <div className="relative">
              <img
                src={currentImage}
                alt={`${program.nama} - Image ${currentIndex + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {program.nama}
              </h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {program.deskripsi}
              </p>
              <div className="flex gap-2 flex-wrap">
                {program.kategori.map((tag, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                  >
                    {tag.nama}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProkerGrid;
