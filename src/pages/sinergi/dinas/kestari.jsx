import React, { useEffect } from "react";
import NavbarSinergi from "../../../components/sinergi/navbarsinergi";
import FooterSinergi from "../../../components/sinergi/footersinergi";
import KestariProkerGrid from "../../../components/sinergi/proker/kestariproker";
import Pelantikan from "../../../assets/dinassinergi/kegiatan/pelantikan.webp";
import Kestari from "../../../assets/dinassinergi/logo/kestari.png";
import Ririn from "../../../assets/dinassinergi/press release/kestari/ririn.webp";
import Laura from "../../../assets/dinassinergi/press release/kestari/laura.webp";
import Miftah from "../../../assets/dinassinergi/press release/kestari/miftah.webp";
import Isra from "../../../assets/dinassinergi/staff release/kestari/isra.webp";
import Lara from "../../../assets/dinassinergi/staff release/kestari/lara.webp";
import Fikri from "../../../assets/dinassinergi/staff release/kestari/fikri.webp";
import Riyan from "../../../assets/dinassinergi/staff release/kestari/riyan.webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const eksekutifList = [
  {
    name: "Ririn Trikaori",
    photo: Ririn,
    desc: "Kepala Biro",
    jurusan: "Teknik Komputer 2021",
    instagram: "https://www.instagram.com/ririntrikaorii/",
    linkedin: "https://www.linkedin.com/in/ririntrikaori/",
  },
  {
    name: "Laura Iffa Razitta",
    photo: Laura,
    desc: "Sekretaris",
    jurusan: "Sistem Informasi 2022",
    instagram: "https://www.instagram.com/cllou____/",
  },
  {
    name: "Isra Rahma Dina",
    photo: Isra,
    desc: "Staff Ahli",
    jurusan: "Sistem Informasi 2022",
    instagram: "https://www.instagram.com/isra_rhmna/",
    linkedin: "https://www.linkedin.com/in/isra-rahma-dina-a81243386/",
  },
  {
    name: "Miftahul Jannah",
    photo: Miftah,
    desc: "Bendahara",
    jurusan: "Sistem Informasi 2022",
    instagram: "https://www.instagram.com/mifth.mip/",
    linkedin: "https://www.linkedin.com/in/miftahuljanah19/",
  },
  {
    name: "Hannifah Larama Agasi",
    photo: Lara,
    desc: "Staff Ahli",
    jurusan: "Informatika 2023",
    instagram: "https://www.instagram.com/laraagasii/",
  },
  {
    name: "Muhammad Fikri",
    photo: Fikri,
    desc: "Staff Ahli",
    jurusan: "Teknik Komputer 2022",
    instagram: "https://www.instagram.com/dendeng_tungau/",
  },
  {
    name: "Zulfi Ariyan",
    photo: Riyan,
    desc: "Staff Ahli",
    jurusan: "Teknik Komputer 2022",
    instagram: "https://www.instagram.com/zulfi.ariyan/",
    rotate: "rotate-12",
  },
];

const KestariSinergi = () => {
  useEffect(() => {
    document.title = "Kestari || Sinergi";
  }, []);
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${Pelantikan})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavbarSinergi />

      <div className="min-h-screen flex flex-col items-center justify-start bg-black/60  py-10">
        {/* Judul */}
        <div
          className="text-center mt-2"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <img
            src={Kestari}
            alt="Sinergi Icon"
            className="mx-auto mb-8 w-62 h-62 object-contain"
            draggable={false}
          />
          <div className="text-[#b57a2a] font-bold text-2xl mb-4 tracking-wide">
            DESKRIPSI
          </div>
          <div className="flex md:justify-center justify-center mb-4">
            <div className="relative w-38 h-1.5 bg-[#b57a2a] rounded flex items-center gap-2">
              <span className="absolute top-2/2 left-0 w-3 h-1.5 bg-[#e0a100] rounded-full -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate" />
              <div className="w-12 h-1 bg-[#b57a2a] rounded" />
              <div className="w-8 h-1 bg-[#b57a2a] rounded" />
            </div>
          </div>
          <div className="max-w-xl mx-auto text-white text-xl font-serif font-medium italic mt-6 mb-4">
            Mengelola administrasi kelembagaan, dan memastikan sekretariat tetap
            nyaman dan tertata.
          </div>
        </div>
        {/* Eksekutif */}
        <div
          className="text-center mt-16"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="text-[#b57a2a] font-bold text-2xl mb-2 tracking-wide">
            EKSEKUTIF
          </div>
          <div className="flex md:justify-center justify-center mb-4">
            <div className="relative w-38 h-1.5 bg-[#b57a2a] rounded flex items-center gap-2">
              <span className="absolute top-2/2 left-0 w-3 h-1.5 bg-[#e0a100] rounded-full -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate" />
              <div className="w-12 h-1 bg-[#b57a2a] rounded" />
              <div className="w-8 h-1 bg-[#b57a2a] rounded" />
            </div>
          </div>
          {/* Grid Formasi 7 Card */}
          <div className="w-full flex flex-col items-center gap-8 mt-12 cursor-pointer">
            {/* Baris 1 */}
            <div
              className="flex flex-col md:flex-row justify-center gap-8 mt-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <EksekutifCard {...eksekutifList[0]} />
              <EksekutifCard {...eksekutifList[1]} />
            </div>
            {/* Baris 2 */}
            <div
              className="flex flex-col md:flex-row justify-center gap-8 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <EksekutifCard {...eksekutifList[2]} />
              <EksekutifCard {...eksekutifList[3]} />
              <EksekutifCard {...eksekutifList[4]} />
            </div>
            {/* Baris 3 */}
            <div
              className="flex flex-col md:flex-row justify-center gap-8 mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <EksekutifCard {...eksekutifList[5]} />
              <EksekutifCard {...eksekutifList[6]} />
            </div>
          </div>
        </div>
        {/* Program Kerja */}
        <KestariProkerGrid />
      </div>

      <FooterSinergi />
    </div>
  );
};

const jurusanColor = (jurusan = "") => {
  if (jurusan.toLowerCase().includes("teknik komputer")) {
    return "bg-[#14532d] text-white  border-[#223614]";
  }
  if (jurusan.toLowerCase().includes("sistem informasi")) {
    return "bg-[#f59e42] text-white  border-[#e0a100]";
  }
  if (jurusan.toLowerCase().includes("informatika")) {
    return "bg-[#1e3a8a] text-white  border border-[#1e40af]";
  }
  return "bg-[#f6e6b2] text-[#b57a2a] border border-[#b57a2a]";
};

// Komponen Card Eksekutif versi kecil dengan gradient dan border divider
const EksekutifCard = ({
  name,
  photo,
  desc,
  jurusan,
  instagram,
  linkedin,
  rotate,
}) => (
  <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-[#fffbe6] via-[#f6e6b2] to-[#f9e0c7] rounded-2xl shadow-xl p-4 md:p-6 max-w-2xl w-full transition hover:shadow-2xl hover:-translate-y-2 border border-[#e0a100]">
    {/* Foto */}
    <div className="flex flex-col items-center justify-center overflow-hidden w-28 h-28 md:w-32 md:h-32 mb-4 md:mb-0">
      <img
        src={photo}
        alt={name}
        className={`w-full h-full object-cover ${rotate ? rotate : ""}`}
        draggable={false}
      />
    </div>
    {/* Garis pembatas vertikal */}
    <div className="hidden md:block h-24 border-l-2 border-dashed border-[#e0a100] mx-4"></div>
    {/* Garis pembatas horizontal untuk mobile */}
    <div className="block md:hidden w-20 border-t-2 border-dashed border-[#e0a100] my-2"></div>
    {/* Info */}
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
      <div className="text-[#223614] font-bold text-xl md:text-2xl mb-1 font-sans whitespace-nowrap truncate w-full">
        {name}
      </div>
      <div className="text-[#263A29] text-base mb-2 font-serif">{desc}</div>
      {jurusan && (
        <div className="mb-3">
          <span
            className={`inline-block font-semibold px-3 py-1 rounded-full text-xs md:text-sm whitespace-nowrap ${jurusanColor(
              jurusan
            )}`}
          >
            {jurusan}
          </span>
        </div>
      )}
      <div className="flex flex-row gap-2 mt-2">
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#e0a100] text-white font-semibold btn-fill-center instagram transition-all duration-200"
          title="Instagram"
        >
          <FaInstagram className="text-lg" />
        </a>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#e0a100] text-white font-semibold btn-fill-center linkedin transition-all duration-200"
            title="LinkedIn"
          >
            <FaLinkedin className="text-xl text-white" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default KestariSinergi;
