import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Adkesma from "../../assets/dinassinergi/adkesma.png";
import Eksternal from "../../assets/dinassinergi/eksternal.png";
import Internal from "../../assets/dinassinergi/internal.png";
import Bistech from "../../assets/dinassinergi/bistech.png";
import AI from "../../assets/dinassinergi/ai.png";
import Medinkraf from "../../assets/dinassinergi/medinkraf.png";
import PSDM from "../../assets/dinassinergi/psdm.png";
import Ristek from "../../assets/dinassinergi/ristek.png";
import Sosmas from "../../assets/dinassinergi/sosmas.png";
import Kastrat from "../../assets/dinassinergi/kastrat.png";
import Inti from "../../assets/dinassinergi/inti.png";
import Kestari from "../../assets/dinassinergi/kestari.png";

const dinasList = [
  {
    name: "INTI",
    desc: "Poros manajerial dan eksekutif yang menjamin keberlangsungan fungsi organisasi secara administratif, finansial, dan strategis.",
    logo: Inti,
  },
  {
    name: "ADKESMA",
    desc: "Berfokus menampung serta membantu KM FTI yang terkendala perkuliahan,menjadi wadah untuk KM FTI yang mengalami kesulitan yang akan di audisikan ke pihak pimpinan fakultas.",
    logo: Adkesma,
  },
  {
    name: "AUDIT INTERNAL",
    desc: "Menjaga kedisiplinan pengurus, serta mempererat hubungan internal organisasi, menjaga keharmonisan antar anggota.",
    logo: AI,
  },
  {
    name: "BISTECH",
    desc: "Berfokus pada pengelolaan kewirausahaan dan penggalangan dana mandiri,mendukung mahasiswa serta membangun kemandirian organisasi dengan menciptakan peluang bisnis yang inovatif.",
    logo: Bistech,
  },
  {
    name: "EKSTERNAL",
    desc: "Meningkatkan eksistensi FTI dan membangun relasi dengan pihak luar serta menjadi jembatan yang memperkuat relasi dan kolaborasi BEM KM FTI serta merepresentasikan wajah BEM KM FTI dengan profesionalisme dan inovasi.",
    logo: Eksternal,
  },
  {
    name: "INTERNAL",
    desc: "Bergerak di bidang sosial dengan fokus utama pada masyarakat Fakultas Teknologi Informasi Universitas Andalas, meningkatkan jiwa sosial mahasiswa FTI agar mampu membangun komunikasi yang baik.",
    logo: Internal,
  },
  {
    name: "KASTRAT",
    desc: "Bertanggung jawab sebagai motor penggerak kajian intelektual dan aksi strategis mahasiswa, bergerak di bidang analisis isu, pemberdayaan mahasiswa dan perempuan.",
    logo: Kastrat,
  },
  {
    name: "KESTARI",
    desc: "Mengelola administrasi kelembagaan, dan memastikan sekretariat tetap nyaman dan tertata.",
    logo: Kestari,
  },
  {
    name: "MEDINKRAF",
    desc: "Mengelola seluruh aspek komunikasi visual dan digital serta menyediakan platform untuk publikasi informasi",
    logo: Medinkraf,
  },
  {
    name: "PSDM",
    desc: "Mengembangkan potensi mahasiswa, merancang, melaksanakan, dan mengevaluasi program-program yang bertujuan untuk meningkatkan kapasitas mahasiswa",
    logo: PSDM,
  },
  {
    name: "RISTEK",
    desc: "Motor penggerak dalam penelitian dan pengembangan serta mendorong pengembangan potensi mahasiswa di bidang teknologi informasi.",
    logo: Ristek,
  },
  {
    name: "SOSMASLING",
    desc: "Bergerak dalam bidang sosial dan lingkungan serta mendukung tujuan pembangunan yang berkelanjutan untuk kehidupan masyarakat yang lebih baik.",
    logo: Sosmas,
  },
];

export const Dinassinergi = () => {
  const [arrowHoverIdx, setArrowHoverIdx] = useState(null);

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
