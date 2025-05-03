// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar(theme, setIsMenuOpen, isMenuOpen, setTheme) {
  return (
    <nav className="flex justify-between  font-medium items-center py-7 transition-all duration-300 ease-in-out">
      <div className="gap-10 items-center font-semibold w-1/3 uppercase">
        <a
          className={`group cursor-pointer tracking-widest relative ${
            theme === "Night" ? "text-white" : "text-black"
          } `}
        >
          mama
          <div className="absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300"></div>
        </a>
      </div>
      <div className="grid grid-cols-4 gap-10 items-center font-semibold w-1/3 uppercase">
        <a
          className="group cursor-pointer tracking-widest relative"
          href="https://github.com/MuhammadAzqiMadaniArdan"
        >
          <div
            className={`rounded-full p-2 transition-all duration-300 ease-in-out transform ${
              theme === "Night" ? "text-white" : "text-black"
            } group-hover:scale-110 group-hover:text-green-500`}
          >
            <GitHub size={25} />
          </div>
        </a>
        <a className="group cursor-pointer tracking-widest relative">
          <div
            className={`rounded-full p-2 transition-all duration-300 ease-in-out transform ${
              theme === "Night" ? "text-white" : "text-black"
            } group-hover:scale-110 group-hover:text-green-500`}
          >
            <Instagram size={25} />
          </div>
        </a>
        <a
          className="group cursor-pointer tracking-widest relative"
          href="https://id.linkedin.com/in/muhammad-azqi-madani-ardan-315b722b5"
        >
          <div
            className={`rounded-full p-2 transition-all duration-300 ease-in-out transform ${
              theme === "Night" ? "text-white" : "text-black"
            } group-hover:scale-110 group-hover:text-green-500`}
          >
            <Linkedin size={25} />
          </div>
        </a>
        <a className="group cursor-pointer tracking-widest relative">
          <div
            className={`rounded-full p-2 transition-all duration-300 ease-in-out transform ${
              theme === "Night" ? "text-white" : "text-black"
            } group-hover:scale-110 group-hover:text-green-500`}
          >
            <MessageCircle size={25} />
          </div>
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md bg-green-500 text-white"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className="hidden lg:flex justify-end w-1/3">
        <button
          onClick={() => setTheme(theme === "Day" ? "Night" : "Day")}
          className="p-2 cursor-pointer rounded-full transition-colors duration-300 text-green-500"
          aria-label="Toggle Theme"
        >
          {theme === "Day" ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </div>
    </nav>
  );
}
