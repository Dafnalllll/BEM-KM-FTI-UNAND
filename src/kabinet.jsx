import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nexus from "./assets/kabinet/nexusinspirasi.png";
import Sinergi from "./assets/kabinet/sinergi.png";
import Fakultas from "./assets/FTI.png";

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
      className="flex items-center gap-4 justify-center min-h-screen"
      style={{
        backgroundImage: `url(${Fakultas})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay untuk memberikan efek gelap jika diperlukan */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-4">
        <button
          onClick={handleSinergiClick}
          className="focus:outline-none"
          data-aos="zoom-in"
          data-aos-duration="1400"
        >
          <img
            src={Sinergi}
            alt="Sinergi"
            className="max-w-xs mx-5 transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer animate-pulse"
          />
        </button>
        <button
          onClick={handleNexusClick}
          className="focus:outline-none"
          data-aos="zoom-in"
          data-aos-duration="1400"
        >
          <img
            src={Nexus}
            alt="Nexus"
            className="max-w-xs mx-5 transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer animate-pulse"
          />
        </button>
      </div>
    </div>
  );
};

export default Kabinet;
