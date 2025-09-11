import React from "react";
import KataWagub from "../../assets/dinas nexus/press release/inti/katawagub.png";
import Instagram from "../../assets/socialmedia/instagram.png";
import LinkedIn from "../../assets/socialmedia/linkedln.png";

export const KataKataWagub = () => {
  return (
    <div className="flex flex-row items-center max-w-7xl mx-auto bg-gray-200 px-4 md:px-16 py-12">
      {/* Kolom kiri: Foto */}
      <div className="flex-1 flex justify-start">
        <img
          src={KataWagub}
          alt="Kata Wakil Gubernur"
          className="w-[350px] h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
      {/* Kolom kanan: Konten (tambahkan di sini jika ada) */}
      <div className="flex-1">
        <h2
          className="text-4xl font-bold font-[Carena] text-right text-[#243A1A] mb-2 "
          data-aos="fade-down"
          data-aos-duration="700"
        >
          Umar Abdullah Azzam
        </h2>
        <h3
          className="text-xl font-semibold text-[#B07B2F] text-right mb-4"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          WAKIL GUBERNUR BEM KM FTI
        </h3>
        <div
          className="h-2 w-32 bg-[#B07B2F] mb-8 justify-self-end rounded"
          data-aos="fade-left"
          data-aos-duration="900"
        ></div>
        <div
          className="text-lg text-[#243A1A] font-[Carena] leading-relaxed mb-8 justify-self-end text-right"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Assalamualaikum Warahmatullahi Wabarakatuh <br /> <br />
          "Hidup Mahasiswa
          <br />
          Hidup Rakyat Indonesia
          <br />
          Hidup Perempuan Indonesia
          <br />
          Hidup FTI
          <br />
          <br />
          Sebagai bagian dari keluarga besar BEM KM FTI Kabinet Nexus Inspirasi,
          kami meyakini bahwa setiap langkah kecil yang dilakukan dengan niat
          tulus akan memberi arti besar bagi keberlangsungan organisasi,
          fakultas, dan masyarakat. BEM bukan hanya wadah untuk menyalurkan
          aspirasi, tetapi juga ruang untuk belajar, bertumbuh, dan memberi
          dampak nyata. Dengan menghadirkan gerakan yang relevan dan
          berorientasi pada kebermanfaatan, kami berusaha menjadikan setiap
          program sebagai jembatan yang menghubungkan gagasan mahasiswa dengan
          solusi nyata. Karena kami percaya, perubahan besar berawal dari
          keberanian untuk bergerak bersama."
          <br /> <br />
          Wassalamu’alaikum Warahmatullahi Wabarakatuh.
        </div>
        {/* Sosial media */}
        <div className="flex gap-6 items-center justify-end">
          <a
            href="https://www.instagram.com/umarazzam10/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-duration="1100"
          >
            <div className="bg-[#B07B2F] p-2 rounded shadow-lg hover:bg-[#243A1A] transition-all duration-200 hover:scale-110">
              <img src={Instagram} alt="Instagram" className="w-8 h-8" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/umar-abdullah-azzam-2b1a8b204/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div className="bg-[#B07B2F] p-2 rounded shadow-lg transition-all hover:bg-[#243A1A] duration-200 hover:scale-110">
              <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default KataKataWagub;
