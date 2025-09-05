import React, { useEffect } from "react";
import NavbarNexus from "../../components/nexus/navbarnexus";
import Nexus from "../../assets/kabinet/nexusinspirasi.png";

export const TentangNexus = () => {
  useEffect(() => {
    document.title = "Tentang || Nexus";
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#1E2A38]">
      <div className="flex flex-row items-start justify-center flex-grow px-8 py-12 gap-16">
        {/* Logo di kiri */}
        <div className="flex-shrink-0 flex justify-center items-center w-[28rem] mt-[6rem]">
          <img
            src={Nexus}
            alt="Logo Nexus"
            className="w-full h-auto max-h-[28rem]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
        </div>
        {/* Konten di kanan, VISI dan MISI benar-benar independen */}
        <div className="flex flex-col w-full max-w-3xl gap-8">
          {/* VISI */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <h2 className="text-xl font-bold text-[#a67c2d] mb-2 tracking-wide">
              VISI
            </h2>
            <div className="flex items-center mb-6 ">
              <div className="w-32 h-1 bg-[#a67c2d] rounded"></div>
            </div>
            <p className="text-xl text-white font-[Carena] font-medium text-start ml-12 ">
              Mewujudkan Badan Eksekutif Mahasiswa yang inovatif, inspiratif,
              dan progresif dalam mendorong pengembangan pelayanan dan
              pergerakan yang proaktif terhadap KM FTI
            </p>
          </div>
          {/* MISI */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 className="text-xl font-bold text-[#a67c2d] mb-2 tracking-wide">
              MISI
            </h2>
            <div className="flex items-center mb-6">
              <div className="w-32 h-1 bg-[#a67c2d] rounded"></div>
            </div>
            <ol className="text-xl text-white font-medium font-[Carena] list-decimal list-inside space-y-6 text-left w-full max-w-2xl">
              <li>Mereformasi marwah BEM KM FTI</li>
              <li>
                Menjadi garda terdepan dalam memperjuangkan aspirasi mahasiswa
                dan mengadvokasi hak-hak KM FTI
              </li>
              <li>
                Mengakselerasikan pergerakan yang dinamis dan memiliki dampak
                yang berkelanjutan
              </li>
              <li>
                Menjalin kolaborasi strategis dengan organisasi internal dan
                eksternal FTI
              </li>
              <li>
                Membangun ekosistem BEM yang inklusif,transparan, dan
                berorientasi pada pemberdayaan KM FTI
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangNexus;
