import React from "react";
import KataGub from "../../assets/dinas nexus/press release/inti/katagub.png";
import Instagram from "../../assets/socialmedia/instagram.png";
import LinkedIn from "../../assets/socialmedia/linkedln.png";
const KataKataGub = () => (
  <div className=" flex flex-row items-center w-full mx-auto bg-gray-200 px-4 md:px-16 py-12">
    {/* Kolom kiri: Teks */}
    <div className="flex-1">
      <h2
        className="text-4xl font-bold font-[Carena] text-[#243A1A] mb-2"
        data-aos="fade-down"
        data-aos-duration="700"
      >
        Muhammad Fajri
      </h2>
      <h3
        className="text-xl font-semibold text-[#B07B2F] mb-4"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        GUBERNUR BEM KM FTI
      </h3>
      <div
        className="h-2 w-32 bg-[#B07B2F] mb-8 rounded"
        data-aos="fade-right"
        data-aos-duration="900"
      ></div>
      <div
        className="text-lg text-[#243A1A] font-[Carena] leading-relaxed mb-8 text-left"
        data-aos="fade-right"
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
        Menjadi mahasiswa adalah anugerah yang tidak semua generasi muda dapat
        rasakan. Sebagai mahasiswa, kita dituntut untuk memiliki kepekaan
        terhadap dinamika zaman dan tantangan di sekitar kita. Lebih dari itu,
        mahasiswa harus menjadi agen transformasi yang membawa perubahan positif
        serta membangun harmoni di setiap langkah perjalanannya.
        <br />
        <br />
        Kabinet Nexus Inspirasi BEM KM FTI hadir sebagai jembatan aspirasi bagi
        mahasiswa yang berkomitmen menciptakan transformasi berkelanjutan dan
        memelihara keharmonisan di lingkungan Fakultas Teknologi Informasi.
        Kabinet Nexus Inspirasi menjadi rumah bagi jiwa-jiwa muda yang
        bersemangat akan inovasi, haus akan perubahan bermakna, dan siap
        berkolaborasi dalam perjalanan bersama menuju kemajuan.
        <br />
        <br />
        Dengan 9 Dinas dan 1 Biro, Kabinet Nexus Inspirasi berkomitmen menjadi
        garda terdepan dalam tiga pilar utama: gerakan perubahan, pelayanan
        prima, dan pengabdian nyata di lingkungan Fakultas Teknologi Informasi.
        <br /> <br />
        Ketika inspirasi bertemu dengan aksi, di situlah perubahan sejati
        dimulai. Mari bersama kita rapatkan barisan, kobarkan semangat, dan
        jadikan BEM KM FTI Unand sebagai mercusuar pergerakan mahasiswa. Karena
        di tangan kitalah masa depan itu dititipkan." <br /> <br />
        Wassalamu’alaikum Warahmatullahi Wabarakatuh.
      </div>
      {/* Sosial media */}
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/mhd_fajriii16/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >
          <div className="bg-[#B07B2F] p-2 rounded shadow-lg hover:bg-[#243A1A] transition-all hover:scale-105">
            <img src={Instagram} alt="Instagram" className="w-8 h-8" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-fajri-a50a51258/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <div className="bg-[#B07B2F] p-2 rounded shadow-lg hover:bg-[#243A1A] transition-all hover:scale-105">
            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
          </div>
        </a>
      </div>
    </div>
    {/* Kolom kanan: Foto */}
    <div className="flex-1 flex justify-end mt-8"
    data-aos="zoom-in"
    data-aos-duration="800">
      <img
        src={KataGub}
        alt="Kata Gubernur"
        className="w-[550px] h-auto object-cover"
      />
    </div>
  </div>
);

export default KataKataGub;
