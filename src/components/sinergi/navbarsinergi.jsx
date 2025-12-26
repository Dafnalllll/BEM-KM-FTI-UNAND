import React, { useState, useEffect } from "react";
import Sinergi from "../../assets/kabinet/sinergi.webp";

const menus = [
  { name: "Home", href: "/sinergi" },
  { name: "About", href: "/tentangsinergi" }, // ubah di sini
  { name: "Dinas", href: "/dinas" },
  { name: "Galeri", href: "#" },
];

const NavbarSinergi = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fungsi untuk handle tutup dengan animasi
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 200); // durasi animasi fadeOut
  };

  return (
    <nav
      className={`w-full flex items-center px-10 py-4 fixed top-0 left-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}
      `}
    >
      {/* Logo & Title */}
      <div className="flex items-center gap-4">
        <img src={Sinergi} alt="Logo" className="w-12 h-12 object-contain" />
        <div className="hidden sm:block">
          <div
            className={`font-medium text-2xl leading-tight transition-colors duration-300
              ${isScrolled ? "text-[#bfa13a]" : "text-white"}
            `}
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Kabinet Sinergi
          </div>
          <div
            className={`font-medium text-xl transition-colors duration-300
              ${isScrolled ? "text-[#bfa13a]" : "text-gray-200"}
            `}
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            BEM KM FTI
          </div>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-8 ml-auto">
        {menus.map((menu) => (
          <a
            key={menu.name}
            href={menu.href}
            className={`relative text-xl font-semibold transition-colors duration-300
              ${isScrolled ? "text-black" : "text-white"}
              after:content-[''] after:block after:w-0 hover:after:w-8 after:h-1 after:bg-yellow-400 after:mx-auto after:rounded after:transition-all after:duration-300 after:mt-4
            `}
          >
            {menu.name}
          </a>
        ))}
      </div>
      {/* Hamburger Button */}
      <button
        className="sm:hidden ml-auto flex items-center justify-center w-12 h-12"
        onClick={() => {
          if (open) {
            handleClose();
          } else {
            setOpen(true);
          }
        }}
        aria-label="Open menu"
      >
        <svg
          width="28"
          height="28"
          fill="none"
          stroke={isScrolled ? "#bfa13a" : "#e0a100"}
          strokeWidth="3"
        >
          <line x1="7" y1="10" x2="21" y2="10" />
          <line x1="7" y1="16" x2="21" y2="16" />
          <line x1="7" y1="22" x2="21" y2="22" />
        </svg>
      </button>
      {/* Mobile Menu */}
      {(open || closing) && (
        <div
          className={`absolute top-20 left-0 w-full bg-white z-50 overflow-hidden shadow-lg ${
            closing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          <div className="flex flex-col items-start px-8 py-6 gap-6">
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.href}
                className="text-2xl font-montserrat text-black font-medium"
                onClick={handleClose}
              >
                {menu.name}
              </a>
            ))}
          </div>
        </div>
      )}
      {/* Animasi dropdown */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s;
        }
        .animate-fadeOut {
          animation: fadeOut 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0);}
          to { opacity: 0; transform: translateY(-10px);}
        }
      `}</style>
    </nav>
  );
};

export default NavbarSinergi;
