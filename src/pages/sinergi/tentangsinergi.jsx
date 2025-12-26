import React from "react";
import NavbarSinergi from "../../components/sinergi/navbarsinergi";
import FooterSinergi from "../../components/sinergi/footersinergi";
import Pelantikan from "../../assets/dinassinergi/kegiatan/pelantikan.webp";
import Sinergi from "../../assets/kabinet/sinergi.webp";

const TentangSinergi = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${Pelantikan})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavbarSinergi />
      <div className="flex-1 bg-black/60 flex items-center justify-center">
        <div className="w-full max-w-6xl flex flex-col  md:flex-row items-center justify-center gap-8 md:gap-16 px-4 py-12 md:py-35">
          {/* Logo */}
          <div
            className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={Sinergi}
              alt="Logo BEM FTI"
              className="w-48 md:w-[340px] max-w-full"
              draggable={false}
            />
          </div>
          {/* Visi Misi */}
          <div
            className="flex-1 bg-transparent px-2 md:px-8 py-8 md:py-10 rounded-lg max-w-2xl"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {/* VISI */}
            <h3
              className="text-[#b57a2a] text-xl font-bold mb-1 text-center md:text-center"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              VISI
            </h3>
            <div className="flex md:justify-center justify-center mb-4">
              <div className="relative w-32 h-1.5 bg-[#b57a2a] rounded flex items-center gap-2">
                <span className="absolute top-2/2 left-0 w-3 h-1.5 bg-[#e0a100] rounded-full -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate" />
                <div className="w-12 h-1 bg-[#b57a2a] rounded" />
                <div className="w-8 h-1 bg-[#b57a2a] rounded" />
              </div>
            </div>
            <div className="text-white text-lg font-semibold mb-8 text-center md:text-left">
              BEM FTI yang secara sinergis menghasilkan dampak nyata dan dekat
              dengan KM FTI
            </div>
            {/* MISI */}
            <h3
              className="text-[#b57a2a] text-xl font-bold mb-1 mt-4 text-center md:text-center"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              MISI
            </h3>
            <div className="flex md:justify-center justify-center mb-4">
              <div className="relative w-32 h-1.5 bg-[#b57a2a] rounded flex items-center gap-2">
                <span className="absolute top-2/2 left-0 w-3 h-1.5 bg-[#e0a100] rounded-full -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate" />
                <div className="w-12 h-1 bg-[#b57a2a] rounded" />
                <div className="w-8 h-1 bg-[#b57a2a] rounded" />
              </div>
            </div>
            <ol className="text-white text-lg font-semibold list-decimal pl-6 space-y-2 text-left">
              <li>Meningkatkan pelayanan advokasi yang terkonsentrasi</li>
              <li>Mewujudkan pergerakan yang strategis dan efektif</li>
              <li>
                Mengakselerasikan SDM FTI dengan tata kelola yang baik dan
                menyenangkan
              </li>
              <li>Menciptakan harmonisasi dalam lingkungan FTI</li>
              <li>Mengupayakan relasi yang strategis dengan pihak eksternal</li>
            </ol>
          </div>
        </div>
      </div>
      <FooterSinergi />
    </div>
  );
};

export default TentangSinergi;
