import React from "react";
import Alkha from "../../../assets/dinasnexus/nexmudristek/Alkha.webp";
import Davina from "../../../assets/dinasnexus/nexmudristek/Davina.webp";
import Ammar from "../../../assets/dinasnexus/nexmudristek/ammar.webp";
import Luthfi from "../../../assets/dinasnexus/nexmudristek/Luthfi.webp";
import Mutia from "../../../assets/dinasnexus/nexmudristek/mutia.webp";
import Radho from "../../../assets/dinasnexus/nexmudristek/radho.webp";
import Yazem from "../../../assets/dinasnexus/nexmudristek/yazem.webp";
import Habib from "../../../assets/dinasnexus/nexmudristek/habib.webp";
import Nanda from "../../../assets/dinasnexus/nexmudristek/nanda.webp";
import Rendi from "../../../assets/dinasnexus/nexmudristek/rendi.webp";
import Jiwa from "../../../assets/dinasnexus/nexmudristek/jiwa.webp";
import Nabila from "../../../assets/dinasnexus/nexmudristek/nabila.webp";
import Ristek from "../../../assets/dinasnexus/logo/ristek.webp";
import Social from "../../social";

const gridData = [
  {
    img: Ammar,
    title: "Nexmud",
    nama: "Ammar Qussoyyi Akmal",
    desc: "Sistem Informasi 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/q_coyy?igsh=aXdydzl4eG9vcTZh",
    linkedin: "https://www.linkedin.com/in/ammar-qussoyyi-479a96377/",
  },
  {
    img: Davina,
    title: "Nexmud",
    nama: "Davina Noerfazhira",
    desc: "Teknik Komputer 2025",
    border: "border-blue-500",
    instagram:
      "https://www.instagram.com/dvnfzhira_?igsh=MTE0MHA2eTZiYzc5NA%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/davina-noerfazhira-1a5b36377/",
  },
  {
    img: Alkha,
    title: "Nexmud",
    nama: "Alkhalifi Zikri Hady",
    desc: "Teknik Komputer 2025",
    border: "border-green-800",
    instagram: "https://www.instagram.com/alkhalifzkrr_/",
    linkedin: "https://www.linkedin.com/in/alkhalifi-hady-568849373/",
  },
  {
    img: Luthfi,
    title: "Nexmud",
    nama: "Luthfi Ariffandi",
    desc: "Sistem Informasi 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/lthfiifandi_/",
    linkedin: "https://www.linkedin.com/in/luthfiariffandi/",
  },
  {
    img: Mutia,
    title: "Nexmud",
    nama: "Mutiara Putri Dita",
    desc: "Teknik Komputer 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/mutiaraputridita_/",
    linkedin: "https://www.linkedin.com/in/mutiara-putri-dita-853537379/",
  },
  {
    img: Radho,
    title: "Nexmud",
    nama: "Radho Maisshadiq",
    desc: "Teknik Komputer 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/rd_maisshadiq/",
    linkedin: "https://www.linkedin.com/in/radho-maisshadiq-202497378/",
  },
  {
    img: Yazem,
    title: "Nexmud",
    nama: "M Yazem Agva Roiz",
    desc: "Informatika 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/arib_jill/",
    linkedin: "https://www.linkedin.com/in/arib-jilham-baa216316/",
  },
  {
    img: Habib,
    title: "Nexmud",
    nama: "M Habib Fadhilah",
    desc: "Sistem Informasi 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/_bi.boong?igsh=MXRhejBqaW5iNnE3bg==",
    linkedin: "https://www.linkedin.com/in/habib-fadhilah-751252378/",
  },
  {
    img: Nanda,
    title: "Nexmud",
    nama: "Rahmat Ananda Nazar",
    desc: "Informatika 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/nanda_nazar/",
    linkedin: "https://www.linkedin.com/in/rahmat-ananda-nazar-150922378/",
  },
  {
    img: Rendi,
    title: "Nexmud",
    nama: "Rendi Wahyudi",
    desc: "Teknik Komputer 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/rendi.whyudi_/",
    linkedin: "https://www.linkedin.com/in/rendi-wahyudi-732240378/",
  },
  {
    img: Jiwa,
    title: "Nexmud",
    nama: "M Jiwa Wira Tomo",
    desc: "Teknik Komputer 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/jiwatomo_6",
    linkedin: "https://linkedin.com/in/muhammad-jiwa-wira-tomo-7bb128306",
  },
  {
    img: Nabila,
    title: "Nexmud",
    nama: "Nabila Khairunnisa",
    desc: "Informatika 2025",
    border: "border-green-500",
    instagram: "https://www.instagram.com/nabilakhaiir/",
    linkedin: "https://www.linkedin.com/in/nabila-khairunnisa-074645375/",
  },
];

export const NexmudRistekGrid = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <h2
        className="text-3xl font-bold text-[#25364a] mb-4 text-center font-[Carena]"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Meet Our Nexmud
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {gridData.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={idx * 100}
          >
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg w-[300px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110">
              {/* Header background */}
              <div
                className="w-40 h-28 relative"
                style={{
                  backgroundImage: `url(${Ristek})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
                  <img
                    src={item.img}
                    alt={item.nama}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>
              </div>
              {/* Konten */}
              <div className="pt-12 pb-4 px-4 flex flex-col items-center">
                <span className="font-bold font-[Carena] text-xl text-[#25364a] text-center">
                  {item.nama}
                </span>
                <span className="text-sm font-semibold font-[Poppins] text-gray-500 mb-2 text-center">
                  {item.title}
                </span>
                <p className="text-xs font-bold text-gray-600 text-center mb-4">
                  {item.desc}
                </p>
                {/* Social icons */}
                <Social
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                  github={item.github}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NexmudRistekGrid;
