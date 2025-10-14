import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Footer } from "../../components/nexus/footernexus";
import NavbarNexus from "../../components/nexus/navbarnexus";
import Pelantikan from "../../assets/dinas nexus/kegiatan/pelantikan.webp";
import StatsNexus from "../../components/nexus/statsnexus";
import TentangNexus from "./tentangnexus";
import KataKataGub from "../../components/nexus/katakatagub";
import KataKataWagub from "../../components/nexus/katakatawagub";
import ProgramKerjaNexus from "./programkerjanexus";
import Himpunan from "./himpunan";
import DinasNexus from "./dinasnexus";
import UKM from "./ukm";
import GaleriNexus from "./galerinexus";

export const Nexus = () => {
  useEffect(() => {
    document.title = "Nexus Inspirasi || BEM KM FTI UNAND";
  }, []);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTentang = () => {
    const el = document.getElementById("tentangnexus");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: jika tidak ada pada halaman saat ini, buka route
      navigate("/tentangnexus");
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Section Beranda dengan background pelantikan */}
      <section id="beranda" className="relative w-auto min-h-screen">
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
            <h1 className="text-4xl md:text-6xl font-bold font-[Carena] text-white text-center drop-shadow-lg mb-8">
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
                onClick={scrollToTentang}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* StatsNexus mengambang di antara dua section */}
      <div className="relative w-full flex justify-center">
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 z-20 w-[90vw] max-w-5xl">
          <StatsNexus />
        </div>
      </div>

      {/* Section Tentang Nexus */}
      <section id="tentangnexus" className="w-full mt-24">
        <TentangNexus />
      </section>

      {/* Section KataKataGub */}
      <section id="katakatagub" className="w-full flex justify-center py-12 ">
        <KataKataGub />
      </section>

      {/* Section KataKataWagub */}
      <section
        id="katakatawagub"
        className="w-full flex justify-center py-12 bg-gray-200 "
      >
        <KataKataWagub />
      </section>

      {/* Section Dinas */}
      <section id="dinasnexus" className="w-full  py-12">
        <DinasNexus />
      </section>

      {/* Section Program Kerja */}
      <section id="programkerjanexus" className="w-full py-12 bg-gray-200">
        <ProgramKerjaNexus />
      </section>

      {/* Section Himpunan */}
      <section id="himpunan" className="w-full py-12">
        <Himpunan />
      </section>
      {/* Section UKM */}
      <section id="ukm" className="w-full py-12 bg-gray-200">
        <UKM />
      </section>
      {/* Section Galeri Nexus */}
      <section id="galerinexus" className="w-full py-12">
        <GaleriNexus />
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Nexus;
