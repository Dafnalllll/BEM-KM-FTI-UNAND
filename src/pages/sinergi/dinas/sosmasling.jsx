import React, {useEffect} from "react";
import NavbarSinergi from "../../../components/sinergi/navbarsinergi";
import FooterSinergi from "../../../components/sinergi/footersinergi";
import SosmaslingProkerGrid from "../../../components/sinergi/proker/sosmaslingproker";
import Pelantikan from "../../../assets/dinassinergi/kegiatan/pelantikan.webp";
import Sosmas from "../../../assets/dinassinergi/logo/sosmas.png";
import Rifqi from "../../../assets/dinassinergi/press release/sosmasling/rifqi.webp";
import Triana from "../../../assets/dinassinergi/press release/sosmasling/triana.webp";
import Ani from "../../../assets/dinassinergi/press release/sosmasling/ani.webp";
import Daffa from "../../../assets/dinassinergi/staff release/sosmasling/daffa.webp";
import Vatya from "../../../assets/dinassinergi/staff release/sosmasling/vatya.webp";
import Nori from "../../../assets/dinassinergi/staff release/sosmasling/nori.webp";
import Ridho from "../../../assets/dinassinergi/staff release/sosmasling/ridho.webp";
import Hafiz from "../../../assets/dinassinergi/staff release/sosmasling/hafiz.webp";
import Zaki from "../../../assets/dinassinergi/staff release/sosmasling/zaki.webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const eksekutifList = [
  {
    name: "Rifqi Asverian Putra",
    photo: Rifqi,
    desc: "Kepala Dinas",
    jurusan: "Sistem Informasi 2022",
    instagram: "https://www.instagram.com/qiiasvrn/",
    linkedin: "https://www.linkedin.com/in/rifqi-asverian-putra/",
  },
  {
    name: "Triana Zahara Nurhaliza",
    photo: Triana,
    desc: "Sekretaris",
    jurusan: "Sistem Informasi 2022",
    instagram: "https://www.instagram.com/zhafira.syarafina/",
  },
  {
    name: "Muhammad Daffa",
    photo: Daffa,
    desc: "Staff Ahli",
    jurusan: "Teknik Komputer 2021",
    instagram: "https://www.instagram.com/mhddaffa._/",
  },
  {
    name: "Ani Febrian Hasanah",
    photo: Ani,
    desc: "Bendahara",
    jurusan: "Teknik Komputer 2022",
    instagram: "https://www.instagram.com/anifebrianhasanah/",
  },
  {
    name: "Muhammad Zaki Andafi",
    photo: Zaki,
    desc: "Staff Ahli",
    jurusan: "Sistem Informasi 2022",
    instagram: "https://www.instagram.com/zaki_mhmmd05/",
  },
  {
    name: "Vatya Arsha Mahmudi",
    photo: Vatya,
    desc: "Staff Ahli",
    jurusan: "Sistem Informasi 2022",
    instagram: "https://www.instagram.com/vtyarshaa/",
    linkedin: "https://www.linkedin.com/in/vatya-arsha-mahmudi-8b77a6338/",
  },
  {
    name: "Nori Dwi Yulianti",
    photo: Nori,
    desc: "Staff Ahli",
    jurusan: "Teknik Komputer 2023",
    instagram: "https://www.instagram.com/_nori.d.y_/",
    linkedin: "https://www.linkedin.com/in/nori-dwi-a80285387/",
  },
  {
    name: "Ridho Dwi Syahputra",
    photo: Ridho,
    desc: "Staff Ahli",
    jurusan: "Sistem Informasi 2023",
    instagram: "https://www.instagram.com/ridhosky_/",
    linkedin: "https://www.linkedin.com/in/ridho-dwi-syahputra/",
  },
  {
    name: "Muhammad Hafiz",
    photo: Hafiz,
    desc: "Staff Ahli",
    jurusan: "Informatika 2023",
    instagram: "https://www.instagram.com/hafizz.mhd__/",
  },
];

const SosmaslingSinergi = () => {
  useEffect(() => {
    document.title = "Sosmasling || Sinergi";
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
            src={Sosmas}
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
            Bergerak dalam bidang sosial dan lingkungan serta mendukung tujuan
            pembangunan yang berkelanjutan untuk kehidupan masyarakat yang lebih
            baik.
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
              className="flex flex-col md:flex-row justify-center gap-8"
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
            {/* Baris 4 (2 data, jarak custom) */}
            <div
              className="flex flex-col md:flex-row justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex justify-center md:mr-54">
                <EksekutifCard {...eksekutifList[7]} />
              </div>
              {/* Gap  di mobile */}
              <div className="h-8 md:hidden" />
              <div className="flex justify-center md:ml-54">
                <EksekutifCard {...eksekutifList[8]} />
              </div>
            </div>
          </div>
        </div>
        {/* Program Kerja */}
        <SosmaslingProkerGrid />
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
    return "bg-[#1e3a8a] text-white border border-[#1e40af]";
  }
  return "bg-[#f6e6b2] text-[#b57a2a] border border-[#b57a2a]";
};

// Komponen Card Eksekutif versi kecil dengan gradient dan border divider
const EksekutifCard = ({ name, photo, desc, jurusan, instagram, linkedin }) => (
  <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-[#fffbe6] via-[#f6e6b2] to-[#f9e0c7] rounded-2xl shadow-xl p-4 md:p-6 max-w-2xl w-full transition hover:shadow-2xl hover:-translate-y-2 border border-[#e0a100]">
    {/* Foto */}
    <div className="flex flex-col items-center justify-center  overflow-hidden w-28 h-28 md:w-32 md:h-32 mb-4 md:mb-0">
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover"
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

export default SosmaslingSinergi;
