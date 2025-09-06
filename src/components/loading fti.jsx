import React, { useState, useEffect } from "react";
import BEM from "../assets/BEM.png";

const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 4 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-500 z-[9999]">
      <img
        src={BEM}
        alt="BEM Logo"
        className="w-36 h-auto mb-6 animate-bounce"
      />
      <div className="text-gray-300 text-4xl font-bold font-['Carena'] text-center">
        Loading{dots}
      </div>
    </div>
  );
};

export default Loading;
