import React from "react";
import KataWagub from "../../assets/dinasnexus/press release/inti/wagub.webp";
import Instagram from "../../assets/socialmedia/instagram.webp";
import LinkedIn from "../../assets/socialmedia/linkedln.webp";

export const KataKataWagub = () => {
  return (
    <>
      {/* DESKTOP: tetap layout asli (tidak diubah) */}
      <div className="hidden md:flex flex-row items-center max-w-7xl mx-auto bg-gray-200 px-4 md:px-16 py-12">
        {/* Kolom kiri: Foto */}
        <div
          className="flex-1 flex justify-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={KataWagub}
            alt="Kata Wakil Gubernur"
            className="w-[550px] h-auto object-cover"
          />
        </div>

        {/* Kolom kanan: Konten */}
        <div className="flex-1">
          <h2
            className="text-4xl font-bold font-[Carena] text-right text-[#243A1A] mb-2"
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
            Sebagai bagian dari keluarga besar BEM KM FTI Kabinet Nexus
            Inspirasi, kami meyakini bahwa setiap langkah kecil yang dilakukan
            dengan niat tulus akan memberi arti besar bagi keberlangsungan
            organisasi, fakultas, dan masyarakat. BEM bukan hanya wadah untuk
            menyalurkan aspirasi, tetapi juga ruang untuk belajar, bertumbuh,
            dan memberi dampak nyata. Dengan menghadirkan gerakan yang relevan
            dan berorientasi pada kebermanfaatan, kami berusaha menjadikan
            setiap program sebagai jembatan yang menghubungkan gagasan mahasiswa
            dengan solusi nyata. Karena kami percaya, perubahan besar berawal
            dari keberanian untuk bergerak bersama."
            <br /> <br />
            Wassalamu’alaikum Warahmatullahi Wabarakatuh.
          </div>

          {/* Sosial media - desktop (kanan bawah) */}
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

      {/* MOBILE: layout terpisah (foto → social → kata sambutan) */}
      <div className="md:hidden flex flex-col items-center max-w-3xl mx-auto bg-gray-200 px-6 py-8 gap-6">
        {/* Foto dulu */}
        <div
          className="w-full flex justify-center"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          <img
            src={KataWagub}
            alt="Kata Wakil Gubernur"
            className="w-44 sm:w-56 h-auto object-contain rounded-md shadow-md"
            draggable={false}
          />
        </div>

        {/* Social media di bawah foto */}
        <div className="flex gap-4" data-aos="zoom-in" data-aos-duration="1000">
          <a
            href="https://www.instagram.com/umarazzam10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#B07B2F] p-2 rounded shadow-lg hover:bg-[#243A1A] transition-all duration-200 hover:scale-105">
              <img src={Instagram} alt="Instagram" className="w-7 h-7" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/umar-abdullah-azzam-2b1a8b204/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#B07B2F] p-2 rounded shadow-lg transition-all hover:bg-[#243A1A] duration-200 hover:scale-105">
              <img src={LinkedIn} alt="LinkedIn" className="w-7 h-7" />
            </div>
          </a>
        </div>

        {/* Kata sambutan */}
        <div
          className="w-full text-center px-2"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h2 className="text-2xl font-bold font-[Carena] text-[#243A1A] mb-2">
            Umar Abdullah Azzam
          </h2>
          <h3 className="text-base font-semibold text-[#B07B2F] mb-3">
            WAKIL GUBERNUR BEM KM FTI
          </h3>
          <div className="h-2 w-20 bg-[#B07B2F] mb-4 rounded mx-auto"></div>
          <p className="text-base text-[#243A1A] font-[Carena] leading-relaxed">
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
            Sebagai bagian dari keluarga besar BEM KM FTI Kabinet Nexus
            Inspirasi, kami meyakini bahwa setiap langkah kecil yang dilakukan
            dengan niat tulus akan memberi arti besar bagi keberlangsungan
            organisasi, fakultas, dan masyarakat. BEM bukan hanya wadah untuk
            menyalurkan aspirasi, tetapi juga ruang untuk belajar, bertumbuh,
            dan memberi dampak nyata. Dengan menghadirkan gerakan yang relevan
            dan berorientasi pada kebermanfaatan, kami berusaha menjadikan
            setiap program sebagai jembatan yang menghubungkan gagasan mahasiswa
            dengan solusi nyata. Karena kami percaya, perubahan besar berawal
            dari keberanian untuk bergerak bersama."
            <br /> <br />
            Wassalamu’alaikum Warahmatullahi Wabarakatuh.
          </p>
        </div>
      </div>
    </>
  );
};

export default KataKataWagub;
