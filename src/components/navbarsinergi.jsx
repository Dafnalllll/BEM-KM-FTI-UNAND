import React from "react";
import logo from "../assets/kabinet/sinergi.webp";

const NavbarSinergi = () => {
  const menus = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Dinas", href: "#" },
    { name: "Berita", href: "#" },
    { name: "Galeri", href: "#" },
  ];

  return (
    <nav className="w-full bg-transparent flex justify-between items-center px-12 py-4">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        <div>
          <div className="text-white font-bold text-2xl leading-tight font-montserrat">
            Kabinet Sinergi
          </div>
          <div className="text-gray-200 font-semibold text-xl font-montserrat">
            BEM KM FTI
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        {menus.map((menu) => (
          <a
            key={menu.name}
            href={menu.href}
            className="relative text-xl font-semibold font-montserrat text-white hover:text-yellow-300 transition
              after:content-[''] after:block after:w-0 hover:after:w-8 after:h-1 after:bg-yellow-400 after:mx-auto after:rounded after:transition-all after:duration-300"
          >
            {menu.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavbarSinergi;
