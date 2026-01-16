import React, { useEffect, useState } from "react";
import Sinergi from "../../assets/kabinet/sinergi.webp";
import About from "../../assets/sidebar/about.webp";
import Home from "../../assets/sidebar/home.webp";
import DinasdanBiro from "../../assets/sidebar/dinasdanbiro.webp";
import Inti from "../../assets/dinassinergi/logo/inti.png";
import Adkesma from "../../assets/dinassinergi/logo/adkesma.png";
import AuditInternal from "../../assets/dinassinergi/logo/ai.png";
import Bistech from "../../assets/dinassinergi/logo/bistech.png";
import Eksternal from "../../assets/dinassinergi/logo/eksternal.png";
import Internal from "../../assets/dinassinergi/logo/internal.png";
import Kastrat from "../../assets/dinassinergi/logo/kastrat.png";
import Kestari from "../../assets/dinassinergi/logo/kestari.png";
import Medinkraf from "../../assets/dinassinergi/logo/medinkraf.png";
import PSDM from "../../assets/dinassinergi/logo/psdm.png";
import Ristek from "../../assets/dinassinergi/logo/ristek.png";
import Sosmasling from "../../assets/dinassinergi/logo/sosmas.png";
const menus = [
  { name: "Home", href: "/sinergi" },
  { name: "About", href: "/tentangsinergi" },
  { name: "Dinas & Biro", href: "/sinergi#dinas&biro" }, // ubah dari "#sinergi" menjadi "/sinergi"
];

const dinasBiroMenus = [
  { name: "Inti", href: "/dinassinergi/inti" },
  { name: "Adkesma", href: "/dinassinergi/adkesma" },
  { name: "Audit Internal", href: "/dinassinergi/auditinternal" },
  { name: "Bistech", href: "/dinassinergi/bistech" },
  { name: "Eksternal", href: "/dinassinergi/eksternal" },
  { name: "Internal", href: "/dinassinergi/internal" },
  { name: "Kastrat", href: "/dinassinergi/kastrat" },
  { name: "Kestari", href: "/dinassinergi/kestari" },
  { name: "Medinkraf", href: "/dinassinergi/medinkraf" },
  { name: "PSDM", href: "/dinassinergi/psdm" },
  { name: "Ristek", href: "/dinassinergi/ristek" },
  { name: "Sosmasling", href: "/dinassinergi/sosmasling" },
];

const NavbarSinergi = ({
  menuOpen,
  setMenuOpen,
  closing,
  handleClose,
  // ...props lain
}) => {
  // Fallback state lokal jika prop tidak ada
  const [localMenuOpen, setLocalMenuOpen] = useState(false);
  const [localClosing, setLocalClosing] = useState(false);

  const effectiveMenuOpen =
    typeof menuOpen === "boolean" ? menuOpen : localMenuOpen;
  const effectiveSetMenuOpen = setMenuOpen || setLocalMenuOpen;
  const effectiveClosing =
    typeof closing === "boolean" ? closing : localClosing;
  const effectiveHandleClose =
    handleClose ||
    (() => {
      setLocalClosing(true);
      setTimeout(() => {
        setLocalMenuOpen(false);
        setLocalClosing(false);
      }, 200);
    });

  const [isScrolled, setIsScrolled] = useState(false);
  const [showDinasBiro, setShowDinasBiro] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (effectiveMenuOpen || effectiveClosing) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [effectiveMenuOpen, effectiveClosing]);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-dinasbiro")) setOpenDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const handleMenuClick = (menu) => (e) => {
    if (menu.name === "Dinas & Biro") {
      e.preventDefault();
      if (window.location.pathname === "/sinergi") {
        const section = document.getElementById("dinas&biro");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/sinergi#dinas&biro";
      }
    }
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
      <div className="hidden sm:flex gap-8 ml-auto relative">
        {menus.map((menu) => {
          // Dropdown untuk Dinas & Biro
          if (menu.name === "Dinas & Biro") {
            return (
              <div
                key={menu.name}
                className="relative dropdown-dinasbiro flex items-center"
              >
                {/* Teks Dinas & Biro sebagai link */}
                <a
                  href={menu.href}
                  className={`relative flex items-center text-xl font-semibold transition-colors duration-300
                    ${isScrolled ? "text-black" : "text-white"}
                    after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0
                    px-1 -mt-4
                  `}
                  style={{ background: "none", border: "none", padding: 0 }}
                >
                  {menu.name}
                </a>
                {/* Panah sebagai tombol dropdown */}
                <button
                  type="button"
                  className="flex items-center cursor-pointer ml-1 -mt-3"
                  onClick={() => setOpenDropdown((v) => !v)}
                  aria-label="Toggle Dinas & Biro dropdown"
                  style={{ background: "none", border: "none", padding: 0 }}
                >
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke={isScrolled ? "#bfa13a" : "#ffe082"}
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* Dropdown */}
                {openDropdown && (
                  <div className="absolute -left-[3rem] top-full mt-3 min-w-[220px] bg-white/95 border border-yellow-100 rounded-2xl shadow-xl z-50 py-2 animate-fadeInMenu">
                    <div className="max-h-64 overflow-y-auto custom-scrollbar flex flex-col gap-1 py-1 pr-1">
                      {dinasBiroMenus.map((sub) => {
                        const isActive = window.location.pathname === sub.href;
                        // Mapping logo sesuai nama
                        let logo = null;
                        if (sub.name === "Inti") logo = Inti;
                        if (sub.name === "Adkesma") logo = Adkesma;
                        if (sub.name === "Audit Internal") logo = AuditInternal;
                        if (sub.name === "Bistech") logo = Bistech;
                        if (sub.name === "Eksternal") logo = Eksternal;
                        if (sub.name === "Internal") logo = Internal;
                        if (sub.name === "Kastrat") logo = Kastrat;
                        if (sub.name === "Kestari") logo = Kestari;
                        if (sub.name === "Medinkraf") logo = Medinkraf;
                        if (sub.name === "PSDM") logo = PSDM;
                        if (sub.name === "Ristek") logo = Ristek;
                        if (sub.name === "Sosmasling") logo = Sosmasling;

                        return (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className={`flex items-center justify-between px-6 py-3 rounded-xl
                              text-yellow-900 font-medium text-base
                              transition-all duration-150
                              hover:bg-yellow-100 hover:text-[#bfa13a] hover:font-semibold
                              active:bg-yellow-200 active:text-yellow-900
                              focus:bg-yellow-100 focus:text-[#bfa13a]
                              ${
                                isActive
                                  ? "bg-yellow-100 text-[#bfa13a] font-bold shadow"
                                  : ""
                              }
                            `}
                            style={{ letterSpacing: "0.02em" }}
                          >
                            <span>{sub.name}</span>
                            {logo && (
                              <img
                                src={logo}
                                alt={sub.name + " logo"}
                                className="w-10 h-10 object-contain ml-4"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  minWidth: "60px",
                                  minHeight: "60px",
                                  maxWidth: "60px",
                                  maxHeight: "60px",
                                }}
                                loading="lazy"
                              />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          }
          // Menu biasa
          return (
            <a
              key={menu.name}
              href={menu.href}
              className={`relative text-xl font-semibold transition-colors duration-300
                ${isScrolled ? "text-black" : "text-white"}
                after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0
                after:h-1 after:bg-yellow-400 after:rounded after:transition-all after:duration-300
                after:scale-x-0 hover:after:scale-x-100 after:origin-left pb-4
                px-1
              `}
              onClick={handleMenuClick(menu)}
            >
              {menu.name}
            </a>
          );
        })}
      </div>
      {/* Hamburger Button */}
      <button
        className="sm:hidden ml-auto flex items-center justify-center w-12 h-12"
        onClick={() => {
          if (effectiveMenuOpen) {
            effectiveHandleClose();
          } else {
            effectiveSetMenuOpen(true);
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
      {/* Mobile Menu - Elegant Glassmorphism, Centered, Iconic */}
      {(effectiveMenuOpen || effectiveClosing) && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center  backdrop-blur-[3px] transition-all
            ${effectiveClosing ? "animate-glassOutMenu" : "animate-glassInMenu"}
          `}
        >
          <div className="relative w-[92vw] max-w-sm bg-white/30 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl px-8 py-12 flex flex-col items-center gap-10 border border-yellow-400/30 ring-2 ring-yellow-100/40">
            {/* Close Button */}
            <button
              className="absolute top-6 right-7 text-yellow-700 hover:text-yellow-900 transition-colors"
              onClick={effectiveHandleClose}
              aria-label="Close menu"
            >
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                <circle
                  cx="19"
                  cy="19"
                  r="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.13"
                />
                <line
                  x1="12"
                  y1="12"
                  x2="26"
                  y2="26"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="26"
                  y1="12"
                  x2="12"
                  y2="26"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {/* Logo & Title */}
            <div className="flex flex-col items-center">
              <img
                src={Sinergi}
                alt="Logo"
                className="w-20 h-20 object-contain mb-2 "
              />
              <div
                className="font-bold text-2xl text-yellow-800"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                Kabinet Sinergi
              </div>
              <div
                className="font-medium text-lg text-yellow-600"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                BEM KM FTI
              </div>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col gap-6 w-full">
              {menus.map((menu) => {
                let iconImg = null;
                if (menu.name === "Home") iconImg = Home;
                if (menu.name === "About") iconImg = About;
                if (menu.name === "Dinas & Biro") iconImg = DinasdanBiro;

                // Jika menu Dinas & Biro, tampilkan tombol dropdown
                if (menu.name === "Dinas & Biro") {
                  return (
                    <div key={menu.name} className="w-full">
                      <button
                        type="button"
                        className={`flex items-center gap-4 w-full text-xl font-semibold rounded-2xl px-6 py-4
                          text-yellow-900 bg-white/70 hover:bg-yellow-100/90 active:bg-yellow-200/90
                          shadow-md transition-all duration-200 border border-yellow-200/40
                          hover:scale-[1.04] active:scale-100
                        `}
                        style={{ letterSpacing: "0.03em" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDinasBiro((v) => !v);
                        }}
                      >
                        <img
                          src={iconImg}
                          alt={menu.name + " icon"}
                          className="w-7 h-7 object-contain"
                        />
                        <span className="flex-1 text-left">{menu.name}</span>
                        <svg
                          className={`w-5 h-5 ml-2 transition-transform ${
                            showDinasBiro ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="#bfa13a"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {/* Submenu */}
                      {showDinasBiro && (
                        <div className="mt-3 ml-2 max-h-56 overflow-y-auto flex flex-col gap-2 animate-fadeInMenu custom-scrollbar">
                          {dinasBiroMenus.slice(0, 12).map((sub) => {
                            // Mapping logo sesuai nama
                            let logo = null;
                            if (sub.name === "Inti") logo = Inti;
                            if (sub.name === "Adkesma") logo = Adkesma;
                            if (sub.name === "Audit Internal")
                              logo = AuditInternal;
                            if (sub.name === "Bistech") logo = Bistech;
                            if (sub.name === "Eksternal") logo = Eksternal;
                            if (sub.name === "Internal") logo = Internal;
                            if (sub.name === "Kastrat") logo = Kastrat;
                            if (sub.name === "Kestari") logo = Kestari;
                            if (sub.name === "Medinkraf") logo = Medinkraf;
                            if (sub.name === "PSDM") logo = PSDM;
                            if (sub.name === "Ristek") logo = Ristek;
                            if (sub.name === "Sosmasling") logo = Sosmasling;

                            return (
                              <a
                                key={sub.name}
                                href={sub.href}
                                className={`
                                  flex items-center justify-between gap-3 px-5 py-3 rounded-xl
                                  bg-gradient-to-r from-yellow-50 via-white to-yellow-100
                                  shadow-sm border border-yellow-100/70
                                  text-yellow-900 font-semibold text-base
                                  hover:bg-yellow-200/80 hover:shadow-md hover:scale-[1.03]
                                  active:bg-yellow-300/80 transition-all duration-200
                                `}
                                onClick={effectiveHandleClose}
                                style={{ letterSpacing: "0.02em" }}
                              >
                                <span className="flex items-center">
                                  <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                                  {sub.name}
                                </span>
                                {logo && (
                                  <img
                                    src={logo}
                                    alt={sub.name + " logo"}
                                    className="w-8 h-8 object-contain ml-4"
                                    style={{
                                      width: "60px",
                                      height: "60px",
                                      minWidth: "60px",
                                      minHeight: "60px",
                                      maxWidth: "60px",
                                      maxHeight: "60px",
                                    }}
                                    loading="lazy"
                                  />
                                )}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                // Menu biasa
                return (
                  <a
                    key={menu.name}
                    href={menu.href}
                    className={`flex items-center gap-4 w-full text-xl font-semibold rounded-2xl px-6 py-4
                      text-yellow-900 bg-white/70 hover:bg-yellow-100/90 active:bg-yellow-200/90
                      shadow-md transition-all duration-200 border border-yellow-200/40
                      hover:scale-[1.04] active:scale-100
                    `}
                    onClick={(e) => {
                      handleMenuClick(menu)(e);
                      effectiveHandleClose();
                    }}
                    style={{ letterSpacing: "0.03em" }}
                  >
                    <img
                      src={iconImg}
                      alt={menu.name + " icon"}
                      className="w-7 h-7 object-contain"
                    />
                    <span className="flex-1 text-left">{menu.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          {/* Animasi */}
          <style>{`
            .animate-glassInMenu {
              animation: glassInMenu 0.38s cubic-bezier(.4,0,.2,1);
            }
            .animate-glassOutMenu {
              animation: glassOutMenu 0.22s cubic-bezier(.4,0,.2,1);
            }
            @keyframes glassInMenu {
              from { opacity: 0; transform: scale(0.96) translateY(40px);}
              to { opacity: 1; transform: scale(1) translateY(0);}
            }
            @keyframes glassOutMenu {
              from { opacity: 1; transform: scale(1) translateY(0);}
              to { opacity: 0; transform: scale(0.96) translateY(40px);}
            }
          `}</style>
        </div>
      )}
      {/* Animasi dropdown */}
      <style>{`
        .animate-fadeInMenu {
          animation: fadeInMenu 0.38s cubic-bezier(.4,0,.2,1);
        }
        .animate-fadeOutMenu {
          animation: fadeOutMenu 0.22s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInMenu {
          from { opacity: 0; transform: translateY(-40px) scale(0.97);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }
        @keyframes fadeOutMenu {
          from { opacity: 1; transform: translateY(0) scale(1);}
          to { opacity: 0; transform: translateY(-40px) scale(0.97);}
        }
      `}</style>
      {/* Tambahkan style untuk custom scrollbar jika ingin lebih cantik */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 7px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ffe082;
          border-radius: 8px;
          margin: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </nav>
  );
};

export default NavbarSinergi;
