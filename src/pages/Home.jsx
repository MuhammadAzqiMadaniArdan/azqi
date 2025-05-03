/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Profile from "../assets/profile.png";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  Folder,
  GitHub,
  Home,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Server,
  Sun,
  User,
  X,
} from "react-feather";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import ShootingStar from "../Components/ShootingStar";
import CV from "../assets/Cvazqi.pdf";

const navItems = [
    { label: "Home", icon: <Home size={20} />, to: "/" },
    { label: "About", icon: <User size={20} />, to: "/about" },
    { label: "Portfolio", icon: <Server size={20} />, to: "/portfolio" },
    { label: "Certificate", icon: <Folder size={20} />, to: "/certificate" },
  ];
function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1500);
  
    // Preload image paralel
    const img = new Image();
    img.src = Profile;
  
    return () => clearTimeout(timer);
  }, []);
  

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "Day";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center ${theme === "Day" ? "bg-slate-100" : "bg-slate-950"} z-50`}
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`text-6xl font-bold animate-pulse ${theme === "Day" ? "text-slate-950" : "text-white"}`}
            >
              Hello 👋
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div
  className={`w-full max-w-screen h-fit lg:h-screen transition-colors duration-500 ease-in-out ${
    theme === "Day"
      ? "bg-slate-100 text-slate-950"
      : "bg-slate-950 text-white z-50"
  }`}
>

                  <div className="hidden lg:block">

          {Array.from({ length: 10 }).map((_, i) => (
            <ShootingStar key={i} theme={theme} />
          ))}
          </div>
        <div
          className={`font-signika-ngt mx-auto px-4 sm:px-6 lg:px-8 h-[85%] transition-colors duration-500 ease-in-out ${
            theme === "Day"
              ? "bg-slate-100 text-slate-950"
              : "bg-slate-950 text-white"
          }`}
        >
          <header
            id="Header"
            className="min-w-full w-1/2 bg-cover bg-center bg-fixed text-slate-950 flex-row justify-between h-[5%] mb-10"
          >
            <nav className="flex justify-between  font-medium items-center py-7 transition-all duration-300 ease-in-out">
              <div className="gap-10 items-center font-semibold w-1/3 uppercase hidden lg:block">
                <a
                  className={`group cursor-pointer tracking-widest relative ${
                    theme === "Night" ? "text-white" : "text-black"
                  } `}
                >
                  Azqi
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
                <a
                  className="group cursor-pointer tracking-widest relative"
                  href="mailto:muhammadazqi098@gmail.com"
                >
                  <div
                    className={`rounded-full p-2 transition-all duration-300 ease-in-out transform ${
                      theme === "Night" ? "text-white" : "text-black"
                    } group-hover:scale-110 group-hover:text-green-500`}
                  >
                    <Mail size={25} />
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
                <a
                  href="https://wa.me/6288215992674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer tracking-widest relative"
                >
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
          </header>
          <main
            className={`flex flex-row-reverse md:flex-row justify-between items-center gap-10 w-full h-auto md:h-[75%] my-20 px-4 ${theme === "Day" ? "text-slate-950" : "text-white"}`}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="container text-container grid gap-4 w-full md:w-3/5"
            >
              <div className="container text-container grid gap-4 ">
                <div className="flex gap-2">
                  <h3
                    className={`text-xl md:text-2xl font-medium ${theme === "Day" ? "text-gray-600" : "text-gray-300"}`}
                  >
                    Hello, it's me
                  </h3>
                  <span className="transition-all  animate-bounce ease-in text-xl md:text-2xl">
                    👋
                  </span>
                </div>
                <h2
                  className={`text-3xl md:text-5xl font-bold ${theme === "Day" ? "text-slate-900" : "text-white"} leading-tight`}
                >
                  Muhammad <span className="text-green-500">Azqi Madani</span>{" "}
                  Ardan
                </h2>

                <p
                  className={`text-lg md:text-2xl font-semibold ${theme === "Day" ? "text-gray-600" : "text-gray-500"}`}
                >
                  I'm a{" "}
                  <ReactTyped
                    strings={[
                      "Game Developer",
                      "Web Developer",
                      "Back-End Developer",
                    ]}
                    typeSpeed={120}
                    backSpeed={80}
                    loop
                    className={`text-xl md:text-2xl font-bold ${theme === "Day" ? "text-slate-900" : "text-white"} leading-tight`}
                  />
                </p>

                <p
                  className={`text-base md:text-lg font-normal ${theme === "Day" ? "text-gray-600" : "text-gray-400"}`}
                >
                  Passionate in creating seamless digital experiences, both on
                  the web and in games.
                </p>

                <div className="mt-4">
                  <a
                    href={CV}
                    download
                    className="flex items-center gap-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-full px-5 py-2 text-sm font-medium w-fit"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-between w-2/5 gap-20">
              <div className="p-2 snap-center">
                <img
                  src={Profile}
                  alt="profile-image"
                  className="rounded-full object-cover bg-green-400 pt-10 w-full h-full sm:w-full sm:h-full md:w-52 md:h-full lg:w-72 lg:h-full self-center"
                />
              </div>

              <aside className="hidden fixed end-5 lg:grid md:hidden  grid-rows-5 gap-7 font-semibold items-center justify-end  uppercase text-sm  self-center ">
                <a className="group cursor-pointer tracking-widest relative w-auto">
                  Home
                  <div className="absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300"></div>
                </a>
                <Link
                  to="/about"
                  className="group cursor-pointer tracking-widest relative"
                >
                  About
                  <div className="absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300"></div>
                </Link>

                <Link
                to="/portfolio"
                 className="group cursor-pointer tracking-widest relative">
                  Portfolio
                  <div className="absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300"></div>
                </Link>
                <Link
                to="/certificate"
                className="group cursor-pointer tracking-widest relative">
                  Certificate
                  <div className="absolute h-1 bg-green-400 left-0 w-[0%] group-hover:w-[100%] duration-300"></div>
                </Link>
              </aside>
            </div>

            {isMenuOpen && (
              <div
                className={`sm:hidden fixed top-0 left-0 w-full h-full  bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6  text-xl font-bold ${theme === "Day" ? "bg-slate-200 text-gray-600" : "bg-slate-950 text-white"}`}
              >
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md bg-green-500 text-white"
                  aria-label="Toggle Menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                {navItems.map((item, idx) => (
                    <Link
                      key={idx}
            to={item.to}
                      // onClick={() => setIsMenuOpen(false)}
                      className="cursor-pointer hover:text-green-400 flex gap-2"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  )
                )}
                <button
                  onClick={() => setTheme(theme === "Day" ? "Night" : "Day")}
                  className="p-2 cursor-pointer rounded-full transition-colors duration-300 text-green-500"
                  aria-label="Toggle Theme"
                >
                  {theme === "Day" ? <Moon size={24} /> : <Sun size={24} />}
                </button>
              </div>
            )}
          </main>
        </div>

        <footer className="flex justify-end min-w-full w-1/2 h-[15%] pt-5">
          <p
            className={` uppercase py-2 px-5 mb-10 bg-green-500 rounded-l-full font-semibold self-center ${theme === "Day" ? "text-white" : "text-gray-900"}`}
          >
            copyright © 2025 Muhammad Azqi Madani Ardan
          </p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;