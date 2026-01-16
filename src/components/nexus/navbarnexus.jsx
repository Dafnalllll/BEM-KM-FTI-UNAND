import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nexus from "../../assets/kabinet/nexusinspirasi.webp";
import Inti from "../../assets/kabinet/nexusinspirasi.webp";
import Adkesma from "../../assets/dinasnexus/logo/adkesma.webp";
import Audkes from "../../assets/dinasnexus/logo/audkes.webp";
import Bistech from "../../assets/dinasnexus/logo/bistech.webp";
import Eksternal from "../../assets/dinasnexus/logo/eksternal.webp";
import Internal from "../../assets/dinasnexus/logo/internal.webp";
import Kastrat from "../../assets/dinasnexus/logo/kastrat.webp";
import Medinkraf from "../../assets/dinasnexus/logo/medin.webp";
import Psdm from "../../assets/dinasnexus/logo/psdm.webp";
import Ristek from "../../assets/dinasnexus/logo/ristek.webp";
import Sosmasling from "../../assets/dinasnexus/logo/sosmas.webp";
import Beranda from "../../assets/sidebar/home.webp";
import Tentang from "../../assets/sidebar/about.webp";
import ProgramKerja from "../../assets/sidebar/programkerja.webp";
import Galeri from "../../assets/sidebar/galeri.webp";
import DinasBiro from "../../assets/sidebar/dinasdanbiro.webp";

export const NavbarNexus = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  // track open state per dropdown label so they don't open serempak
  const [openDropdown, setOpenDropdown] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection'
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside (only when any dropdown open)
  useEffect(() => {
    const anyOpen = Object.values(openDropdown).some(Boolean);
    const handleClick = (e) => {
      if (!e.target.closest(".dropdown-wrapper")) setOpenDropdown({});
    };
    if (anyOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openDropdown]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const menuItems = [
    { label: "Beranda", path: "beranda" },
    {
      label: "Tentang",
      isDropdown: true,
      dropdown: [
        { label: "Visi & Misi", id: "tentangnexus" },
        { label: "Kata Sambutan Gubernur", id: "katakatagub" },
        { label: "Kata Sambutan Wakil Gubernur", id: "katakatawagub" },
        { label: "Himpunan", id: "himpunan" },
        { label: "UKM", id: "ukm" },
      ],
    },
    {
      label: "Dinas & Biro",
      isDropdown: true,
      dropdown: [
        { label: "Audkes", path: "/dinasnexus/audkes" },
        { label: "Adkesma", path: "/dinasnexus/adkesma" },
        { label: "Bistech", path: "/dinasnexus/bistech" },
        { label: "Eksternal", path: "/dinasnexus/eksternal" },
        { label: "Inti", path: "/dinasnexus/inti" },
        { label: "Internal", path: "/dinasnexus/internal" },
        { label: "Kastrat", path: "/dinasnexus/kastrat" },
        { label: "Medinkraf", path: "/dinasnexus/medinkraf" },
        { label: "PSDM", path: "/dinasnexus/psdm" },
        { label: "Ristek", path: "/dinasnexus/ristek" },
        { label: "Sosmasling", path: "/dinasnexus/sosmasling" },
      ],
    },
    { label: "Program Kerja", path: "programkerjanexus" },
    { label: "Galeri", path: "galerinexus" },
  ];

  const handleMenuClick = (item) => {
    // jika item dropdown dan label == 'Dinas', treat label click as navigate/scroll ke section
    if (item.isDropdown) {
      if (item.label === "Dinas & Biro") {
        // kalau sedang di /nexus, scroll; kalau tidak, navigasi dengan state untuk scroll nanti
        if (currentPath === "/nexus") {
          const section = document.getElementById("dinasnexus");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/nexus", { state: { scrollTo: "dinasnexus" } });
        }
        setMobileMenuOpen(false);
        return;
      }
      // untuk dropdown lain, tetap toggle jika klik label
      setOpenDropdown((prev) => ({ ...prev, [item.label]: !prev[item.label] }));
      return;
    }
    if (currentPath === "/nexus" && !item.path?.startsWith("/")) {
      const section = document.getElementById(item.path);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      if (item.label === "Beranda") {
        navigate("/nexus");
      } else if (
        item.path === "dinasnexus" ||
        item.path === "programkerjanexus" ||
        item.path === "galerinexus"
      ) {
        // Scroll ke section jika di luar halaman /nexus
        navigate("/nexus", { state: { scrollTo: item.path } });
      } else {
        navigate(item.path?.startsWith("/") ? item.path : `/${item.path}`);
      }
    }
    setMobileMenuOpen(false);
  };

  const handleDropdownClick = (dropdownItem) => {
    // close all dropdowns after click
    setOpenDropdown({});
    setMobileMenuOpen(false);
    // kalau dropdownItem punya path, navigate langsung ke route
    if (dropdownItem.path) {
      navigate(
        dropdownItem.path.startsWith("/")
          ? dropdownItem.path
          : `/${dropdownItem.path}`
      );
      return;
    }

    // kalau punya id (scroll ke section di /nexus)
    if (currentPath === "/nexus") {
      const section = document.getElementById(dropdownItem.id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/nexus`, { state: { scrollTo: dropdownItem.id } });
    }
  };

  // helper to toggle one dropdown
  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const getLogo = (label) => {
    switch (label) {
      case "Inti":
        return Inti;
      case "Adkesma":
        return Adkesma;
      case "Audkes":
        return Audkes;
      case "Bistech":
        return Bistech;
      case "Eksternal":
        return Eksternal;
      case "Internal":
        return Internal;
      case "Kastrat":
        return Kastrat;
      case "Medinkraf":
        return Medinkraf;
      case "PSDM":
        return Psdm;
      case "Ristek":
        return Ristek;
      case "Sosmasling":
        return Sosmasling;
      default:
        return null;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 overflow-visible ${
        isScrolled ? "bg-gray-400/90" : "bg-transparent"
      }`}
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo dan Info */}
        <div className="flex items-center gap-3">
          <img src={Nexus} alt="Logo BEM KM FTI" className="w-12 h-12" />
          <div className="hidden md:block">
            <h1 className="font-bold text-xl text-white font-[Sans] tracking-wide">
              BEM KM FTI
            </h1>
            <p className="text-[#569817] text-lg font-[Montserrat] leading-none">
              Nexus Inspirasi
            </p>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) =>
            item.isDropdown ? (
              <div
                key={item.label}
                className="relative dropdown-wrapper flex items-center"
              >
                {/* label: klik teks */}
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`text-base font-medium font-[Carena] px-2 py-1 transition-colors cursor-pointer ${
                    isScrolled
                      ? "text-white hover:text-gray-200"
                      : "text-[#FFFFFF] hover:text-[#7c8a6e]"
                  }`}
                  style={{ background: "none" }}
                >
                  {item.label}
                </button>

                {/* caret/arrow: klik untuk buka dropdown */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(item.label);
                  }}
                  aria-label={`Toggle ${item.label} dropdown`}
                  className={`ml-1 p-1 rounded-full transition-transform cursor-pointer ${
                    openDropdown[item.label] ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                {openDropdown[item.label] && (
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl shadow-2xl bg-white ring-1 ring-black/10 z-50 animate-fadeIn origin-top max-h-64 overflow-y-auto p-2">
                    {item.dropdown.map((dropdownItem) => {
                      // Cek apakah path sekarang sama dengan path dropdown
                      const isActive =
                        dropdownItem.path &&
                        window.location.pathname === dropdownItem.path;

                      return (
                        <button
                          key={dropdownItem.label}
                          onClick={() => handleDropdownClick(dropdownItem)}
                          className={`
                            w-full flex items-center justify-between gap-4
                            text-left px-5 py-3 mb-1
                            font-semibold font-[Carena]
                            rounded-xl transition-all duration-200
                            hover:bg-yellow-50 hover:text-[#bfa13a] hover:shadow-md
                            focus:bg-yellow-100 focus:text-[#bfa13a]
                            active:bg-yellow-200
                            group cursor-pointer
                            ${
                              isActive
                                ? "bg-yellow-100 text-[#bfa13a] shadow font-bold"
                                : "text-gray-800"
                            }
                          `}
                          style={{ letterSpacing: "0.02em" }}
                        >
                          <span className="text-lg">{dropdownItem.label}</span>
                          {getLogo(dropdownItem.label) && (
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 group-hover:bg-yellow-100 transition-all duration-200">
                              <img
                                src={getLogo(dropdownItem.label)}
                                alt={dropdownItem.label + " logo"}
                                className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-200"
                                loading="lazy"
                              />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className={`text-base font-medium font-[Carena] px-2 py-1 transition-colors cursor-pointer ${
                  isScrolled
                    ? "text-white hover:text-gray-200"
                    : "text-[#FFFFFF] hover:text-[#7c8a6e]"
                }`}
                style={{ background: "none" }}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed left-0 top-[3.5rem] w-full h-full z-40">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative bg-white/30 backdrop-blur-xl border border-white/30 shadow-2xl rounded-b-3xl mx-2 mt-2 p-6 animate-slideInDown max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {menuItems.map((item, idx) => {
                // Tentukan logo untuk menu utama
                let icon = null;
                switch (item.label) {
                  case "Beranda":
                    icon = Beranda;
                    break;
                  case "Tentang":
                    icon = Tentang;
                    break;
                  case "Dinas & Biro":
                    icon = DinasBiro;
                    break;
                  case "Program Kerja":
                    icon = ProgramKerja;
                    break;
                  case "Galeri":
                    icon = Galeri;
                    break;
                  default:
                    icon = null;
                }

                return item.isDropdown ? (
                  <div key={item.label} className="relative dropdown-wrapper">
                    <div className="flex items-center w-full group">
                      {/* Logo di kiri */}
                      {icon && (
                        <img
                          src={icon}
                          alt={item.label + " icon"}
                          className="w-7 h-7 mr-3 object-contain transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6"
                        />
                      )}
                      <button
                        onClick={() => handleMenuClick(item)}
                        className="text-lg font-bold font-[Carena] px-2 py-2 w-full text-left text-white tracking-wide transition-all duration-200 hover:text-yellow-300 hover:bg-white/20 active:ring-2 active:ring-yellow-400 rounded-xl flex-1"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {item.label}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(item.label);
                        }}
                        className="p-2"
                        aria-label={`Toggle ${item.label} dropdown`}
                      >
                        <svg
                          className={`w-5 h-5 text-white transition-transform ${
                            openDropdown[item.label] ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Divider */}
                    {idx < menuItems.length - 1 && (
                      <div className="w-full h-0.5 bg-white/10 my-1 rounded"></div>
                    )}
                    {openDropdown[item.label] && (
                      <div className="mt-2 w-full z-50 animate-fadeIn max-h-64 overflow-y-auto flex flex-col gap-2 p-1">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.label}
                            onClick={() => handleDropdownClick(dropdownItem)}
                            className="flex items-center justify-between gap-4 w-full text-left px-4 py-3 rounded-xl shadow bg-white/80 text-gray-800 font-semibold font-[Carena] text-base transition-all duration-200 hover:bg-yellow-100 hover:text-[#bfa13a] hover:shadow-md active:bg-yellow-200 group cursor-pointer"
                            style={{ letterSpacing: "0.02em" }}
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                              {dropdownItem.label}
                            </span>
                            {getLogo(dropdownItem.label) && (
                              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-50 group-hover:bg-yellow-100 transition-all duration-200">
                                <img
                                  src={getLogo(dropdownItem.label)}
                                  alt={dropdownItem.label + " logo"}
                                  className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-200"
                                  loading="lazy"
                                />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center w-full group"
                  >
                    {/* Logo di kiri */}
                    {icon && (
                      <img
                        src={icon}
                        alt={item.label + " icon"}
                        className="w-7 h-7 mr-3 object-contain transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6"
                      />
                    )}
                    <button
                      onClick={() => handleMenuClick(item)}
                      className="text-lg font-bold font-[Carena] px-2 py-2 w-full text-left text-white tracking-wide transition-all duration-200 hover:text-yellow-300 hover:bg-white/20 active:ring-2 active:ring-yellow-400 rounded-xl flex-1"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {item.label}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .animate-slideInDown {
              animation: slideInDown 0.3s cubic-bezier(.4,0,.2,1);
            }
            @keyframes slideInDown {
              from { opacity: 0; transform: translateY(-40px);}
              to { opacity: 1; transform: translateY(0);}
            }
          `}</style>
        </div>
      )}

      {/* Animasi dropdown */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        /* Custom scrollbar for dropdown */
        .dropdown-wrapper .custom-scrollbar,
        .dropdown-wrapper .max-h-64 {
          scrollbar-width: thin;
          scrollbar-color: #eab308 #f5f5f5;
        }
        .dropdown-wrapper .custom-scrollbar::-webkit-scrollbar,
        .dropdown-wrapper .max-h-64::-webkit-scrollbar {
          width: 8px;
          background: #f5f5f5;
          border-radius: 8px;
        }
        .dropdown-wrapper .custom-scrollbar::-webkit-scrollbar-thumb,
        .dropdown-wrapper .max-h-64::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #f7c948 60%, #facc15 100%);
          border-radius: 8px;
          min-height: 40px;
          border: 2px solid #f5f5f5;
        }
        .dropdown-wrapper .custom-scrollbar::-webkit-scrollbar-thumb:hover,
        .dropdown-wrapper .max-h-64::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #facc15 60%, #eab308 100%);
        }
        .dropdown-wrapper .custom-scrollbar::-webkit-scrollbar-track,
        .dropdown-wrapper .max-h-64::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 8px;
        }
      `}</style>
    </nav>
  );
};

export default NavbarNexus;
