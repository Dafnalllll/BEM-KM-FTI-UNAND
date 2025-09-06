import React from "react";
import { useNavigate } from "react-router-dom";
import Nexus from "../../assets/kabinet/nexusinspirasi.png";

export const NavbarNexus = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  return (
    <nav
      className="fixed top-0 left-0 z-50 shadow-md backdrop-blur w-full"
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between px-8 py-3">
        {/* Logo dan Info */}
        <div className="flex items-center gap-3">
          <img src={Nexus} alt="Logo BEM KM FTI" className="w-12 h-12 " />
          <div>
            <h1 className="font-bold text-xl text-white font-[Sans] tracking-wide">
              BEM KM FTI
            </h1>
            <p className="text-[#569817] text-lg  font-[Montserrat] leading-none">
              Nexus Inspirasi
            </p>
          </div>
        </div>
        {/* Menu */}
        <div className="flex items-center gap-8">
          {[
            { label: "Beranda", path: "beranda" }, // scroll di nexus.jsx
            { label: "Tentang", path: "tentangnexus" }, // scroll di nexus.jsx
            { label: "Dinas", path: "/dinasnexus" },
            { label: "Program Kerja", path: "programkerja" },
            { label: "Galeri", path: "/galeri" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (currentPath === "/nexus" && !item.path.startsWith("/")) {
                  // Scroll ke section jika di /nexus
                  const section = document.getElementById(item.path);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                } else {
                  // Beranda selalu ke /nexus jika bukan di /nexus
                  if (item.label === "Beranda") {
                    navigate("/nexus");
                  }
                  // Tentang selalu ke /tentangnexus jika bukan di /nexus
                  else if (item.label === "Tentang") {
                    navigate("/nexus");
                  }
                  // Tombol lain navigate seperti biasa
                  else {
                    navigate(
                      item.path.startsWith("/") ? item.path : `/${item.path}`
                    );
                  }
                }
              }}
              className="text-base text-[#FFFFFF] font-medium font-[Carena] px-2 py-1 hover:text-[#7c8a6e] transition-colors cursor-pointer"
              style={{ background: "none" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarNexus;
