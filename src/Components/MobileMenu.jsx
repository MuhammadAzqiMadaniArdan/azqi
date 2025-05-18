import React from "react";
import { Link } from "react-router-dom";
import { X, Menu, Moon, Sun } from "react-feather";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, theme, setTheme, navItems }) => {
  return (
    isMenuOpen && (
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6 text-xl font-bold ${
          theme === "Day" ? "bg-slate-200 text-gray-600" : "bg-slate-950 text-white"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-5 right-5 p-2 rounded-md bg-green-500 text-white"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        {/* Render navItems */}
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer hover:text-green-400 flex items-center gap-2"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}

        <button
          onClick={() => setTheme(theme === "Day" ? "Night" : "Day")}
          className="p-2 cursor-pointer rounded-full transition-colors duration-300 text-green-500"
          aria-label="Toggle Theme"
        >
          {theme === "Day" ? (
            <div className="flex items-center gap-2">
              <Moon size={24} /> Night Mode
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sun size={24} /> Day Mode
            </div>
          )}
        </button>
      </div>
    )
  );
};

export default MobileMenu;
