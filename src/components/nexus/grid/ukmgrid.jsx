import React from "react";
import UKOS from "../../../assets/ukm/ukos.webp";
import DPM from "../../../assets/ukm/dpm.webp";
import FSI from "../../../assets/ukm/fsi.webp";
import TECTONA from "../../../assets/ukm/tectona.webp";
import Instagram from "../../../assets/socialmedia/instagram.webp";

const ukmList = [
  {
    nama: "UKOS",
    deskripsi:
      "UKM FTI yang menampung minat seni dan olahraga, melambangkan persatuan, semangat, dan dedikasi tinggi.",
    logo: UKOS,
    instagram: "https://www.instagram.com/ukos_fti/",
  },
  {
    nama: "DPM",
    deskripsi:
      "DPM merupakan lembaga legislatif di tingkat fakultas yang berfungsi sebagai perwakilan mahasiswa,menampung, menyalurkan, dan mengawasi aspirasi mahasiswa.",
    logo: DPM,
    instagram: "https://www.instagram.com/dpmftiunand/",
  },
  {
    nama: "FSI AL-FATIH",
    deskripsi:
      "FSI FTI yang membina keislaman mahasiswa, membentuk pribadi berakhlak, berilmu, dan mempererat ukhuwah islamiyah.",
    logo: FSI,
    instagram: "https://www.instagram.com/fsialfatih/",
  },
  {
    nama: "MAPALA TECTONA",
    deskripsi:
      "UKMF FTI yang menggabungkan teknologi dengan kepedulian alam, membentuk mahasiswa tangguh dan berjiwa konservasi.",
    logo: TECTONA,
    instagram: "https://www.instagram.com/mapala_tectona/",
  },
];

const UKMGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-stretch">
    {ukmList.map((ukm, idx) => (
      // wrapper untuk AOS: AOS inisialisasi di root (jangan import AOS di file ini)
      <div
        key={idx}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay={idx * 80}
        className="aos-wrapper h-full"
      >
        {/* inner card: hover transform hanya di sini sehingga tidak bentrok dengan AOS
            ubah layout jadi justify-between supaya footer (icon IG) selalu di dasar kartu */}
        <div
          className={`
            bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-7 flex flex-col justify-between items-center
            hover:scale-105 hover:shadow-2xl transition-transform duration-300 group cursor-pointer h-full
          `}
          style={{
            boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 0 0 4px rgba(0,0,0,0.02)`,
            animationDelay: `${idx * 80}ms`,
            animationFillMode: "both",
            minHeight: "320px",
          }}
        >
          {/* Header: logo + title (top) */}
          <div className="flex flex-col items-center gap-4 w-full">
            <img
              src={ukm.logo}
              alt={ukm.nama}
              className="w-24 h-24 object-contain drop-shadow-lg"
              draggable={false}
            />
            <h2 className="text-xl font-bold text-black text-center font-[Montserrat] tracking-wide drop-shadow-sm">
              {ukm.nama}
            </h2>
          </div>

          {/* Description: flex-1 untuk mengambil space tengah sehingga footer selalu di bawah */}
          <div className="px-2 mt-4 flex-1 flex items-center">
            <p className="text-gray-700 text-sm text-center font-[Poppins]">
              {ukm.deskripsi}
            </p>
          </div>

          {/* Footer: instagram button tetap di bawah (rata) */}
          <div className="w-full flex justify-center">
            {ukm.instagram && (
              <a
                href={ukm.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center mx-auto mt-2 w-11 h-11 rounded-full
                  bg-gray-800
                  shadow-lg ring-2 ring-transparent
                  hover:scale-110 hover:shadow-xl
                  transition-transform duration-300
                  group
                "
                title="Instagram"
                style={{ minWidth: "44px", minHeight: "44px" }}
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  draggable={false}
                  style={{ minWidth: "24px", minHeight: "24px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default UKMGrid;
