import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nexus from "../../assets/kabinet/nexusinspirasi.webp";

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
      label: "Dinas",
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
      if (item.label === "Dinas") {
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
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black/10 z-50 animate-fadeIn origin-top">
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.label}
                        onClick={() => handleDropdownClick(dropdownItem)}
                        className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-100 rounded-xl  font-[Carena] transition cursor-pointer"
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
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
        <div className="md:hidden bg-gray-400/95 backdrop-blur-lg w-full px-4 pb-4 pt-2 z-10 animate-fadeIn max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) =>
              item.isDropdown ? (
                <div key={item.label} className="relative dropdown-wrapper">
                  <div className="flex items-center w-full">
                    {/* label klik navigasi/scroll (untuk Dinas akan menuju section) */}
                    <button
                      onClick={() => handleMenuClick(item)}
                      className="text-base font-medium font-[Carena] px-2 py-2 w-full text-left text-white"
                    >
                      {item.label}
                    </button>
                    {/* arrow to toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.label);
                      }}
                      className="p-2"
                      aria-label={`Toggle ${item.label} dropdown`}
                    >
                      <svg
                        className={`w-4 h-4 text-white transition-transform ${
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
                  {openDropdown[item.label] && (
                    <div className="mt-1 w-full z-50 animate-fadeIn max-h-64 overflow-y-auto">
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          onClick={() => handleDropdownClick(dropdownItem)}
                          className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-gray-100 rounded-xl font-[Carena] transition cursor-pointer"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item)}
                  className="text-base font-medium font-[Carena] px-2 py-2 w-full text-left text-white"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
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
      `}</style>
    </nav>
  );
};

export default NavbarNexus;
