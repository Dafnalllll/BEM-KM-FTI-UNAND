import React from "react";
import bem from "./assets/BEM.png";
import { useNavigate } from "react-router-dom";

export const Bemfti = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/kabinet");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600">
      <button
        onClick={handleClick}
        className="focus:outline-none"
        data-aos="zoom-in"
        
        data-aos-duration="1400"
      >
        <img
          src={bem}
          alt="BEM"
          className="max-w-xs mb-5 cursor-pointer hover:scale-105 duration-300 transition-all"
        />
      </button>
    </div>
  );
};

export default Bemfti;
