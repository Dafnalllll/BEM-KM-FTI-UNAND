import React from "react";
import bem from "./assets/BEM.webp";
import { useNavigate } from "react-router-dom";
import Fakultas from "./assets/FTI.webp";

export const Bemfti = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/kabinet");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: `url(${Fakultas})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay untuk memberikan efek gelap jika diperlukan */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10">
        <button
          onClick={handleClick}
          className="focus:outline-none"
          data-aos="zoom-in"
          data-aos-duration="1400"
        >
          <img
            src={bem}
            alt="BEM"
            className="max-w-xs mb-5 cursor-pointer hover:scale-105 duration-300 transition-all animate-pulse"
          />
        </button>
      </div>
    </div>
  );
};

export default Bemfti;
