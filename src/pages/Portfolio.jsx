/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Download,
  GitHub,
  Linkedin,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  X,
  Home,
  User,
  Server,
  Folder,
  Monitor,
  Mail,
  Lock,
  Play,
} from "react-feather";

import { Link, useNavigate } from "react-router-dom";
import ShootingStar from "../Components/ShootingStar";
import Sidebar from "../Components/Sidebar";
import portfolio1 from "../assets/portfolio-Eksis.png";
import portfolio2 from "../assets/portfolio-kasir.png";
import portfolio3 from "../assets/UnityEssential.png";
import portfolio4 from "../assets/portfolio-tbVillage.png";
import portfolio5 from "../assets/portfolio-flutter.png";
import portfolio6 from "../assets/portfolio-legaslisasi-app.jpeg";
import portfolio7 from "../assets/portfolio-buku-tamu.jpeg";
import CV from "../assets/Cvazqi.pdf";
import {
  SiBootstrap,
  SiCss3,
  SiDart,
  SiFlutter,
  SiHtml5,
  SiInertia,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiUnity,
  SiWebgl,
} from "react-icons/si";
const navItems = [
    { label: "Home", icon: <Home size={20} />, to: "/" },
    { label: "About", icon: <User size={20} />, to: "/about" },
    { label: "Portfolio", icon: <Server size={20} />, to: "/portfolio" },
    { label: "Certificate", icon: <Folder size={20} />, to: "/certificate" },
  ];
function Portfolio() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const textClass = (theme) =>
    `text-sm font-light tracking-wide leading-relaxed ${theme === "Day" ? "text-slate-900" : "text-white"}`;

// Gambar yang akan dipreload
const images = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7];

useEffect(() => {
  // Preload semua gambar
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  const timer = setTimeout(() => setShowIntro(false), 1500);

  return () => clearTimeout(timer);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "Day";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="p-0 m-0 bg-slate-950 overflow-hidden">
      <Sidebar
        theme={theme}
        setTheme={setTheme}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        active={"Portfolio"}
      />

      <div
        className={`transition-all duration-500 ease-in-out h-full p-5 pb-1 ${showIntro ? "h-screen" : ""} ${
          isExpanded ? "lg:w-7/8" : "w-full lg:pr-[60px]"
        } ${theme === "Day" ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white z-10"}`}
      >
        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50  ${
                theme === "Day" ? "bg-slate-100" : "bg-slate-950"
              }`}
            >
              <motion.h1
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`text-6xl font-bold animate-pulse ${
                  theme === "Day" ? "text-slate-950" : "text-white"
                }`}
              >
                Portfolio 🔥
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Kontainer Utama */}
        <div className="font-signika-ngt mx-auto px-4 sm:px-6 lg:px-8 h-[85%]">
          {Array.from({ length: 10 }).map((_, i) => (
            <ShootingStar key={i} theme={theme} />
          ))}
          {/* Header */}
          <header className="w-full h-[5%] mb-10 flex justify-between items-center">
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
                  { icon: <Mail size={25} />, href: "mailto:muhammadazqi098@gmail.com" },
                  { icon: <MessageCircle size={25} />, href:"https://wa.me/6288215992674"},
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="group cursor-pointer"
                  >
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
          </header>

          {/* Main Content */}
          <main className="">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 my-20">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="w-full md:w-2/5 grid gap-4"
              >
                <h3
                  className={`text-3xl md:text-4xl font-medium ${theme === "Day" ? "text-gray-600" : "text-white"}`}
                >
                  Portfolio
                </h3>
                <h2
                  className={`text-3xl md:text-5xl font-bold leading-tight ${theme === "Day" ? "text-slate-900" : "text-white"}`}
                >
                  Let Me Show
                  <span className="text-green-500"> My Portfolio</span>
                </h2>
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
              </motion.div>
              {/* Right Section */}
              <motion.section
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full md:w-3/5 grid gap-6 py-10"
                id="about"
              >
                <header className="space-y-2">
                  <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                    <Monitor size={24} />
                    Last Portfolio
                  </div>
                  <p
                    className={`text-base md:text-lg font-medium ${theme === "Day" ? "text-gray-600" : "text-gray-400"}`}
                  >
                    EKSIS - Ekstrakulikuler and Seni Budaya Integritas Sistem
                  </p>
                  <hr className="border-gray-400 w-20" />
                </header>

                <div className="space-y-4 text-justify">
                  <img
                    src={portfolio1}
                    alt="eksis-preview"
                    className="w-full max-w-md  object-contain rounded-lg shadow-md"
                  />

                  <p className={textClass(theme)}>
                    A Website using React as Front-End styling with tailwind.css
                    and Laravel as Back-End purpose to make a attendance system
                    ,Achievement system and Activity System{" "}
                  </p>
                  <hr className="border-gray-400 w-20" />
                  <div className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4">
                    <Lock
                      size={24}
                      color="white"
                      className="mr-2 self-center"
                    />
                    <p className="text-white self-center">Private Project</p>
                  </div>
                </div>
              </motion.section>
            </div>
            <section className="portfolio-All">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="w-full"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3
                    className={`text-3xl md:text-4xl font-medium ${theme === "Day" ? "text-gray-600" : "text-white"}`}
                  >
                    Portfolio
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                  <div
                    className={`flex flex-col justify-between p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div>
                      <div className="flex justify-center py-2">
                        <img
                          src={portfolio1}
                          alt="eksis-preview"
                          className="w-full max-w-md object-contain rounded-lg shadow-md"
                        />
                      </div>

                      <div className="flex flex-col gap-4 pt-4 text-center sm:text-left">
                        <h5 className="text-xl font-bold">
                          EKSIS - Ekstrakurikuler and Seni Budaya Integritas
                          Sistem
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          A Website using React as Front-End styling with
                          Tailwind CSS and Laravel as Back-End, built to manage
                          attendance, achievements, and activities.
                        </p>
                      </div>

                      <hr className="my-4 border-gray-300 dark:border-gray-600" />

                      <div className="pb-2 font-medium">Tools Used:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <SiLaravel size={18} />
                          <span>Laravel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiReact size={18} />
                          <span>React</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiTailwindcss size={18} />
                          <span>Tailwind</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiPhp size={18} />
                          <span>PHP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiInertia size={18} />
                          <span>Inertia</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiCss3 size={18} />
                          <span>CSS3</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiJavascript size={18} />
                          <span>JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiPostgresql size={18} />
                          <span>PostgreSQL</span>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-400 dark:border-gray-600" />
                    </div>

                    <div className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4">
                      <Lock
                        size={24}
                        color="white"
                        className="mr-2 self-center"
                      />
                      <p className="text-white self-center">Private Project</p>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-between p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div>
                      <div className="flex justify-center py-2">
                        <img
                          src={portfolio2}
                          alt="eksis-preview"
                          className="w-full max-w-md object-contain rounded-lg shadow-md"
                        />
                      </div>

                      <div className="flex flex-col gap-4 pt-4 text-center sm:text-left">
                        <h5 className="text-xl font-bold">
                          Cashier App - A Point-of-sale (POS) web application
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Kasir App is a point-of-sale (POS) web application
                          designed to manage product ordering and transactions.
                          It supports two main roles: Admin and Cashier Staff.
                        </p>
                      </div>

                      <hr className="my-4 border-gray-300 dark:border-gray-600" />

                      <div className="pb-2 font-medium">Tools Used:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <SiLaravel size={18} />
                          <span>Laravel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiBootstrap size={18} />
                          <span>Bootstrap</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiPhp size={18} />
                          <span>PHP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiHtml5 size={18} />
                          <span>HTML5</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiCss3 size={18} />
                          <span>CSS3</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiJavascript size={18} />
                          <span>JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiMysql size={18} />
                          <span>MySQL</span>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-400 dark:border-gray-600" />
                    </div>

                    <a
                      href="https://github.com/MuhammadAzqiMadaniArdan/Final_KasirApp"
                      className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4"
                    >
                      <GitHub
                        size={24}
                        color="white"
                        className="mr-2 self-center"
                      />
                      <p className="text-white self-center">See Github</p>
                    </a>
                  </div>
                  <div
                    className={`flex flex-col justify-between p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div>
                      <div className="flex justify-center py-2">
                        <img
                          src={portfolio3}
                          alt="portfolio3"
                          className="w-full max-w-md object-contain rounded-lg shadow-md"
                        />
                      </div>

                      <div className="flex flex-col gap-4 pt-4 text-center sm:text-left">
                        <h5 className="text-xl font-bold">
                          Unity Essential - Learning Project of Unity Essential
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          A Game using Unity as Game Engine code with C# and
                          deploy game with WebGL to UnityPlay.
                        </p>
                      </div>

                      <hr className="my-4 border-gray-300 dark:border-gray-600" />

                      <div className="pb-2 font-medium">Tools Used:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <SiUnity size={18} />
                          <span>Unity</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiSharp size={18} />
                          <span>C#</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiWebgl size={18} />
                          <span>WebGL</span>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-400 dark:border-gray-600" />
                    </div>

                    <div className="flex gap-2">
                      <a
                        href="https://github.com/MuhammadAzqiMadaniArdan/UnityEssentialsProject"
                        className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4 w-2/3"
                      >
                        <GitHub
                          size={24}
                          color="white"
                          className="mr-2 self-center"
                        />
                        <p className="text-white self-center">See Github</p>
                      </a>
                      <a
                        href="https://play.unity.com/en/games/10a9be6a-35c1-4186-be39-7ca425f2a2b9/sugurugu-essential-project"
                        className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4 w-1/3"
                      >
                        <Play
                          size={24}
                          color="white"
                          className="mr-2 self-center"
                        />
                        <p className="text-white self-center">Play Game</p>
                      </a>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col justify-between p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div>
                      <div className="flex justify-center py-2">
                        <img
                          src={portfolio4}
                          alt="portfolio4-preview"
                          className="w-full max-w-md object-contain rounded-lg shadow-md"
                        />
                      </div>

                      <div className="flex flex-col gap-4 pt-4 text-center sm:text-left">
                        <h5 className="text-xl font-bold">
                          The Destroy Village - Turn-Based RPG Unity Game
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          A Game using Unity as Game Engine code with C# and
                          Make a animation with DoTween and make a complex
                          feature like quest system,turn-based system and rpg
                          system.
                        </p>
                      </div>

                      <hr className="my-4 border-gray-300 dark:border-gray-600" />

                      <div className="pb-2 font-medium">Tools Used:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <SiUnity size={18} />
                          <span>Unity</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiSharp size={18} />
                          <span>C#</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiWebgl size={18} />
                          <span>WebGL</span>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-400 dark:border-gray-600" />
                    </div>

                    <a
                      // href="https://github.com/MuhammadAzqiMadaniArdan/masjidwk.git"
                      className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4"
                    >
                      <Lock
                        size={24}
                        color="white"
                        className="mr-2 self-center"
                      />
                      <p className="text-white self-center">Private</p>
                    </a>
                  </div>
                  <div
                    className={`flex flex-col justify-between p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div>
                      <div className="flex justify-center py-2">
                        <img
                          src={portfolio5}
                          alt="eksis-preview"
                          className="w-full max-w-md object-contain rounded-lg shadow-md"
                        />
                      </div>

                      <div className="flex flex-col gap-4 pt-4 text-center sm:text-left">
                        <h5 className="text-xl font-bold">
                          Flutter Profile – Portfolio Website using Flutter
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Flutter Profile is a responsive and modern portfolio
                          website built using the Flutter framework, designed to
                          showcase personal or professional profiles. It
                          provides a smooth and mobile-first experience,
                          featuring clean UI components, animated transitions,
                          and easy customization.
                        </p>
                      </div>

                      <hr className="my-4 border-gray-300 dark:border-gray-600" />

                      <div className="pb-2 font-medium">Tools Used:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <SiFlutter size={18} />
                          <span>Flutter</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiDart size={18} />
                          <span>Dart</span>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-400 dark:border-gray-600" />
                    </div>

                    <a
                      href="https://github.com/MuhammadAzqiMadaniArdan/Flutter-Profile"
                      className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4"
                    >
                      <GitHub
                        size={24}
                        color="white"
                        className="mr-2 self-center"
                      />
                      <p className="text-white self-center">See Github</p>
                    </a>
                  </div>
                  <div
                    className={`flex flex-col justify-between p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div>
                      <div className="flex justify-center py-2">
                        <img
                          src={portfolio6}
                          alt="eksis-preview"
                          className="w-full max-w-md object-contain rounded-lg shadow-md"
                        />
                      </div>

                      <div className="flex flex-col gap-4 pt-4 text-center sm:text-left">
                        <h5 className="text-xl font-bold">
                          Legalisasi App – Cooperation Agreement (SPK)
                          management system and server service order handling
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Legalisasi App is a Laravel-based web application
                          built to manage Cooperation Agreements (SPK) and
                          handle server service orders efficiently. This system
                          streamlines the process of creating, approving, and
                          tracking SPK documents while also managing incoming
                          service requests related to server or IT
                          infrastructure.
                        </p>
                      </div>

                      <hr className="my-4 border-gray-300 dark:border-gray-600" />

                      <div className="pb-2 font-medium">Tools Used:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <SiPhp size={18} />
                          <span>PHP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiLaravel size={18} />
                          <span>Laravel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiHtml5 size={18} />
                          <span>HTML5</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiJquery size={18} />
                          <span>Jquery</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiBootstrap size={18} />
                          <span>Bootstrap</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiJavascript size={18} />
                          <span>JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiMysql size={18} />
                          <span>MySQL</span>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-400 dark:border-gray-600" />
                    </div>

                    <a className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4">
                      <Lock
                        size={24}
                        color="white"
                        className="mr-2 self-center"
                      />
                      <p className="text-white self-center">Private Project</p>
                    </a>
                  </div>
                  <div
                    className={`flex flex-col justify-between p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div>
                      <div className="flex justify-center py-2">
                        <img
                          src={portfolio7}
                          alt="eksis-preview"
                          className="w-full max-w-md object-contain rounded-lg shadow-md"
                        />
                      </div>

                      <div className="flex flex-col gap-4 pt-4 text-center sm:text-left">
                        <h5 className="text-xl font-bold">
                          Buku Tamu – Guest Book for Visitors to Data Centers
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          A responsive web application built to digitally manage
                          guest entries and visits to data centers. This project
                          is use Laravel as framework with PHP as language and
                          helps streamline visitor registration,
                          check-in/check-out logging, and reporting, providing a
                          secure and efficient alternative to traditional
                          paper-based guest books.
                        </p>
                      </div>

                      <hr className="my-4 border-gray-300 dark:border-gray-600" />

                      <div className="pb-2 font-medium">Tools Used:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <SiPhp size={18} />
                          <span>PHP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiLaravel size={18} />
                          <span>Laravel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiHtml5 size={18} />
                          <span>HTML5</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiJquery size={18} />
                          <span>Jquery</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiBootstrap size={18} />
                          <span>Bootstrap</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiJavascript size={18} />
                          <span>JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <SiMysql size={18} />
                          <span>MySQL</span>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-400 dark:border-gray-600" />
                    </div>

                    <a
                      href="https://github.com/MuhammadAzqiMadaniArdan/bukutamu"
                      className="flex justify-center bg-slate-700 hover:bg-slate-600 p-3 rounded-lg mt-4"
                    >
                      <GitHub
                        size={24}
                        color="white"
                        className="mr-2 self-center"
                      />
                      <p className="text-white self-center">See Github</p>
                    </a>
                  </div>
                </div>
              </motion.div>
            </section>

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
                      className="cursor-pointer hover:text-green-400"
                    >
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
          <footer className="flex justify-end min-w-full w-1/2 h-[15%] pt-10 ml-5">
          <p
            className={` uppercase py-2 px-5 mb-10 bg-green-500 rounded-l-full font-semibold self-center ${theme === "Day" ? "text-white" : "text-gray-900"}`}
          >
            copyright © 2025 Muhammad Azqi Madani Ardan
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Portfolio;
