import React, { useState } from "react";
import MobileMenu from "./MobileMenu"; // Import komponen MobileMenu
import { GitHub, Linkedin, Mail, MessageCircle, X, Menu, Home, User, Server, Folder } from "react-feather"; // Ganti sesuai kebutuhan dengan icon yang kamu pakai

const Header = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: <Home size={20} />, to: "/" },
    { label: "About", icon: <User size={20} />, to: "/about" },
    { label: "Portfolio", icon: <Server size={20} />, to: "/portfolio" },
    { label: "Certificate", icon: <Folder size={20} />, to: "/certificate" },
  ];
  
  return (
    <header className="w-full h-[5%] mb-10 flex justify-between items-center p-5">
      <nav className="w-full flex items-center justify-between py-7 font-medium">
        {/* Logo */}
        <div className="w-1/3 font-semibold uppercase">
          <a
            className={`group cursor-pointer tracking-widest relative ${
              theme === "Night" ? "text-white" : "text-black"
            }`}
          >
            Azqi
            <div className="absolute h-1 bg-green-400 left-0 w-0 group-hover:w-full duration-300"></div>
          </a>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-4 gap-10 w-1/3">
          {[
            {
              icon: <GitHub size={25} />,
              href: "https://github.com/MuhammadAzqiMadaniArdan",
            },
            {
              icon: <Linkedin size={25} />,
              href: "https://id.linkedin.com/in/muhammad-azqi-madani-ardan-315b722b5",
            },
            {
              icon: <Mail size={25} />,
              href: "mailto:muhammadazqi098@gmail.com",
            },
            {
              icon: <MessageCircle size={25} />,
              href: "https://wa.me/6288215992674",
            },
          ].map((item, idx) => (
            <a key={idx} href={item.href} className="group cursor-pointer">
              <div
                className={`rounded-full p-2 transition duration-300 ${
                  theme === "Night" ? "text-white" : "text-black"
                } group-hover:scale-110 group-hover:text-green-500`}
              >
                {item.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Toggle Mobile Menu & Theme */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md bg-green-500 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menampilkan komponen MobileMenu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        setTheme={setTheme}
        navItems={navItems}
      />
    </header>
  );
};

export default Header;
