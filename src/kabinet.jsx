import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nexus from "./assets/kabinet/nexusinspirasi.webp";
import Sinergi from "./assets/kabinet/sinergi.webp";
import Fakultas from "./assets/FTI.webp";

export const Kabinet = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Kabinet || BEM KM FTI UNAND";
  }, []);

  const handleSinergiClick = () => {
    navigate("/sinergi");
  };

  const handleNexusClick = () => {
    navigate("/nexus");
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-2 sm:px-0"
      style={{
        backgroundImage: `url(${Fakultas})`,
      }}
    >
      {/* Overlay untuk memberikan efek gelap jika diperlukan */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-2xl py-8">
        <button
          onClick={handleSinergiClick}
          className="focus:outline-none w-full sm:w-auto"
          data-aos="zoom-in"
          data-aos-duration="1400"
        >
          <img
            src={Sinergi}
            alt="Sinergi"
            className="w-4/5 max-w-xs sm:w-48 sm:max-w-xs mx-auto sm:mx-5 transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer animate-pulse rounded-xl shadow-lg"
          />
        </button>
        <button
          onClick={handleNexusClick}
          className="focus:outline-none w-full sm:w-auto"
          data-aos="zoom-in"
          data-aos-duration="1400"
        >
          <img
            src={Nexus}
            alt="Nexus"
            className="w-4/5 max-w-xs sm:w-48 sm:max-w-xs mx-auto sm:mx-5 transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer animate-pulse rounded-xl shadow-lg"
          />
        </button>
      </div>
    </div>
  );
};

export default Kabinet;
