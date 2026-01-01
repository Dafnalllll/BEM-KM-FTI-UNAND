import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Adkesma from "../../assets/dinassinergi/logo/adkesma.png";
import Eksternal from "../../assets/dinassinergi/logo/eksternal.png";
import Internal from "../../assets/dinassinergi/logo/internal.png";
import Bistech from "../../assets/dinassinergi/logo/bistech.png";
import AI from "../../assets/dinassinergi/logo/ai.png";
import Medinkraf from "../../assets/dinassinergi/logo/medinkraf.png";
import PSDM from "../../assets/dinassinergi/logo/psdm.png";
import Ristek from "../../assets/dinassinergi/logo/ristek.png";
import Sosmas from "../../assets/dinassinergi/logo/sosmas.png";
import Kastrat from "../../assets/dinassinergi/logo/kastrat.png";
import Inti from "../../assets/dinassinergi/logo/inti.png";
import Kestari from "../../assets/dinassinergi/logo/kestari.png";

const dinasList = [
  {
    name: "INTI",
    logo: Inti,
  },
  {
    name: "ADKESMA",
    logo: Adkesma,
  },
  {
    name: "AUDIT INTERNAL",
    logo: AI,
  },
  {
    name: "BISTECH",
    logo: Bistech,
  },
  {
    name: "EKSTERNAL",
    logo: Eksternal,
  },
  {
    name: "INTERNAL",
    logo: Internal,
  },
  {
    name: "KASTRAT",
    logo: Kastrat,
  },
  {
    name: "KESTARI",
    logo: Kestari,
  },
  {
    name: "MEDINKRAF",
    logo: Medinkraf,
  },
  {
    name: "PSDM",
    logo: PSDM,
  },
  {
    name: "RISTEK",
    logo: Ristek,
  },
  {
    name: "SOSMASLING",
    logo: Sosmas,
  },
];

export const Dinassinergi = () => {
  const [arrowHoverIdx, setArrowHoverIdx] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-10">
      {/* Caption */}
      <div className="text-center mb-10" data-aos="fade-down">
        <div className="text-[#b57a2a] font-bold text-lg mb-1 tracking-wide">
          DINAS & BIRO
        </div>
        <div className="text-3xl md:text-4xl font-bold text-[#223614] mb-2 leading-tight">
          Berkenalan Lebih Dekat <br /> Dengan Kami
        </div>
        {/* Garis dan dot animasi, dot di tengah garis */}
        <div className="flex justify-center mt-2 mb-4">
          <div className="relative flex items-center justify-center w-24 h-5">
            <div className="w-full h-2 bg-[#b57a2a] rounded" />
            <span className="absolute left-1/2 top-1/2 w-3 h-2 bg-[#e0a100] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate mt-1 " />
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {dinasList.map((dinas, idx) => (
          <div
            key={dinas.name}
            className="relative bg-[#f6e6b2] flex flex-col items-center justify-center border rounded shadow min-h-[50px] py-4 group overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={idx * 60}
          >
            <img
              src={dinas.logo}
              alt={dinas.name}
              className="w-52 h-52 object-contain mb-4"
              draggable={false}
            />
            <div className="text-[#223614] font-bold text-xl mb-1">
              {dinas.name}
            </div>
            <div className="text-[#263A29] text-sm text-center font-[500] italic font-serif">
              {dinas.desc}
            </div>
            {/* Hover Arrow from Bottom */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <div
                className="bg-[#b57a2a] rounded-md p-4 flex items-center justify-center shadow-lg cursor-pointer"
                onMouseEnter={() => setArrowHoverIdx(idx)}
                onMouseLeave={() => setArrowHoverIdx(null)}
                onClick={() => {
                  if (dinas.name.toLowerCase() === "inti") {
                    navigate("/dinassinergi/inti");
                  }
                  if (dinas.name.toLowerCase() === "ristek") {
                    navigate("/dinassinergi/ristek");
                  }
                  if (dinas.name.toLowerCase() === "adkesma") {
                    navigate("/dinassinergi/adkesma");
                  }
                  if (dinas.name.toLowerCase() === "sosmasling") {
                    navigate("/dinassinergi/sosmasling");
                  }
                  if (dinas.name.toLowerCase() === "eksternal") {
                    navigate("/dinassinergi/eksternal");
                  }
                  if (dinas.name.toLowerCase() === "internal") {
                    navigate("/dinassinergi/internal");
                  }
                  if (dinas.name.toLowerCase() === "kastrat") {
                    navigate("/dinassinergi/kastrat");
                  }
                  if (dinas.name.toLowerCase() === "kestari") {
                    navigate("/dinassinergi/kestari");
                  }
                  if (dinas.name.toLowerCase() === "medinkraf") {
                    navigate("/dinassinergi/medinkraf");
                  }
                  if (dinas.name.toLowerCase() === "psdm") {
                    navigate("/dinassinergi/psdm");
                  }
                  if (dinas.name.toLowerCase() === "bistech") {
                    navigate("/dinassinergi/bistech");
                  }
                  if (dinas.name.toLowerCase() === "audit internal") {
                    navigate("/dinassinergi/auditinternal");
                  }
                }}
              >
                <FaArrowRight
                  className={`text-white text-2xl transition-all duration-300 ${
                    arrowHoverIdx === idx ? "translate-x-2" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinassinergi;
