import React, { useEffect } from "react";
import NavbarSinergi from "../../../components/sinergi/navbarsinergi";
import FooterSinergi from "../../../components/sinergi/footersinergi";
import Pelantikan from "../../../assets/dinassinergi/kegiatan/pelantikan.webp";
import Sinergi from "../../../assets/kabinet/sinergi.webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Gub1 from "../../../assets/dinassinergi/press release/inti/ikhwan.webp";
import Wagub from "../../../assets/dinassinergi/press release/inti/yusuf.webp";
import Bendahara from "../../../assets/dinassinergi/press release/inti/najla.webp";
import Sekretaris from "../../../assets/dinassinergi/press release/inti/dinda.webp";

// Contoh data eksekutif
const eksekutifList = [
  {
    name: "Ikhwanul Hakim",
    photo: Gub1,
    desc: "Gubernur",
    jurusan: "Teknik Komputer 2021",
    instagram: "https://www.instagram.com/ikhwannnn___/",
    linkedin: "https://www.linkedin.com/in/ikhwanul-hakim-b41246222/",
  },
  {
    name: "Dinda Mestika",
    photo: Sekretaris,
    desc: "Sekretaris Umum",
    jurusan: "Teknik Komputer 2021",
    instagram: "https://www.instagram.com/dindamstkaaa/",
    linkedin: "https://www.linkedin.com/in/dindamestika//",
  },
  {
    name: "Najla Humaira Desni",
    photo: Bendahara,
    desc: "Bendahara Umum",
    jurusan: "Sistem Informasi 2022",
    instagram: "https://www.instagram.com/njla_humaira/",
    linkedin: "https://www.linkedin.com/in/najla-humaira-04669a286/",
  },
  {
    name: "Muhammad Yusuf",
    photo: Wagub,
    desc: "Wakil Gubernur",
    jurusan: "Teknik Komputer 2021",
    instagram: "https://www.instagram.com/yusuf.png_/",
  },
];

const Inti = () => {
  useEffect(() => {
    document.title = "Inti || Sinergi";
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

      <div className="min-h-screen flex flex-col items-center justify-start bg-black/60 py-6 px-2 md:py-10">
        {/* Judul */}
        <div
          className="text-center mt-10"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <img
            src={Sinergi}
            alt="Sinergi Icon"
            className="mx-auto mb-8 w-32 h-32 object-contain"
            draggable={false}
          />
          <div className="text-[#b57a2a] font-bold text-2xl mb-2 tracking-wide">
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
            Poros manajerial dan eksekutif yang menjamin keberlangsungan fungsi
            organisasi secara administratif, finansial, dan strategis.
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
          {/* Formasi Layang-layang */}
          <div
            className="w-full flex flex-col items-center gap-8 mt-12 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Atas */}
            <div
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <EksekutifCard {...eksekutifList[0]} />
            </div>
            {/* Tengah */}
            <div
              className="flex flex-col md:flex-row justify-center gap-6 md:gap-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <EksekutifCard {...eksekutifList[1]} />
              <EksekutifCard {...eksekutifList[2]} />
            </div>
            {/* Bawah */}
            <div
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <EksekutifCard {...eksekutifList[3]} />
            </div>
          </div>
        </div>
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
    return "bg-[#e2f0ff] text-[#1e40af] border border-[#1e40af]";
  }
  return "bg-[#f6e6b2] text-[#b57a2a] border border-[#b57a2a]";
};

// Komponen Card Eksekutif
const EksekutifCard = ({ name, photo, desc, jurusan, instagram, linkedin }) => (
  <div className="flex flex-col md:flex-row rounded-2xl shadow-xl p-0 w-full max-w-xs md:max-w-4xl items-center transition hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-[#fffbe6] via-[#f6e6b2] to-[#f9e0c7] border border-[#e0a100]">
    {/* Foto */}
    <div className="flex flex-col items-center justify-center p-4 md:p-8 min-w-[120px] md:min-w-[180px]">
      <img
        src={photo}
        alt={name}
        className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-xl"
        draggable={false}
      />
    </div>
    {/* Garis pembatas vertikal */}
    <div className="hidden md:block h-40 border-l-2 border-dashed border-[#e0a100] mx-4"></div>
    {/* Garis pembatas horizontal untuk mobile */}
    <div className="block md:hidden w-24 border-t-2 border-dashed border-[#e0a100] my-2"></div>
    {/* Deskripsi */}
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-8 pt-0 md:pt-8">
      <div className="text-[#223614] font-bold text-lg md:text-2xl mb-2 font-sans w-full">
        {name}
      </div>
      <div className="text-[#263A29] text-sm md:text-lg mb-4 font-serif">
        {desc}
      </div>
      {/* Jurusan: styled badge with color */}
      {jurusan && (
        <div className="mb-3">
          <span
            className={`inline-block font-semibold px-3 py-1 rounded-full text-xs md:text-base  ${jurusanColor(
              jurusan
            )}`}
          >
            {jurusan}
          </span>
        </div>
      )}
      <div className="flex flex-row gap-2 md:gap-3">
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e0a100] border border-[#e0a100] text-[#223614] font-semibold hover:shadow-lg transition-all duration-200 btn-fill-center instagram"
          title="Instagram"
        >
          <FaInstagram className="text-white text-lg md:text-xl" />
        </a>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e0a100] border border-[#e0a100] text-white font-semibold shadow  hover:shadow-lg transition-all duration-200 btn-fill-center linkedin"
            title="LinkedIn"
          >
            <FaLinkedin className="text-white text-lg md:text-xl" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Inti;
