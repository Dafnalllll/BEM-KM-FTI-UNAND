import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Gubernur from "../../assets/dinassinergi/press release/inti/Gub.webp";
import React from "react";

const KatakataGub = () => (
  <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 md:px-10 py-10 md:py-[120px] bg-white">
    {/* Kiri: Teks */}
    <div className="flex-1 max-w-2xl md:ml-16 flex flex-col items-center md:items-start text-center md:text-left">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
          style={{ fontFamily: "'Fredoka One', cursive", color: "#223614" }}
        >
          Ikhwanul Hakim
        </h1>
        <h2
          className="text-lg sm:text-xl font-semibold mb-4"
          style={{ color: "#b57a2a" }}
        >
          GUBERNUR BEM KM FTI
        </h2>
        <div className="relative w-24 h-2 bg-[#b57a2a] mb-6 rounded mx-auto md:mx-0 md:mr-auto">
          <span className="absolute left-0 top-2/2 w-3 h-2 bg-[#e0a100] rounded-full -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate" />
        </div>
        <div
          className="text-sm sm:text-base md:text-lg mb-6"
          style={{ color: "#223614" }}
        >
          <p>
            "Hidup Mahasiswa
            <br />
            Hidup Rakyat Indonesia
            <br />
            Hidup Perempuan Indonesia
            <br />
            Hidup FTI
          </p>
          <br />
          <p>
            Menjadi mahasiswa merupakan suatu keberuntungan yang tak semua
            pemuda dapat merasakannya. Mahasiswa juga dituntut untuk peka
            terhadap isu-isu yang ada di sekitarnya. Mahasiswa juga dituntut
            untuk dapat menciptakan perubahan baik dan menjaga sinergitas
            dimanapun ia berada.
          </p>
          <br />
          <p>
            Kabinet Sinergi BEM KM FTI hadir sebagai wadah untuk mahasiswa yang
            ingin mengupayakan perubahan baik dan menjaga sinergitas di
            lingkungan Fakultas Teknologi Informasi. Kabinet Sinergi BEM KM FTI
            hadir untuk mewadahi semangat mahasiswa yang haus akan perubahan
            baik, dan ingin berproses bersama. Dengan 9 Dinas dan 2 Biro,
            Kabinet Sinergi menjadi garda terdepan dalam bidang pergerakan,
            pelayanan, dan pengabdian dalam lingkungan Fakultas Teknologi
            Informasi.
          </p>
          <br />
          <p>
            Jika tempat yang indah itu tidak dapat ditemukan, maka ciptakan."
          </p>
        </div>
      </div>
      <div
        className="flex gap-4 mt-4"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <a
          href="https://www.instagram.com/ikhwannnn___/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#b57a2a] hover:bg-[#a06a23] text-white p-3 sm:p-4 rounded transition btn-fill-center instagram"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/ikhwanul-hakim-b41246222/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#b57a2a] hover:bg-[#a06a23] text-white p-3 sm:p-4 rounded transition btn-fill-center linkedin"
        >
          <FaLinkedinIn size={22} />
        </a>
      </div>
    </div>
    {/* Kanan: Foto */}
    <div
      className="flex-1 flex justify-center md:justify-end md:mr-10 mt-6 md:mt-0 w-full"
      data-aos="zoom-in"
      data-aos-duration="800"
      data-aos-delay="400"
    >
      <img
        src={Gubernur}
        alt="Gubernur KM FTI"
        className="w-40 xs:w-52 sm:w-72 md:w-[540px] lg:w-[600px] object-contain"
        draggable={false}
      />
    </div>
  </div>
);

export default KatakataGub;
