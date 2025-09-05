import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/nexus/footernexus";
import NavbarNexus from "../../components/nexus/navbarnexus";
import Pelantikan from "../../assets/dinas nexus/kegiatan/pelantikan.png";
import StatsNexus from "../../components/nexus/statsnexus";
import TentangNexus from "./tentangnexus"; // pastikan path sudah benar

export const Nexus = () => {
  useEffect(() => {
    document.title = "Nexus Inspirasi || BEM KM FTI UNAND";
  }, []);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Section Beranda dengan background pelantikan */}
      <section id="beranda" className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Pelantikan})` }}
        />
        {/* Overlay hitam dengan opacity */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        {/* Navbar di atas background */}
        <div className="relative z-10">
          <NavbarNexus />
          {/* Welcome text di tengah halaman */}
          <div
            className="flex flex-col items-center justify-center min-h-[70vh]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-[Montserrat] text-white text-center drop-shadow-lg mb-8">
              Welcome to <br />
              Nexus Inspirasi
            </h1>
            {/* Wrapper div untuk button */}
            <div
              className="mt-4 flex justify-center"
              data-aos="zoom-out"
              data-aos-duration="1400"
            >
              <button
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold font-[Montserrat] hover:bg-white hover:text-[#25364a] transition duration-300 cursor-pointer transform hover:scale-105"
                type="button"
                onClick={() => navigate("/tentangnexus")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* StatsNexus di antara section beranda dan tentangnexus */}
      <div className="w-full z-50 justify-center ">
        <StatsNexus />
      </div>
      {/* Section Tentang Nexus */}
      <section id="tentangnexus" className="w-full">
        <TentangNexus />
      </section>
      <Footer />
    </div>
  );
};

export default Nexus;
