import React, { useEffect, useState } from "react";
import Instagram from "../../assets/socialmedia/instagram.webp";
import Tiktok from "../../assets/socialmedia/tiktok.webp";
import X from "../../assets/socialmedia/x.webp";
import Youtube from "../../assets/socialmedia/youtube.webp";

export const FooterSinergi = () => {
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100); // tampil jika scroll > 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Tambahkan state untuk tombol scroll to top
  const [showScrollTop, setShowScrollTop] = useState(false);

  return (
    <footer className="bg-[#223614] text-[#fff9d6] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 sm:text-left text-center">
        {/* Get In Touch */}
        <div>
          <h2 className="text-3xl font-bold mb-2 font-fredoka">Get In Touch</h2>
          <div className="relative w-34 h-1 mb-6 sm:mx-0 mx-auto">
            {/* Garis */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#e0a100] -translate-y-1/2 rounded" />
            {/* Titik animasi */}
            <span className="absolute top-4/2 left-0 w-3 h-3 bg-[#e0a100] rounded-full -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate" />
          </div>
          <div className="flex items-center gap-3 mb-3 sm:justify-start justify-center">
            <svg
              className="w-5 h-5 text-[#e0a100]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>PKM FTI Universitas Andalas</span>
          </div>
          <div className="flex items-center gap-3 mb-3 sm:justify-start justify-center">
            <svg
              className="w-5 h-5 text-[#e0a100]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <a href="mailto:bemkmfti@gmail.com" className="hover:underline">
              bemkmfti@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 mb-6 sm:justify-start justify-center">
            <svg
              className="w-5 h-5 text-[#e0a100]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.05a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.98.35 2 .59 3.05.72A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href="tel:+6282284367174" className="hover:underline">
              +62-822-8436-7174
            </a>
          </div>
          <div className="flex gap-3 sm:justify-start justify-center">
            <a
              href="https://www.instagram.com/bemkmftiunand/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c18c00] p-3 rounded  transition btn-fill-center instagram"
            >
              <img src={Instagram} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@bemkmftiunand"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c18c00] p-3 rounded  transition btn-fill-center tiktok "
            >
              <img src={Tiktok} alt="Tiktok" className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/bemkmftiunand"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c18c00] p-3 rounded transition btn-fill-center x"
            >
              <img src={X} alt="X" className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@bemkmftiunand"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c18c00] p-3 rounded  transition btn-fill-center youtube"
            >
              <img src={Youtube} alt="Youtube" className="w-6 h-5" />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-3xl font-bold mb-2 font-fredoka">Quick Links</h2>
          <div className="relative w-34 h-1 mb-6 sm:mx-0 mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#e0a100] -translate-y-1/2 rounded" />
            <span className="absolute top-4/2 left-0 w-3 h-3 bg-[#e0a100] rounded-full -translate-y-1/2 shadow-[0_0_8px_2px_rgba(224,161,0,0.5)] animate-dot-move-alternate" />
          </div>
          <ul className="space-y-3 flex flex-col items-center sm:items-start ">
            <li className="group flex items-center  gap-2 text-[#e0a100]">
              <span className="transition-transform duration-200 group-hover:translate-x-2">
                &rarr;
              </span>
              <a
                href="/sinergi"
                className="text-[#fff9d6] font-bold transition-transform duration-300 group-hover:translate-x-2"
              >
                Home
              </a>
            </li>
            <li className="group flex items-center gap-2 text-[#e0a100]">
              <span className="transition-transform duration-200 group-hover:translate-x-2">
                &rarr;
              </span>
              <a
                href="/tentangsinergi"
                className="text-[#fff9d6] font-bold transition-transform duration-300 group-hover:translate-x-2"
              >
                About Us
              </a>
            </li>
            <li className="group flex items-center gap-2 text-[#e0a100]">
              <span className="transition-transform duration-200 group-hover:translate-x-2">
                &rarr;
              </span>
              <a
                href="#"
                className="text-[#fff9d6] font-bold transition-transform duration-300 group-hover:translate-x-2"
              >
                Dinas
              </a>
            </li>
            <li className="group flex items-center gap-2 text-[#e0a100]">
              <span className="transition-transform duration-200 group-hover:translate-x-2">
                &rarr;
              </span>
              <a
                href="#"
                className="text-[#fff9d6] font-bold transition-transform duration-300 group-hover:translate-x-2"
              >
                Galeri
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-12 w-full max-w-2xl mx-auto" />
      {/* Copyright */}
      <div className="text-center text-[#fff9d6] mt-8">
        <span className="font-bold underline">bemkmftiunand</span> © All Rights
        Reserved.
      </div>
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 bg-[#e0a100] text-white p-3 rounded transition z-50 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default FooterSinergi;
