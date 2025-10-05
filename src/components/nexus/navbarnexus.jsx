import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nexus from "../../assets/kabinet/nexusinspirasi.png";

export const NavbarNexus = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".tentang-dropdown")) setDropdownOpen(false);
    };
    if (dropdownOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

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
    { label: "Dinas", path: "dinasnexus" },
    { label: "Program Kerja", path: "programkerja" },
    { label: "Galeri", path: "galeri" },
  ];

  const handleMenuClick = (item) => {
    if (item.isDropdown) {
      setDropdownOpen((prev) => !prev);
      return;
    }
    if (currentPath === "/nexus" && !item.path?.startsWith("/")) {
      const section = document.getElementById(item.path);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      if (item.label === "Beranda") {
        navigate("/nexus");
      } else {
        navigate(item.path?.startsWith("/") ? item.path : `/${item.path}`);
      }
    }
    setMobileMenuOpen(false);
  };

  const handleDropdownClick = (dropdownItem) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    if (currentPath === "/nexus") {
      const section = document.getElementById(dropdownItem.id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/nexus`, { state: { scrollTo: dropdownItem.id } });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-gray-400/90" : "bg-transparent"
      }`}
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo dan Info */}
        <div className="flex items-center gap-3">
          <img src={Nexus} alt="Logo BEM KM FTI" className="w-12 h-12" />
          <div>
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
              <div key={item.label} className="relative tentang-dropdown">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className={`flex items-center gap-1 text-base font-medium font-[Carena] px-2 py-1 transition-colors cursor-pointer ${
                    isScrolled
                      ? "text-white hover:text-gray-200"
                      : "text-[#FFFFFF] hover:text-[#7c8a6e]"
                  }`}
                  style={{ background: "none" }}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
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
                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black/10 z-50 animate-fadeIn">
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
        <div className="md:hidden bg-gray-400/95 backdrop-blur-lg w-full px-4 pb-4 pt-2 z-40 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {menuItems.map((item) =>
              item.isDropdown ? (
                <div key={item.label} className="relative tentang-dropdown">
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-1 text-base font-medium font-[Carena] px-2 py-2 w-full text-left text-white"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
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
                  {dropdownOpen && (
                    <div className="mt-1 w-full  z-50 animate-fadeIn">
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
