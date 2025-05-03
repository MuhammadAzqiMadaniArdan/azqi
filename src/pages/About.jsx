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
  UserCheck,
  Map,
  Calendar,
  Home,
  User,
  Server,
  Folder,
  Monitor,
  Mail,
  Database,
} from "react-feather";

import { Link } from "react-router-dom";
import ShootingStar from "../Components/ShootingStar";
import Sidebar from "../Components/Sidebar";
import Wikrama from "../assets/wikramalogo.png";
import Dihostingin from "../assets/dihostingin.png";
import CV from "../assets/Cvazqi.pdf";
import InfiniteScrollLanguages from "../Components/InfiniteScrollLanguage";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiUnity,
} from "react-icons/si";
import { GiGameConsole } from "react-icons/gi";
const navItems = [
  { label: "Home", icon: <Home size={20} />, to: "/" },
  { label: "About", icon: <User size={20} />, to: "/about" },
  { label: "Portfolio", icon: <Server size={20} />, to: "/portfolio" },
  { label: "Certificate", icon: <Folder size={20} />, to: "/certificate" },
];
function About() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const textClass = (theme) =>
    `text-sm font-light tracking-wide leading-relaxed ${theme === "Day" ? "text-slate-900" : "text-white"}`;

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1500);
    return () => clearTimeout(timer);
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
        active={"About"}
      />

      {/* Konten utama */}
      <div
        className={`transition-all duration-500 ease-in-out h-full p-5 pb-1 ${showIntro ? "h-screen" : ""} ${
          isExpanded ? "lg:w-7/8" : "w-full lg:pr-[60px]"
        } ${theme === "Day" ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white z-10"}`}
      >
        {/* Animasi Intro */}
        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 ${
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
                About
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
                  {
                    icon: <Mail size={25} />,
                    href: "mailto:muhammadazqi098@gmail.com",
                  },
                  {
                    icon: <MessageCircle size={25} />,
                    href: "https://wa.me/6288215992674",
                  },
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
                  About Me
                </h3>
                <h2
                  className={`text-3xl md:text-5xl font-bold leading-tight ${theme === "Day" ? "text-slate-900" : "text-white"}`}
                >
                  Let Me{" "}
                  <span className="text-green-500">Introduce Myself</span>
                </h2>
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
                    <UserCheck size={24} />
                    Who I Am?
                  </div>
                  <p
                    className={`text-base md:text-lg font-medium ${theme === "Day" ? "text-gray-600" : "text-gray-400"}`}
                  >
                    Short Story About Me
                  </p>
                  <hr className="border-gray-400 w-20" />
                </header>

                <div className="space-y-4 text-justify">
                  <p className={textClass(theme)}>
                    I am a graduate of SMK Wikrama Bogor, majoring in Software
                    and Game Development. I specialize in Back End and Web
                    Development using Laravel, PHP, JavaScript, and Node.js, and
                    also work with React to create modern, responsive user
                    interfaces. Most of my web projects are built using a
                    Laravel and React stack to ensure both efficiency and
                    scalability.
                  </p>
                  <p className={textClass(theme)}>
                    In addition to web development, I develop games using Unity
                    and C#, from simple prototypes to more complex gameplay
                    systems. I believe technology is a powerful tool to solve
                    real-world problems, and I’m committed to continuous
                    learning, staying up-to-date with trends, and contributing
                    to innovative teams.
                  </p>
                  <hr className="border-gray-400 w-20" />
                  <q className={textClass(theme)}>
                    The best people are those who are useful to others
                  </q>
                </div>
              </motion.section>
            </div>
            <section className="career">
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
                    Career
                  </h3>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* SMK Wikrama Bogor */}
                  <div
                    className={`max-w-lg mx-auto p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                      <img
                        src={Wikrama}
                        alt="wikrama-logo"
                        className="w-24 h-24 object-contain sm:w-20 sm:h-20"
                      />
                      <div className="text-center sm:text-left">
                        <h5 className="text-xl font-bold mb-1">
                          SMK Wikrama Bogor
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          Back-End Developer | Game Developer | Web Developer
                        </p>
                      </div>
                    </div>

                    <hr className="my-4 border-gray-300 dark:border-gray-600" />

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Map size={18} />
                        <span>Bogor, Indonesia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>June 2022 - 2025</span>
                      </div>
                    </div>
                  </div>

                  {/* PT Industri Kreatif Digital */}
                  <div
                    className={`w-full max-w-lg mx-auto p-6 rounded-xl shadow-md transition-all duration-300 ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                      <img
                        src={Dihostingin}
                        alt="dihostingin-logo"
                        className="w-24 h-24 object-contain sm:w-20 sm:h-20"
                      />
                      <div className="text-center sm:text-left">
                        <h5 className="text-xl font-bold mb-1">
                          PT Industri Kreatif Digital
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          Full-Stack Developer | Front-End Developer
                        </p>
                      </div>
                    </div>

                    <hr className="my-4 border-gray-300 dark:border-gray-600" />

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Map size={18} />
                        <span>Bogor, Indonesia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>Jan 2024 - June 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            <section className="skills my-10">
              <div>
                <div className="flex justify-between my-5">
                  <h3
                    className={`text-3xl md:text-4xl font-medium ${
                      theme === "Day" ? "text-gray-600" : "text-white"
                    }`}
                  >
                    Skills
                  </h3>
                  <Monitor className="items-center content-center self-center" />
                </div>
                <InfiniteScrollLanguages />
              </div>
            </section>
            <section className="services">
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
                    Services
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    className={`max-w-lg mx-auto p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div className="flex justify-center">
                      <Monitor
                        alt="wikrama-logo"
                        className="w-24 h-24 object-contain sm:w-20 sm:h-20"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start  pt-2">
                      <div className="text-center sm:text-left">
                        <h5 className="text-xl font-bold mb-1">
                          Web Development
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          I build responsive and scalable websites and web
                          applications using modern technologies like Laravel
                          for backend and React with Tailwind CSS for frontend.
                          My focus is on clean architecture, usability, and
                          performance.
                        </p>
                      </div>
                    </div>

                    <hr className="my-4 border-gray-300 dark:border-gray-600" />

                    <div className="pb-2">
                      <p>Tools : </p>
                    </div>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-500 dark:text-gray-400">
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
                        <SiMysql size={18} />
                        <span>Mysql</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiHtml5 size={18} />
                        <span>Html5</span>
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
                        <span>Postgre</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`max-w-lg mx-auto p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div className="flex justify-center">
                      <GiGameConsole
                        alt="wikrama-logo"
                        className="w-24 h-24 object-contain sm:w-20 sm:h-20"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start  pt-2">
                      <div className="text-center sm:text-left">
                        <h5 className="text-xl font-bold mb-1">
                          Game Development
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          I build responsive and scalable websites and web
                          applications using modern technologies like Laravel
                          for backend and React with Tailwind CSS for frontend.
                          My focus is on clean architecture, usability, and
                          performance.
                        </p>
                      </div>
                    </div>

                    <hr className="my-4 border-gray-300 dark:border-gray-600" />

                    <div className="pb-2">
                      <p>Tools : </p>
                    </div>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <SiUnity size={18} />
                        <span>Unity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiSharp size={18} />
                        <span>C#</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiHtml5 size={18} />
                        <span>Html5</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiJavascript size={18} />
                        <span>JavaScript</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`max-w-lg mx-auto p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div className="flex justify-center">
                      <Mail
                        alt="wikrama-logo"
                        className="w-24 h-24 object-contain sm:w-20 sm:h-20"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-2">
                      <div className="text-center sm:text-left">
                        <h5 className="text-xl font-bold mb-1">
                          Email Automation & Integration{" "}
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          I implement automated email systems for scheduled and
                          condition-based notifications. Using Laravel, I
                          integrate smart email workflows that improve
                          communication and keep users engaged.
                        </p>
                      </div>
                    </div>

                    <hr className="my-4 border-gray-300 dark:border-gray-600" />

                    <div className="pb-2">
                      <p>Tools : </p>
                    </div>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <SiLaravel size={18} />
                        <span>Laravel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiReact size={18} />
                        <span>React</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiJavascript size={18} />
                        <span>JavaScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={18} />
                        <span>Email</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`max-w-lg mx-auto p-6 rounded-xl shadow-md transition-all duration-300 w-full ${
                      theme === "Day"
                        ? "bg-white hover:bg-gray-100 text-slate-900 border border-gray-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700"
                    }`}
                  >
                    <div className="flex justify-center">
                      <Database
                        alt="wikrama-logo"
                        className="w-24 h-24 object-contain sm:w-20 sm:h-20"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-2">
                      <div className="text-center sm:text-left">
                        <h5 className="text-xl font-bold mb-1">
                          Database Development & Management{" "}
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          I design, manage, and optimize databases for both web
                          and mobile applications. With experience in MySQL and
                          PostgreSQL, I ensure efficient data handling,
                          security, and smooth migrations when needed.
                        </p>
                      </div>
                    </div>

                    <hr className="my-4 border-gray-300 dark:border-gray-600" />

                    <div className="pb-2">
                      <p>Tools : </p>
                    </div>
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <SiPostgresql size={18} />
                        <span>Postgre</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <SiMysql size={18} />
                        <span>Mysql</span>
                      </div>
                    </div>
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
                ))}
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

export default About;
