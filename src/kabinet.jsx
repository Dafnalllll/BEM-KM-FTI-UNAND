import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nexus from "./assets/kabinet/nexusinspirasi.png";
import Sinergi from "./assets/kabinet/sinergi.png";

export const Kabinet = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Kabinet || BEM KM FTI UNAND";
  }, []);

  const handleSinergiClick = () => {
    // Ganti path sesuai kebutuhan
    navigate("/sinergi");
  };

  const handleNexusClick = () => {
    // Ganti path sesuai kebutuhan
    navigate("/nexus");
  };

  return (
    <div className="flex items-center gap-4 justify-center min-h-screen bg-gray-600">
      <button
        onClick={handleSinergiClick}
        className="focus:outline-none"
        data-aos="zoom-in"
        data-aos-duration="1400"
      >
        <img
          src={Sinergi}
          alt="Sinergi"
          className="max-w-xs mx-5  transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer"
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
          className="max-w-xs mx-5  transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Kabinet;
