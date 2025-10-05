import React, { useState } from "react";
import Bakti from "../../assets/dinas nexus/kegiatan/internal/bakti.png";
import Bakti1 from "../../assets/dinas nexus/kegiatan/internal/bakti1.png";
import Bakti2 from "../../assets/dinas nexus/kegiatan/internal/bakti2.png";
import Bemvisit from "../../assets/dinas nexus/kegiatan/eksternal/bemvisit.png";
import Bemvisit1 from "../../assets/dinas nexus/kegiatan/eksternal/bemvisit1.png";
import Hackathon from "../../assets/dinas nexus/kegiatan/ristek/hackathon.png";
import BinaDesa from "../../assets/dinas nexus/kegiatan/sosmasling/binadesa.png";
export const ProgramKerja = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleImageChange = (programId, direction) => {
    setCurrentImageIndex((prev) => {
      const current = prev[programId] || 0;
      const program = programData.find((p) => p.id === programId);
      const maxIndex = program.foto.length - 1;

      if (direction === "next") {
        return { ...prev, [programId]: current >= maxIndex ? 0 : current + 1 };
      } else {
        return { ...prev, [programId]: current <= 0 ? maxIndex : current - 1 };
      }
    });
  };

  const programData = [
    {
      id: 1,
      nama: "BEM VISIT",
      deskripsi:
        "Melakukan kegiatan mengunjungi dan dikunjungi oleh BEM KM FTI ke BEM KM lain yang ada di kampus maupun luar kampus dan melakukan diskusi untuk memperkenalkan masing-masing fakultas, BEM fakultas dan menjalin silaturahmi untuk mempererat hubungan kedepannya.",
      foto: [Bemvisit, Bemvisit1], // Array untuk konsistensi
      kategori: [
        { nama: "Networking", color: "bg-blue-100 text-blue-800" },
        { nama: "Benchmarking", color: "bg-green-100 text-green-800" },
      ],
    },
    {
      id: 2,
      nama: "BAKTI FTI",
      deskripsi:
        "Mengembangkan mahasiswa serta pembekalan kepada mahasiswa baru terkait perkuliahan, fakultas, serta pengembangan diri.",
      foto: [Bakti, Bakti1, Bakti2], // Multiple images
      kategori: [
        { nama: "Orientation", color: "bg-purple-100 text-purple-800" },
        { nama: "Leadership", color: "bg-gray-100 text-gray-800" },
      ],
    },
    {
      id: 3,
      nama: "FTI Bina Desa",
      deskripsi:
        "Program pengabdian masyarakat dengan berbagai kegiatan sosial untuk membantu masyarakat kurang mampu.",
      foto: [BinaDesa], // Array untuk konsistensi
      kategori: [
        { nama: "Sosial", color: "bg-red-100 text-red-800" },
        { nama: "Pengabdian", color: "bg-yellow-100 text-yellow-800" },
      ],
    },
    {
      id: 4,
      nama: "Hackathon",
      deskripsi:
        "Acara atau kompetisi di bidang IT untuk mengembangkan kemampuan mahasiswa.",
      foto: [Hackathon], // Array untuk konsistensi
      kategori: [
        { nama: "Programming", color: "bg-green-800 text-green-100" },
        { nama: "Competition", color: "bg-amber-100 text-amber-800" },
        { nama: "Teamwork", color: "bg-orange-100 text-orange-800" },
      ],
    },
  ];

  return (
    <div className="container min-h-screen mx-auto p-6">
      <h1 className="text-3xl font-bold text-start font-[Montserrat] mb-8">
        Program Kerja
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programData.map((program) => {
          const currentIndex = currentImageIndex[program.id] || 0;
          const currentImage = program.foto[currentIndex];
          const hasMultipleImages = program.foto.length > 1;
          const isHovered = hoveredCard === program.id;

          return (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:scale-102 duration-300"
              onMouseEnter={() => setHoveredCard(program.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                <img
                  src={currentImage}
                  alt={`${program.nama} - Image ${currentIndex + 1}`}
                  className="w-full h-48 object-cover"
                />

                {/* Navigation arrows - hanya muncul saat hover dan ada multiple images */}
                {hasMultipleImages && isHovered && (
                  <>
                    <button
                      onClick={() => handleImageChange(program.id, "prev")}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all animate-fade-in cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleImageChange(program.id, "next")}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all animate-fade-in cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Dots indicator - hanya muncul saat hover dan ada multiple images */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {program.foto.map((_, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [program.id]: index,
                            }))
                          }
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentIndex
                              ? "bg-white"
                              : "bg-white bg-opacity-50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
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
    </div>
  );
};

export default ProgramKerja;
